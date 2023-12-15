import React from 'react'

const CardNews = ({ judul, tanggal, deskripsi, gambar }) => {

    const dateObject = new Date(tanggal)
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const getTanggal = `${day}-${month}-${year}`
    return (
        <div className='w-full h-[30vh] bg-gray-200 rounded-lg shadow-md mb-5 flex-row flex'>
            <div className='w-[70%] h-full p-5'>
                <h1 className='text-xl font-bold capitalize'>{judul}</h1>
                <h1 className='text-sm'>Tanggal <span className='italic'>{getTanggal}</span></h1>
                <div className='w-full pt-2 text-justify'>
                    <h1 dangerouslySetInnerHTML={{ __html: deskripsi }}></h1>
                </div>
            </div>
            <div className='w-[30%] h-full'>
                <img src={`storage/gambar/${gambar}`} className='w-full min-h-full rounded-r-lg' />
            </div>
        </div>
    )
}

export default CardNews