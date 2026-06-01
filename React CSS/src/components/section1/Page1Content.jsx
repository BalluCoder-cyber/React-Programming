import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className='py-12 px-10 flex gap-10 items-center justify-between h-[90vh] w-full'>
      <LeftText/>
      <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content
