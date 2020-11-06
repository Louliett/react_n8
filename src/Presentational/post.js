import React from "react";


export const Post=(props)=>{
    return (
        <li className='list-item-space clearfix'>
            <div className='list-item-space-inner'>
                <div className='post-image'>
                    <a className='post-image-link' href='#'>
                        <img className='post-image-image' src={props.src}/>

                    </a>
                </div>
                <div className='post-content'>
                    <h4 className='post-title'>{props.title}</h4>
                    <div className='post-info-holder'>
                        <h5 className='post-info'>
                            {props.text}
                        </h5>

                    </div>

                </div>

            </div>

        </li>
    )
}
