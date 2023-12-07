import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({auth}) {
    return (
        <Guest>
            <Head title="Welcome" />
            <h1 className='text-justify'>
                Desa Taman Agung merupakan salah satu desa di wilayah Kecamatan Kalianda. Desa Taman Agung menjadi desa definitif di Kabupaten Lampung Selatan sejak Tahun 2005. Nama "Taman Agung" diambil dari bentuk desa yang merupakan hamparan persawahan yang luas membentang dan tumbuha-tumbuhan yang hijau serta keaneka ragaman suku yang hidup berdampingan di dalamnya menyerupai sebuah taman yang luas dan indah. Secara topografis Desa Taman Agung merupakan desa dataran dengan batas-batas wilayah sebagai berikut :
                <ul style={{ listStyleType: 'disc' }} className='pl-10'>
                    <li>Sebelah Utara berbatasan dengan Desa Sido Waluyo Kecamatan Sidomulyo</li>
                    <li>Sebelah Utara berbatasan dengan Desa Sido Waluyo Kecamatan Sidomulyo</li>
                    <li>Sebelah Selatan berbatasan dengan Desa Gunung Terang Kecamatan Kalianda</li>
                    <li>Sebelah Timur berbatasan dengan Desa Agom Kecamatan Kalianda</li>
                    <li>Sebelah Barat berbatasan dengan Desa Munjuk Sampurna Kecamatan Kalianda</li>
                </ul>
                <br/>
                Berdasarkan orbitasi jarak tempuh dari Desa Taman Agung ke ibukota Kecamatan Kalianda/kabupaten sekitar 20 KM dengan lama waktu tempuh jika menggunakan kendaraan bermotor 0,5 jam.
                Secara geografis Desa Taman Agung memiliki luas wilayah 1.482 Ha dengan penggunaan lahan sebagai berikut :
                
                <ul style={{ listStyleType: 'disc' }} className='pl-10'>
                    <li>Pemukiman = 599 ha</li>
                    <li>Persawahan dan Perkebunan/Ladang = 855 ha</li>
                    <li>Pekarangan = 21 ha</li>
                    <li>Pemakaman Umum = 3,5 ha</li>
                    <li>Prasarana Umum = 4,25 ha</li>
                </ul>
                <br/>
                Dan secara administrasi Desa Taman Agung terdiri dari 7 (tujuh) Dusun dengan 22 (dua puluh dua) Rukun Tetangga/RT dengan rincian sebagai berikut :
                <ul className='pl-5'>
                    <li>1. Dusun I/Cinta Jaya terdiri dari 5 (lima) RT</li>
                    <li>2. Dusun II/Sumedang terdiri dari 2 (dua) RT</li>
                    <li>3. Dusun III/Cinta Sari terdiri dari 3 (tiga) RT</li>
                    <li>4. Dusun IV/Rejo Sari terdiri dari 3 (tiga) RT</li>
                    <li>5. Dusun V/Kebun Agung Utara terdiri dari 3 (tiga) RT</li>
                    <li>6. Dusun VI/Marga Sari terdiri dari 2 (dua) RT</li>
                    <li>7. Dusun VII/Kebun Agung Selatan terdiri dari 4 (empat) RT</li>
                </ul>
                <br/>
                Berdasarkan data demografi jumlah penduduk Desa Taman Agung pada tahun 2018 sebanyak 3.482 jiwa terdiri penduduk laki-laki sebanyak 1.761 jiwa dan penduduk perempuan sebanyak 1667 jiwa, serta jumlah Kepala Keluarga (KK) sebanyak 3.281 KK. Sedangkan Pasangan Usia Subur (PUS) sebanyak 734 PUS. Adapun mata pencaharian penduduk di Desa Taman Agung dapat digambarkan sebagai berikut :
                <ul className='pl-5'>
                    <li>1. Petani sebanyak : 834 Jiwa</li>
                    <li>2. Pedagang sebanyak : 46 Jiwa</li>
                    <li>3. PNS/TNI/POLRI sebanyak : 5 Jiwa</li>
                    <li>4. Pegawai Swasta sebanyak 215 Jiwa</li>
                    <li>5. Wiraswasta sebanyak : 26 Jiwa</li>
                    <li>6. Pekerja Lepas sebanyak : 257 Jiwa</li>
                    <li>7. Pekerjaan Lainnya sebanyak : 759 Jiwa</li>
                    <li>8. Tidak/Belum Bekerja sebanyak : 1.340 Jiwa</li>
                </ul>
                <br/>
                Desa Taman Agung ditetapkan sebagai Kampung Keluarga Berencana di Kabupaten Lampung Selatan pada Tahun 2018 berdasarkan Keputusan Bupati Lampung Selatan Nomor : B/161.1/IV.09/HK/2019 tanggal 26 Maret 2019 tentang Pembentukan dan Penetapan Kampung Keluarga Berencana Kabupaten Lampung Selatan Tahun 2018. Saat ini Desa Taman Agung dipimpin oleh seorang Kepala Desa yang bernama WIDODO dan SUNARMI sebagai Ketua Tim Penggerak PKK Desa Taman Agung.
            </h1>
            
        </Guest>
    );
}
