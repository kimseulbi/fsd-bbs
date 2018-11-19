import React from "react";
import api from "../api";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.usernameRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const username = this.usernameRef.current.value;
    const password = e.target.elements.password.value;
    const res = await api.post("/users/login", {
      username,
      password
    });
    localStorage.setItem("token", res.data.token);
    // TODO: 게시글 목록 보여주기
  }
  render() {
    const { onRegister } = this.props;
    return (
      // 아무 의미 없는 코드 <> === React.Fragment 값은 의미
      <React.Fragment>
        <from onSubmit={e => this.handleSubmit(e)}>
          <h1>로그인</h1>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>로그인</button>
        </from>
        <button onClick={() => onRegister()}>회원가입</button>
      </React.Fragment>
    );
  }
}
