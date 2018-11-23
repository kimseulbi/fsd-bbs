// 무언가를 감싸는 컴포넌트를 만들때 사용
import React, { Component } from "react";
import { UserConsumer, withUser } from "../contexts/UserContext";
// onClick={logout} === onClick={()=> logout()}
class Layout extends Component {
  render() {
    // props으로 들어올꺼기때문에
    const { onLoginFormPage, username, logout } = this.props;
    return (
      <div>
        <div className="header">
          헤더
          <div>{username}</div>
          {username ? (
            <button onClick={logout}>로그아웃</button>
          ) : (
            <button onClick={onLoginFormPage}>로그인</button>
          )}
        </div>
        <h1 className="title">{this.props.title}</h1>
        {this.props.children}
        <div className="footer">푸터</div>
      </div>
    );
  }
}
//Consumer 보다는 고차함수를 사용하는게 편리함. 
// 자제 컴포넌트에서도 편하게 사용 할수 있음.
export default withUser(Layout);
