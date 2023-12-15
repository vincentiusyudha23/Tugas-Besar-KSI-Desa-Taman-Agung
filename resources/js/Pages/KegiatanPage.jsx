import CardNews from '@/Components/CardNews'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

const KegiatanPage = ({ kegiatan }) => {

    return (
        <Guest>
            <Head title='Kegiatan Page' />
            {kegiatan.length ? (
                <>
                    {kegiatan.map((item, idx) => (
                        <CardNews key={idx} judul={item.judul} tanggal={item.created_at} deskripsi={item.deskripsi} gambar={item.gambar} />
                    ))}
                </>
            ) : (
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <h1>Belum ada Kegiatan</h1>
                </div>
            )}

        </Guest>
    )
}

export default KegiatanPage
