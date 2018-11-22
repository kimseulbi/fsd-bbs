import React, { Component } from "react";
import PostForm from "./PostForm";
import api from "../api";

export default class EditPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };
  }
  async componentDidMount() {
    const {
      data: { title, body }
    } = await api.get(`/posts/${this.props.postId}`);
    this.setState({
      title,
      body
    });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    await api.patch(`/posts/${this.props.postId}`, {
      title,
      body
    });
    // TODO: 게시물 세부 페이지 보여주기
    this.props.onPostDetailPage(this.props.postId);
  }

  render() {
    const { title, body } = this.state;
    // 본문 내용은 나오지 않아서 넣음 타이틀 들어온후에
    if (!title) {
      return "loading...";
    }
    return <PostForm onSubmit={e=> this.handleSubmit(e)} title={title} body={body} />;
  }
}