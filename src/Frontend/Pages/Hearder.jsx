import React from 'react'

const Hearder = () => {
    return (
        <>
            <div className='flex gap-8 header bg-primary w-min-full border-bottom-1 p-3'>
                <div className='gap-5'><img src="" alt="ing" /></div>
                <div className='flex text-right	 gap-6'>
                    <button>Home</button>
                    <button>Job</button>
                    <button>Add Job</button>
                </div>
            </div>
            <div className='flex m-auto bg-primary'>
                <div className='m-auto'>
                    <h1>Lets become a React Dev</h1>
                    <p className='ml-8'>Find a job that fit your skills </p>
                </div>
            </div>
        </>

    )
}

export default Hearder