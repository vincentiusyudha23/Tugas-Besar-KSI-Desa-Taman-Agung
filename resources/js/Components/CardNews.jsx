import React from 'react'

const CardNews = () => {
    return (
        <div className='w-full h-[30vh] bg-gray-200 rounded-lg shadow-md mb-5 flex-row flex'>
            <div className='w-[70%] h-full p-5'>
                <h1 className='text-xl font-bold'>Mobil Pintar</h1>
                <h1 className='text-sm'>Tanggal <span className='italic'>27 Desember 2023</span></h1>
                <div className='w-full pt-2 text-justify'>
                    <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</h1>
                </div>
            </div>
            <div className='w-[30%] h-full'>
                <img src='https://picsum.photos/id/200/1920/1080' className='w-full max-h-full rounded-r-lg' />
            </div>
        </div>
    )
}

export default CardNews