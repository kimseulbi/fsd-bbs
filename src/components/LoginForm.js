import React from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";
import { Form } from "semantic-ui-react";

class LoginForm extends React.Component {
  // 컴포넌트명세서 처럼 사용 할수 있음 -> 기본값으로 적용 됨
  static defaultProps = {
    // 사용자가 로그인 폼을 전송했을 때 호출되는 함수
    // username과 password 인수를 받음
    login: (username, password) => {},
    // 회원 가입 버튼을 눌렀을 때 호출되는 함수
    // 함수를 반드시 넘겨줘야함
    onRegister: null
  }
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
    return <React.Fragment>
        <Form onSubmit={e => {
            this.hendleSubmit(e);
          }}>
          <h1>로그인</h1>
          <Form.Input label="사용자 이름" ref={this.usernameRef} type="text" name="username" />
          <Form.Input label="비밀번호" ref={this.passwordRef} type="password" name="password" />

          <Form.Button primary>로그인</Form.Button>
        </Form>
      <Form.Button secondary onClick={() => onRegister()}>회원 가입</Form.Button>
      </React.Fragment>;
  }
}
export default withUser(LoginForm);
