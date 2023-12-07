import CardNews from '@/Components/CardNews'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const SosialPage = () => {
  return (
    <Guest>
        <Head title='Sosial Page'/>
        <div className='w-full px-5 py-1'>
            <CardNews/>
            <CardNews/>
        </div>
    </Guest>
  )
}

export default SosialPage