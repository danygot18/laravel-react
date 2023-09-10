import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Create from './Create';
import Nav from './Nav';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
    axios
      .get(`http://localhost:4000/api/posts`)
      // .get(${process.env.REACT_APP_API}/posts)
      .then(response => {
        console.log(response);
        setPosts(response.data)
      })
      .catch(error => alert('Error fetching posts'));
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Nav />
      {posts.map((post, i) => (
        <div key= {post.id}>
          <h2>{post.title}</h2>
          <p>{post.slug}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App