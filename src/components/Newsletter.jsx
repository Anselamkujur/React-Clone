import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto  grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div>
                    <form className="flex">
                        <input className='bg-white text-gray-400' type="text" placeholder='Enter your email' id="" />
                         <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
                    </form>
                    <p>We care about the protection of your data. Read out </p>
                    <h1>Privacy Policy.</h1>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
