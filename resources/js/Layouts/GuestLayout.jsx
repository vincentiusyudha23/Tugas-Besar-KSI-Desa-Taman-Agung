import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import BgImage from '/resources/asset/img_nav.jpg'
import Lambang from '../../asset/lambang.png'
import NavLink from '@/Components/NavLink';

export default function Guest({ children }) {
    const myBgNavbar = {
        backgroundImage: `url("${BgImage}")`,
        backgroundSize: 'cover',
        backgroundPositionY: '-250px',
    }
    const noNavbar = route().current('login') || route().current('register')
    return (
        <div className="w-full h-screen">
            <nav className='w-full h-[16vh] fixed top-0' style={myBgNavbar}>
                <div className='w-full h-full flex px-5 items-center bg-white/60'>
                    <div className='w-[35%] flex justify-center'>
                        <img src={Lambang} className='w-20' />
                        <div className='text-lg font-bold flex flex-col items-center justify-center pl-3'>
                            <h1 className='text-2xl'>Desa Taman Agung</h1>
                            <h1 className='pl-3'>
                                kalianda, Lampung Selatan
                            </h1>
                        </div>
                    </div>
                    <div className='flex-col w-[80%] h-full '>
                        <div className={`flex justify-end items-end w-full h-full gap-5 ${noNavbar && 'hidden'}`}>
                            <NavLink href={route('homepage')} active={route().current('homepage')}>Profile</NavLink>
                            <NavLink href={route('kegiatanpage')} active={route().current('kegiatanpage')}>Kegiatan</NavLink>
                            <NavLink href={route('kesehatanpage')} active={route().current('kesehatanpage')}>Kesehatan</NavLink>
                            <NavLink href={route('cuacapage')} active={route().current('cuacapage')}>Cuaca</NavLink>
                            <NavLink href={route('komunitaspage')} active={route().current('komunitaspage')}>komunitas</NavLink>
                            <NavLink href={route('sosialpage')} active={route().current('sosialpage')}>Sosial</NavLink>
                        </div>
                    </div>
                </div>
                <div className='w-full h-4 bg-black'></div>
            </nav>
            <div className='w-full bg-white px-5 pt-40 pb-16'>
                {children}
            </div>
            <div className='w-full bg-gray-300 fixed bottom-0 text-center py-2'>
                @Desa Taman Agung 2023
            </div>
        </div>
    );
}
