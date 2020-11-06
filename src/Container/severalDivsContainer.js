import React,{useEffect, useState} from "react";
import {SeveralDivs} from '../Presentational/severalDivs'


export const SeveralDivsContainer=()=>{
    var [posts, setPosts] = useState([{}])
    useEffect(()=> {
        fetch('http://localhost:3000/db/posts.json')
            .then(res => res.json())
            .then((result) => {
                setPosts(result['posts']);
            }, (error) => {
                setPosts({error: 'error'})
            })
    },[])

    return <SeveralDivs posts={posts}/>
}
