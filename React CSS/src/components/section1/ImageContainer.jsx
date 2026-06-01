import React from 'react'

const ImageContainer = (props) => {
    return (
        <div className='h-full overflow-hidden relative w-80 flex shrink-0 rounded-4xl '>           
            <img className='h-full w-full object-cover' src={props.image} alt="" />
            <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-3xl font-semibold rounded-full h-10 w-10 flex justify-center item-center'> {props.count}</h2>
                <div>
                    <p className='text-xl leading-normal text-white mb-10'>{props.info}</p>
                    <div className='flex justify-between'>
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full'><i className="ri-arrow-right-long-line"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageContainer
