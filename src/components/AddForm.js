import React, { useState } from 'react';

function AddForm({ sendPostToServer }) {

    const formData = {
        title: '',
        body: ''
    }

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    const changeTitle = (e) => {
        setTitle(e.target.value);
    }

    const changeBody = (e) => {
        setBody(e.target.value);
    }

    const validForm = (e) => {
        e.preventDefault();
        if (title && body) {
            setError('');
            formData.title = title;
            formData.body = body;

            sendPostToServer(formData);
        } else {
            setError('Enter valid data!');
        }
    }

    return (
        <div className="addForm">
            <h3>Add Post</h3>
            <form>
                <input onChange={(e) => changeTitle(e)} type="text" placeholder="Write title of your post..."/>
                <input onChange={(e) => changeBody(e)} type="text" placeholder="Write text of your post..."/>
                <div className="addForm__error">{error}</div>
                <button onClick={validForm} className="addForm__btn">Add</button>
            </form>
        </div>
    )
}

export default AddForm;
