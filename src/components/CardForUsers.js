import React from 'react';

function CardForUsers({ item, getPostsOfUser }) {

    const { id, name, username, email, company } = item;
    const initials = name.split(' ').map(item => item.match(/[A-Z]/g).join(''))

    return (
        <div onClick={() => getPostsOfUser(id)} className="users">
            <div className="users__icon">{initials}</div>
            <div>
                <p className="users__name">{name}</p>
                <p className="users__username">({username})</p>
                <p>{company.name}</p>
                <p className="users__email">{email}</p>
            </div>
        </div>
    )
}

export default CardForUsers;