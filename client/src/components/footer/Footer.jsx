import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <>
        <footer className='w-[100%] text-[#E3E6E6]'>
            <div className='flex justify-center logo bg-[#232F3E]'>
                <img className='w-[110px] invert' src="./amazon.png" alt="" />
            </div>

            <div className='bg-[#131921] pb-10 pt-2 space-x-4 flex-wrap flex justify-center items-center'>
                <p>Conditions of Use</p>
                <p>Privacy Notice</p>
                <p>Interest-Based Ads</p>
                <p><CopyrightIcon/> 1996-2024, Amazon.com, Inc. or its affiliates</p>
            </div>
        </footer>
    </>
  )
}

export default Footer