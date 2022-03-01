import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./Books.css";
import axios from "axios";
import Loading from "../../Loading";

const GoogleBooks = ({ isAuth, setIsAuth }) => {
  const [books, setBooks] = useState("action");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const [apiKey, setApiKey] = useState(
    "AIzaSyDX4oONZtJz13VKRvufP7gyGkoOKmdb4io"
  );
  const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${books}&key=${apiKey}&maxResults=40`;

  const getBooks = () => {
    axios
      .get(BASE_URL)
      .then((resp) => (setLoading(true), setResult(resp.data.items)))
      .catch((error) => setResult("ERRR"));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="containers">
        <p className="p-2 mt-2 btn btn-primary d-flex justify-content-center api">
          <a href="https://developers.google.com/books" target="_blank">
            {" "}
            CLICK TO VISIT API SOURCE
          </a>
        </p>
        <div className="sidebar">
          <Sidebar isAuth={isAuth} setIsAuth={setIsAuth} />
          <div className="norris mt-4">
            <div className="former">
              <div className="googlebooks form-control">
                <input
                  type="text"
                  placeholder="Search book..."
                  className="my-4 border-1 p-2"
                  onChange={(e) => setBooks(e.target.value)}
                />
                <button onClick={getBooks} className="btn btn-primary">
                  SEARCH
                </button>
              </div>
              <div className="books-container">
                {loading ? (
                  <>
                    {" "}
                    {result.map((books) => (
                      <>
                        <div className="book">
                          <h4>{books.volumeInfo.title}</h4>
                          <img src={books.volumeInfo.imageLinks.thumbnail} />
                          <p>Publish Date: {books.volumeInfo.publishedDate}</p>
                          <a href={books.volumeInfo.infoLink}>
                            <button className="btn btn-primary" target="_blank">
                              Book Info
                            </button>
                          </a>
                        </div>
                      </>
                    ))}
                  </>
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleBooks;
