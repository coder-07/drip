import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import axios from 'axios'

const List = () => {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://cdn.contentful.com/spaces/rt3kkpldvuz8/environments/master/entries?access_token=IkcFOdcUNLz2jTW8_ecjqA0h2FP2IQg42lwOfCugFEE').then(post => {
            console.log(post.data.items);
            setPost(post.data.items);
        }).catch(err => console.log(err))
    }, [])

    return (
        posts.length > 0 ? (
            posts.map((post, index) => {
                return (
                    <ListItem key={post.sys.id} post={post.fields} idx={index} />
                )
            })
        ) : (
            <div>No Posts</div>
        )
    );
}
 
export default List;