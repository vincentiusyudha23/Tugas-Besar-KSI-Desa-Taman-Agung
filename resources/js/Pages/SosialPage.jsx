import CardNews from '@/Components/CardNews'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const SosialPage = ({ sosial }) => {
  return (
    <Guest>
      <Head title='Sosial Page' />
      <div className='w-full px-5 py-1'>
        {sosial.length ? (
          <>
            {sosial.map((item, idx) => (
              <CardNews key={idx} judul={item.judul} deskripsi={item.deskripsi} gambar={item.gambar} tanggal={item.created_at} />
            ))}
          </>
        ) : (
          <div className='w-full h-[50vh] flex justify-center items-center'>
            <h1>Belum ada Postingan</h1>
          </div>
        )}
      </div>
    </Guest>
  )
}

export default SosialPage