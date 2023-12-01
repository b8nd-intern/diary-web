import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todaywriting.css";
import CONFIG from "../../config.json";
import Cookies from 'js-cookie';

const Todaywriting = () => {
  const accessToken = Cookies.get("accessToken");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const userId = "유저아이디(UUID 포맷)"
    //서버에서 받아오는 부분
    axios
      .get(`${CONFIG.serverUrl}/post/monthForEvery/${year}/${month}/${userId}`, {
        headers: {
          Authorization:
            `Bearer ${accessToken}`
        },
      })
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.data.status === 0) {
          setPosts(response.data.data);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  if (!posts) return null;

  return (
    <div className="today">
      <p className="todaywriring">오늘의 글</p>
      {/* 받아온 글 생성 */}
      <div className="notepadBoard">
        {posts.map((post) => (
          <div
            className="notepad"
            style={{ backgroundColor: post.color }}
            key={post.postId}
          >
            <img src={post.emoji} alt="Img" />
            <textarea style={{ backgroundColor: post.color }} readOnly>
              {post.content}
            </textarea>
            <p>{post.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todaywriting;
