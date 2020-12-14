import React from "react";
import {PostContainer} from "../Container/postContainer";


export const SeveralDivs=(props)=>{
    let posts=[]
    if(props.posts.length>0){
         posts=props.posts.map((post,index)=><PostContainer key={index} src={post.src} text={post.text} title={post.title}/>)}

    return(
        <div className='several-divs-wrapper'>
            <div className='grid-row-section'>
                <div className='toilet-row well-played-bro-row toilet-custom'>
                    <div className='toilet-col-12'>
                        <div className='toilet-col-inner clearfix'>
                            <div className='well-played-bro-wrapper'>
                                <div className='list-holder'>
                                    <div className='list-holder-outer-space'>
                                        <ul className='list'>
                                            {posts}
                                        </ul>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )

}
