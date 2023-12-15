import React from 'react'

const CardWeather = ({ judul, tanggal, deskripsi, gambar }) => {
    const dateObject = new Date(tanggal)
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1;
    const year = dateObject.getFullYear();

    const getTanggal = `${day}-${month}-${year}`
    return (
        <div className='w-full bg-slate-300 p-3 rounded-md mb-2'>
            <div className='flex w-full'>
                <img src={`storage/gambar/${gambar}`} className='w-52' />
                <div className='px-2 py-1'>
                    <h1 className='font-bold'>{judul}</h1>
                    <h1 className='text-sm'>{getTanggal}</h1>
                    <h1 className='text-base pt-2' dangerouslySetInnerHTML={{ __html: deskripsi }}></h1>
                </div>
            </div>
        </div>
    )
}

export default CardWeather