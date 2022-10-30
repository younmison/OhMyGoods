import axios from "axios";

// action 함수 인자로 필요한 것 전달
function addPost({ title, content, writer }, nav) {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: "http://localhost:8000/admin/board/write",
      data: {
        title,
        content,
        writer,
      },
    });
    if (title === "" || content === "") {
      alert("공백안됨");
      nav("/admin/board/write");
    } else {
      nav("/board");
    }
  };
}

function getPostAll() {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: "http://localhost:8000/board/",
    });
    const { data } = post;
    dispatch({ type: "GETPOST", payload: data });
  };
}

function getPost(id) {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: `http://localhost:8000/board/details`,
      data: {
        postID: id,
      },
    });
    const { data } = post;
    dispatch({ type: "GET_POST_DETAILS", payload: data });
  };
}

function editPost({ postId, title, content, writer }, nav) {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "post",
      url: `http://localhost:8000/admin/board/edit/${postId}`,
      data: {
        postId,
        title,
        content,
        writer,
        updatedAt: Date.now(),
      },
    });
    if (post.title === "" || post.content === "") {
      alert("내용을 입력해주세요");
    } else {
      nav("/admin/board");
      alert("수정완료");
    }
  };
}

function deletePost(postId) {
  return async (dispatch, getState) => {
    const post = await axios({
      method: "get",
      url: `http://localhost:8000/admin/board/delete/${postId}`,
      data: {
        postId,
      },
    });
    const { data } = post;
    dispatch({ type: "DELETEPOST", payload: data });
  };
}

export const boardAction = { addPost, getPostAll, getPost, editPost, deletePost };
