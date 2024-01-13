import React from 'react'

const page = () => {
  return (
    <div>
    <div className='heading-1'>Audit Trail</div>
    <div className='flex space-x-60'>
        <div className='p-10 tex'>User</div>
        <div className='p-10'>Wallet Address</div>
        <div className='p-10'>Action</div>
        <div className='p-10'>TimeStamp</div>
    </div>
    </div>
  )
}

export default page