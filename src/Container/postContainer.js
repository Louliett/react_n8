import React,{useState, useEffect} from "react";
import {Post} from '../Presentational/post'



export const PostContainer=(props)=>{
    return <Post src={props.src} title={props.title} text={props.text}/>
}
