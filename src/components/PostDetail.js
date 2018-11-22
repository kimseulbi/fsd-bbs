import React, { Component } from "react";
import api from "../api";
import Layout from "./Layout";
import {UserConsumer} from "../contexts/UserContext"

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
    const { title, body } = this.state;
    const { postId,onEditPostFormPage } = this.props;
    return (
      <Layout title={title}>
        <h1>게시물</h1>
        <UserConsumer>
          {({id}) => {
            if (this.state.userId ===id){
              return <button onClick={()=> onEditPostFormPage(postId)}>수정</button>
            }
          }}
        </UserConsumer>
        <p>{title}</p>
        <div>{body}</div>
      </Layout>
    );
  }
}
