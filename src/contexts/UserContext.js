import React, { Component } from "react";
import api from "../api";

const { Provider, Consumer } = React.createContext({
  username: 'fast',
  id:0,
  login: () => {},
  logout: () => {}
});
// 횡단 관심사 
export default class UserProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: null
    };
  }

  async componentDidMount() {
    if (localStorage.getItem("token")) {
      await this.refreshUser();
    }
  }

  // 이벤트 객체를 가질 필요가 없습니다.
  // 로그인 기능만 가지고 있음
  async login(username, password) {
    const res = await api.post("/users/login", {
      username,
      password
    });
    localStorage.setItem("token", res.data.token);
    await this.refreshUser();
    // TODO: 게시글 목록 보여주기
    this.props.onPostListPage()
  }

  logout(){
    // 로컬 스토리지에서 토큰 제거 
    localStorage.removeItem('token')
    // 사용 정보 캐시 초기화
    this.setState({
        id:null,
        username: null
    })
    // TODO: 로그인 폼 보여주기
    
  }
  async refreshUser() {
    const res2 = await api.get("/me");
    this.setState({ id: res2.data.id, username: res2.data.username });
  }
  render() {
    // 로그인 했을때 상태 정보 바뀌기
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this),
      logout: this.logout.bind(this)
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

// 함수로 만들어준것? 
// with를 써주는게 관례
 function withUser(WrappedComponent) {
  function WithUser(props) {
     return (
     <Consumer>
         {value => <WrappedComponent {...value} {...props} />}
       </Consumer>
     )
   }
   WithUser.displayName = `withUser(${getDisplayName(WrappedComponent)})`;
   return WithUser;
 }

export { UserProvider, Consumer as UserConsumer, withUser };
