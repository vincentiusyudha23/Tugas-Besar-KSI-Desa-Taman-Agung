import CardNews from '@/Components/CardNews'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const KegiatanPage = () => {

    return (
        <Guest>
            <Head title='Kegiatan Page' />
            <CardNews/>
            <CardNews/>
            <CardNews/>
            <CardNews/>
        </Guest>
    )
}

export default KegiatanPage
