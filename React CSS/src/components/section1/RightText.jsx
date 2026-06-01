import React from 'react'
import ImageContainer from './ImageContainer'

const RightText = (props) => {
  return (
    <div id='scroll' className='h-full w-2/3 p-3 flex gap-5 flex-nowrap overflow-x-auto rounded-4xl'>
     {props.users.map(function(elem){
      return <ImageContainer image={elem.img} tag={elem.tag} info={elem.info} count={elem.count} color={elem.color}/>
     })}
     
     
    </div>
  )
}

export default RightText
