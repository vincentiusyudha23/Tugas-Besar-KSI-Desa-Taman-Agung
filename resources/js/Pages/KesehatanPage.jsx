import CardHealt from '@/Components/CardHealt'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const KesehatanPage = ({ kesehatan }) => {
  return (
    <Guest>
      <Head title='Kesehatan Page' />
      {kesehatan.length ? (
        <>
          {kesehatan.map((item, idx) => (
            <CardHealt key={idx} judul={item.judul} deskripsi={item.deskripsi} gambar={item.gambar} />
          ))}
        </>
      ) : (
        <div className='w-full h-[50vh] flex justify-center items-center'>
          <h1>Belum ada Berita</h1>
        </div>
      )}
    </Guest>
  )
}

export default KesehatanPage