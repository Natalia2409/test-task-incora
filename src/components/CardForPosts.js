import React from 'react';
import del from '../img/delete.png'

function CardForPosts({ item, deletePost }) {

    const { title, body, id } = item;

    const newTitle = title[0].toUpperCase() + title.substring(1);

    return (
        <div className="posts">
            <div>
                <h4>{newTitle}</h4>
                <p className="posts__body">{body}</p>
            </div>
            <button onClick={() => deletePost(id)}><img className="posts__delete" src={del} alt="delete" /></button>
        </div>
    )
}

export default CardForPosts;