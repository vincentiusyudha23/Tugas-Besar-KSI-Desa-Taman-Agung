import React from 'react'

const CardWeather = ({ title, date, deskripsi }) => {
    return (
        <div className='w-full bg-slate-300 p-3 rounded-md mb-2'>
            <div className='flex w-full'>
                <img src="https://picsum.photos/id/14/1920/1080" className='w-52' />
                <div className='px-2 py-1'>
                    <h1 className='font-bold'>Title News...</h1>
                    <h1 className='text-sm'>Date Time...</h1>
                    <h1 className='text-base pt-2'>Description...</h1>
                </div>
            </div>
        </div>
    )
}

export default CardWeather