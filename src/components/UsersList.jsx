import React from 'react';

const UsersList = ({ users, text }) => {
  return (
    <div className="ui grid users-list">
      {users
        .filter((user) => (text ? user.login.includes(text) : user))
        .map((user, index) => {
          return (
            <div
              className="four wide column user"
              key={index}
              style={{
                background: `url(${`https://avatars0.githubusercontent.com/u/${user.id}?v=4`})`,
              }}
            >
              <h4 className="login">{user.login}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default UsersList;
