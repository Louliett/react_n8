import React from 'react'
import {Carousel} from 'react-responsive-carousel'

export const Carousell=(props)=>{
    var inner=props.items.map(item => <div><img src={item.src} /><span className='info'>{item.name}</span></div>)

    return(

        <Carousel showArrows={true} onChange={props.onChange} onClickItem={props.onClickItem} onClickThumb={props.onClickThumb}>

            {inner}

        </Carousel>
    )

}
