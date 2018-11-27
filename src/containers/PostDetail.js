// 외부 세계 연결
import React, { Component } from "react";
import api from "../api";
import PostDetailView from "../components/PostDetailView";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    // 서버로 부터 자료를 받기 전, 받으면 채우기 위해서
    this.state = {
      title: "",
      body: "",
      userId: null
    };
  }

  async componentDidMount() {
    //  re.data 분해 대립
    const {
      data: { title, body, userId }
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body,
      userId
    });
  }
  render() {
    const { onEditPostFormPage, postId } = this.props;
    const { userId, title, body } = this.state;
    return (
      <PostDetailView
        userId={userId}
        onEditPostFormPage={onEditPostFormPage}
        postId={postId}
        title={title}
        body={body}
      />
    );
  }
}
