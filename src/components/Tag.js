import React from 'react';

import './style/Tag.css';

const Tag = (props) => {
    return(
        <div className="Tag">{ props.text }</div>
    );
}

export default Tag;