import { useCustomHook } from '@/Context/Context'
import React from 'react'

function Message() {
  const {err} = useCustomHook()
  return (
    <>
     <p className='text-red-500 pt-3'>{ err }</p> 
    </>
  )
}

export default Message
