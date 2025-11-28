import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 w-full h-screen justify-center items-center bg-gray-100'>


                <div className='relative h-96 w-80'>
                    <img
                        className='w-full h-full object-cover rounded-2xl'
                        src='https://images.pexels.com/photos/672444/pexels-photo-672444.jpeg'
                        alt='Nature'
                    />
                    <div className='absolute bottom-0 left-0 right-0 bg-black  text-white p-3 rounded-b-2xl'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque officia?
                            Hic voluptates qui ratione labore temporibus eos obcaecati praesentium?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
