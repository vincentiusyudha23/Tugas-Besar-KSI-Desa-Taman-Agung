import React from 'react'

const CardHealt = ({ judul, deskripsi, gambar }) => {
    
    return (
        <div className='w-full h-[30vh] bg-gray-200 rounded-lg shadow-md mb-5 flex-row flex'>
            <div className='w-[25%] h-full'>
                <img src={`storage/gambar/${gambar}`} className='w-full max-h-full rounded-l-lg' />
            </div>
            <div className='w-[75%] h-full p-5'>
                <h1 className='text-xl font-black'>{judul}</h1>
                <div className='w-full pt-2 text-justify'>
                    <h1 dangerouslySetInnerHTML={{ __html: deskripsi }}></h1>
                </div>
            </div>
        </div>
    )
}

export default CardHealt