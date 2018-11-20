import React, { Component } from "react";
import api from "../api";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    // 서버로 부터 자료를 받기 전, 받으면 채우기 위해서
    this.state = {
      title: "",
      body: ""
    };
  }

  async componentDidMount() {
    //  re.data 분해 대립
    const {
      data: { title, body }
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body
    });
  }

  render() {
    const { title, body } = this.state;
    const { postId,onEditPostFormPage } = this.props;
    return (
      <div>
        <h1>게시물</h1>
        <button onClick={()=>onEditPostFormPage(postId)}>수정</button>
        <p>{title}</p>
        <div>{body}</div>
      </div>
    );
  }
}
