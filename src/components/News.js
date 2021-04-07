import React, { useState, useEffect } from 'react';
import CardForUsers from './CardForUsers';
import CardForPosts from './CardForPosts';
import Result from './Result';
import AddForm from './AddForm';
import exit from '../img/exit.png';
import axios from 'axios';

function News() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [logOut, setLogout] = useState(false);
    const [error, setError] = useState('');
    const [addPost, setAddPost] = useState(false);

    useEffect(() => {
        getAllUsers();
        getPostsOfUser(1);
    }, []);

    const catchError = (err) => {
        if (err.response) {
            const error = err.response.status;
            setError(`${error} Not Found`)
          } else if (err.request) {
            setError(err.request)
          } else {
            setError("Error")
          }
    }

    const getAllUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => setUsers(res.data))
                .catch(error => catchError(error));
    }

    const getPostsOfUser = (id) => {
        setPosts([]);
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                .then(res => setPosts(res.data))
                .catch(error => catchError(error));
    }

    const loggingOut = () => {
        setLogout(true)
    }

    const addingPost = () => {
        setAddPost(true);
    }

    const sendPostToServer = (formData) => {
        axios.post('https://jsonplaceholder.typicode.com/posts', { formData })
            .then(res => {
                if (res.status === 201) {
                    console.log(res);
                    alert('Your post is adding!');
                }
            })
            .catch(err => catchError(err));
        setAddPost(false);
    }

    const deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res);
                    alert(`Your post ${res.config.url.substr(43)} is deleted!`);
                }
            })
            .catch(err => catchError(err));
    }

    return (
        <div>
            {!logOut && <div className="news">
                            <div>
                                <h2>Users</h2>
                                {users && users.map(item => <CardForUsers getPostsOfUser={getPostsOfUser} item={item} key={item.id} />)}
                            </div>
                            {!addPost && <div className="post">
                                            <h2>Posts</h2>
                                            {posts && posts.map(item => <CardForPosts deletePost={deletePost} item={item} key={item.id}/>)}
                                            <button onClick={addingPost} className="news__add">+</button>
                                        </div>}
                            {addPost && <AddForm sendPostToServer={sendPostToServer} />}
                            <div onClick={loggingOut} className="logout">
                                <img src={exit} alt="exit" />
                                <p>Logout</p>
                            </div>
                        </div>}
            {logOut && <Result />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default News;
