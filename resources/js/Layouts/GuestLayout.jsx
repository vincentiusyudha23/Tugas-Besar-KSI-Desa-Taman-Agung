import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import BgImage from '/resources/asset/img_nav.jpg'
import Lambang from '../../asset/lambang.png'
import NavLink from '@/Components/NavLink';

export default function Guest({ children }) {
    const myBgNavbar = {
        backgroundImage: `url("${BgImage}")`,
        backgroundSize: 'cover',
        backgroundPositionY: '-300px',
        backgroundAttachment: 'fixed',
    }
    return (
        <div className="w-full h-screen" style={myBgNavbar}>
            <nav className='w-full h-[16vh] bg-white/60'>
                <div className='w-full h-full flex px-5 items-center'>
                    <img src={Lambang} className='w-20'/>
                    <div className='flex-col w-full h-full '>
                        <h1 className='text-center font-bold text-lg'>Desa Taman Agung, Kalianda, Lampung Selatan</h1>
                        <div className='flex justify-center items-center w-full h-[65%] gap-5'>
                            <NavLink >Profile</NavLink>
                            <NavLink >Kegiatan</NavLink>
                            <NavLink >Kesehatan</NavLink>
                            <NavLink >Cuaca</NavLink>
                            <NavLink >komunitas</NavLink>
                            <NavLink >Sosial</NavLink>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </nav>
            <div className='w-full h-4 bg-black'></div>
            <div className='w-full bg-white h-[84vh] px-10 py-5'>
                {children}
            </div>
        </div>
    );
}
