import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Tani from '../../asset/Tani.png'

const CardKomunitas = () => {
  return (
    <div className='w-full bg-slate-300 rounded-md p-2 flex flex-row mb-2'>
      <img src={Tani} className='w-28 h-28' />
      <div className='px-2 w-full h-full'>
        <h1 className='font-bold'>Nama Komunitas...</h1>
        <div className='w-full pt-14 flex justify-end items-end'>
          <button className='px-3 py-1 rounded-md hover:bg-red-600 bg-red-500 text-white '>Detail</button>
        </div>
      </div>
    </div>
  )
}

const KomunitasPage = () => {
  return (
    <Guest>
      <Head title='Komunitas Page' />
      <div className='w-full flex flex-row'>
        <div className='w-[35%]'>
          <h1 className='text-center text-xl font-bold'>Komunitas Desa</h1>
          <CardKomunitas />
          <CardKomunitas />
          <CardKomunitas />
          <CardKomunitas />
        </div>
        <div className='w-[65%] text-center'>
          DESCRIPTION...
        </div>
      </div>
    </Guest>
  )
}

export default KomunitasPage