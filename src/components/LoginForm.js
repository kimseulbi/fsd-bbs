import React from "react";
import { UserConsumer } from "../contexts/UserContext";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    // const username = e.target.elements.username.value
    // from UI를 사용 하지 않는 경우 에 Ref를 사용 한다.
    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  hendleSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    this.props.login(username, password);
  }

  // 아무 의미 없는 코드 <> === React.Fragment 값은 의미
  render() {
    const { onRegister } = this.props;
    return (
      <React.Fragment>
        <form onSubmit={e => {this.hendleSubmit(e)}}>
          <h1>로그인</h1>
          <input ref={this.usernameRef} type="text" name="username" />
          <input ref={this.passwordRef} type="password" name="password" />

          <button>로그인</button>
        </form>
        <button onClick={() => onRegister()}>회원 가입</button>
      </React.Fragment>
    );
  }
}
// 로그인폼 컴포넌트 사용법가 똑같다.?
// 로그인폼에 props를 똑같이 넣음?
export default props => {
  return (
    <UserConsumer>
      {({ login }) => <LoginForm {...props} login={login} />}
    </UserConsumer>
  );
};
