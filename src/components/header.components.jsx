import React from 'react';
const Header = (props) => {
  return (
    <div className="ui secondary  menu">
      <div className="center item">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="search user"
            onChange={props.handleTextChange}
          />
          <i className="search link icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
