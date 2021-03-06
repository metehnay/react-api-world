import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./CreatePost.css";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [ms, setMs] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [linkin, setLinkin] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      imageURL,
      ms,
      linkin,
      name: auth.currentUser.displayName,
      id: auth.currentUser.uid,

      photoURL: auth.currentUser.photoURL,
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Container fluid="p-5 d-flex justify-content-center mt-5 pt-5">
        <Form>
          <Link to="/" className="btn btn-primary p-2 m-2">
            Back to homepage
          </Link>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={11}>
              API Title
            </Form.Label>
            <Col sm={14}>
              <Form.Control
                type="text"
                placeholder="API Title..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            onChange={(e) => setLinkin(e.target.value)}
          >
            <Form.Label column sm={11}>
              API Link
            </Form.Label>
            <Col sm={14}>
              <Form.Control type="text" placeholder="API Link..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={11}>
              API Image
            </Form.Label>
            <Col sm={14}>
              <Form.Control
                type="text"
                placeholder="API URL..."
                onChange={(e) => setImageURL(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={11}>
              Average MS
            </Form.Label>
            <Col sm={14}>
              <Form.Control
                type="number"
                placeholder="Average MS..."
                onChange={(e) => setMs(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mx-auto">
            <Col sm={{ span: 10, offset: 4 }}>
              <Button variant="primary" onClick={createPost}>
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default CreatePost;
