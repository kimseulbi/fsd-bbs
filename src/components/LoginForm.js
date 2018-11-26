import React from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";
import { Form } from "semantic-ui-react";

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
// 로그인폼 컴포넌트 사용법가 똑같다.?
// 로그인폼에 props를 똑같이 넣음?
// UserConsumer를 LoginForm 에 둘러 쌈으로써 로그인폼 내부 안에서 사용 만이 아니라 전체적으로 감싸서 밖으로 hendleSubmit을 놓을수 있어서 ???
// UserContext withUser 함수로 변경
// export default props => {
//   return (
//     <UserConsumer>
//       {({ login }) => <LoginForm {...props} login={login} />}
//     </UserConsumer>
//   );
// };
export default withUser(LoginForm);
