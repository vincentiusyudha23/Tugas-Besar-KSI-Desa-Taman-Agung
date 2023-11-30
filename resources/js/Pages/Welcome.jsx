import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth}) {
    return (
        <Guest>
            <Head title="Welcome" />
            <h1 className='text-justify'>
                Desa Taman Agung merupakan salah satu desa di wilayah Kecamatan Kalianda. Desa Taman Agung menjadi desa definitif di Kabupaten Lampung Selatan sejak Tahun 2005. Nama "Taman Agung" diambil dari bentuk desa yang merupakan hamparan persawahan yang luas membentang dan tumbuha-tumbuhan yang hijau serta keaneka ragaman suku yang hidup berdampingan di dalamnya menyerupai sebuah taman yang luas dan indah. Secara topografis Desa Taman Agung merupakan desa dataran dengan batas-batas wilayah sebagai berikut :
            </h1>
            <ul style={{ listStyleType: 'disc' }} className='pl-10'>
                <li>Sebelah Utara berbatasan dengan Desa Sido Waluyo Kecamatan Sidomulyo</li>
                <li>Sebelah Utara berbatasan dengan Desa Sido Waluyo Kecamatan Sidomulyo</li>
                <li>Sebelah Selatan berbatasan dengan Desa Gunung Terang Kecamatan Kalianda</li>
                <li>Sebelah Timur berbatasan dengan Desa Agom Kecamatan Kalianda</li>
                <li>Sebelah Barat berbatasan dengan Desa Munjuk Sampurna Kecamatan Kalianda</li>
            </ul>
            <h1>Berdasarkan orbitasi jarak tempuh dari Desa Taman Agung ke ibukota Kecamatan Kalianda/kabupaten sekitar 20 KM dengan lama waktu tempuh jika menggunakan kendaraan bermotor 0,5 jam.</h1>
            <h1>Secara geografis Desa Taman Agung memiliki luas wilayah 1.482 Ha dengan penggunaan lahan sebagai berikut :</h1>
        </Guest>
    );
}
