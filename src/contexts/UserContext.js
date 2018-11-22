import React, { Component } from "react";
import api from "../api";

const { Provider, Consumer } = React.createContext();

export default class UserProvider extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id: null,
         username: null
      }
    }

    async componentDidMount(){
        if(localStorage.getItem('token')){
            await this.refreshUser()
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
    await this.refreshUser()
    // TODO: 게시글 목록 보여주기
  }
async refreshUser(){
    const res2 = await api.get("/me");
    this.setState({ id: res2.data.id, username: res2.data.username });
}
  render() {
      // 로그인 했을때 상태 정보 바뀌기
    const value = {
      username: this.state.username,
      id: this.state.id,
      login: this.login.bind(this)
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
