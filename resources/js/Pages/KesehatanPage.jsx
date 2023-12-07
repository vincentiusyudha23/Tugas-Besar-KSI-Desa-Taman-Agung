import CardHealt from '@/Components/CardHealt'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const KesehatanPage = () => {
  return (
    <Guest>
        <Head title='Kesehatan Page'/>
        <CardHealt/>
        <CardHealt/>
        <CardHealt/>
    </Guest>
  )
}

export default KesehatanPage