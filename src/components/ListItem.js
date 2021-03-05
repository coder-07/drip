import React, {useState} from 'react';

const ListItem = ({post, idx}) => {
    const [font, setFont] = useState()

    return (
        <div className="post-body">
            <img src={post.url} alt="alternate"/>
            <h1 style={{fontSize: parseInt(font)}}>{post.title}</h1>
            <input type="number" onInput={(e) => {setFont(e.target.value)}}/>
            <div>{post.body}</div>
        </div>
    );
}
 
export default ListItem;