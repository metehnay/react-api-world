import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css";

const Home = ({ isAuth, setIsAuth }) => {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  return (
    <div className="containers">
      <div className="sidebar">
        <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
        <div className="centered">
          <div className="bordered">
            <button id="ado">
              <Link to="/createpost">+ Add API</Link>
            </button>
          </div>
          <div className="new-container">
            {postLists.map((post) => {
              return (
                <div className="post">
                  <div className="postimage">
                    <div className="del">
                      <p id="name">{post.name}</p>
                    </div>
                    <div className="images">
                      <a href={post.linkin}>
                        <p className="ss">{post.title}</p>

                        <img src={post.imageURL} id="img-photo" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
