import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'

const CardKomunitas = ({ gambar, judul, onDetailClick }) => {
  return (
    <div className='w-full bg-slate-300 rounded-md p-2 flex flex-row mb-2'>
      <img src={`storage/gambar/${gambar}`} className='w-28 h-28' />
      <div className='px-2 w-full h-full'>
        <h1 className='font-bold'>{judul}</h1>
        <div className='w-full pt-14 flex justify-end items-end'>
          <button className='px-3 py-1 rounded-md hover:bg-red-600 bg-red-500 text-white ' onClick={onDetailClick}>Detail</button>
        </div>
      </div>
    </div>
  )
}

const KomunitasPage = ({ komunitas }) => {
  const [idxkomunitas, setIdxKomunitas] = useState(null)

  const getIdxKomunitas = (index) => {
    setIdxKomunitas(index)
  }
  return (
    <Guest>
      <Head title='Komunitas Page' />
      <div className='w-full flex flex-row'>
        <div className='w-[35%]'>
          <h1 className='text-center text-xl font-bold'>Komunitas Desa</h1>
          {komunitas.length ? (
            <>
              {komunitas.map((item, idx) => (
                <CardKomunitas key={idx} gambar={item.gambar} judul={item.judul} deskripsi={item.deskripsi} onDetailClick={() => getIdxKomunitas(idx)} />
              ))}
            </>
          ) : (
            <div className='w-full h-[50vh] flex justify-center items-center'>
              <h1>Belum ada Komunitas</h1>
            </div>
          )}
        </div>
        <div className='w-[65%] text-justify p-3'>
          {idxkomunitas !== null && (
            <h1 dangerouslySetInnerHTML={{ __html: komunitas[idxkomunitas].deskripsi }}>

            </h1>
          )}
        </div>
      </div>
    </Guest>
  )
}

export default KomunitasPage