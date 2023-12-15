import CardNews from '@/Components/CardNews'
import CardWeather from '@/Components/CardWeather'
import DashboardCuaca from '@/Components/DashboardCuaca'
import WeatherChart from '@/Components/WeatherChart'
import Guest from '@/Layouts/GuestLayout'
import { Head } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

const api = {
    key: "cfa0225b58c6cbaa8351963cb4f188a5",
    base: "https://api.openweathermap.org/data/2.5/",
    baseIcon: "https://openweathermap.org/img/wn/",
    lat: "-5.628657",
    lon: "105.572936",
    cnt: "7",
    lang: "id"
}

const CuacaPage = ({ cuaca }) => {
    const [weather, setWeather] = useState(null);
    const [current, setCurrent] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date())
    const [dataWeather, setDataWeather] = useState([]);

    const futureWeather = weather?.list.filter(item => {
        const itemDate = new Date(item.dt_txt);
        return itemDate >= currentDate
    })


    const weatherAPI = () => {
        fetch(`${api.base}forecast?lat=${api.lat}&lon=${api.lon}&appid=${api.key}&lang=id&units=metric`)
            .then((res) => res.json())
            .then((result) => {
                setWeather(result);
                console.log(result)
                const processData = result.list
                    .filter((item) => new Date(item.dt_txt) >= currentDate)
                    .map((item) => ({
                        time: item.dt_txt.split(' ')[1].slice(0, 5),
                        temperature: Math.floor(item.main.temp),
                    }));
                setDataWeather(processData)
            });
    }
    const currentWeather = () => {
        fetch(`${api.base}weather?lat=${api.lat}&lon=${api.lon}&appid=${api.key}&lang=id&units=metric`)
            .then((res) => res.json())
            .then((result) => {
                setCurrent(result);
                // console.log(result)
            });
    }
    useEffect(() => {
        weatherAPI();
        currentWeather();
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    const dayOfWeek = new Intl.DateTimeFormat('id-ID', { weekday: 'long' }).format(currentDate)
    const Hours = currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours();
    const Minute = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    const Second = currentDate.getSeconds() < 10 ? '0' + currentDate.getSeconds() : currentDate.getSeconds()
    const time = Hours + ":" + Minute + ":" + Second + " WIB";

    const dateTodays = (datetime) => {
        const dateObject = new Date(datetime);
        const option = { weekday: 'long' };
        const dayOfWeek = dateObject.toLocaleDateString('id-ID', option);

        return dayOfWeek;
    }
    const dateToTime = (datetime) => {
        const dateObject = new Date(datetime);

        const hours = dateObject.getHours() < 10 ? '0' + dateObject.getHours() : dateObject.getHours();
        const minutes = dateObject.getMinutes() < 10 ? '0' + dateObject.getMinutes() : dateObject.getMinutes();

        return (`${hours}:${minutes}`)
    }




    return (
        <Guest>
            <Head title='CuacaPage' />
            <div className='w-full flex'>
                <div className='w-[60%]'>
                    <div className='w-full h-full bg-blue-400 text-white rounded-lg p-5'>
                        {current && weather &&
                            <>
                                <h1 className='text-sm'>{current.name}</h1>
                                <h1 className='text-sm'>{dayOfWeek}, {time}</h1>
                                <h1 className='capitalize text-xl font-bold'>{current.weather[0].description}</h1>
                                <div className='w-full flex justify-between'>
                                    <div className='w-full flex'>
                                        <img src={`${api.baseIcon}${current.weather[0].icon}@2x.png`} width={130} height={130} />
                                        <div className='flex items-center text-8xl'>
                                            {Math.floor(current.main.temp)}
                                        </div>
                                        <h1 className='text-3xl'><sup>o</sup>C</h1>
                                        <span className='text-2xl'>|</span>
                                        <h1 className='text-3xl'><sup>o</sup>F</h1>
                                    </div>
                                    <div className='pr-10 w-[50%]'>
                                        <ul>
                                            <li>Humadity: {current.main.humidity} %</li>
                                            <li>Wind: {current.wind.speed} m/s</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='w-full app-container'>
                                    <WeatherChart data={dataWeather} />
                                </div>
                                <div className='scrollable-content hover:cursor-grabbing mt-3'>
                                    <div className='w-full flex gap-1'>
                                        {
                                            futureWeather.map((item, idx) => {
                                                return <div key={idx} className='w-32 shadow-lg rounded-md bg-blue-500 flex flex-col justify-center items-center'>
                                                    <h1 className='text-center'>{dateTodays(item.dt_txt)}</h1>
                                                    <h1 className='text-center'>{dateToTime(item.dt_txt)}</h1>
                                                    <img src={`${api.baseIcon}${item.weather[0].icon}@2x.png`} width={100} height={100} />
                                                    <h1 className='text-xs capitalize'>{item.weather[0].description}</h1>
                                                    <div className='text-center w-32'>
                                                        <span>{Math.floor(item.main.feels_like)}<sup>o</sup> </span>
                                                        <span>{Math.floor(item.main.temp_min)}<sup>o</sup></span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>

                            </>
                        }
                    </div>
                </div>
                <div className='w-[40%] px-2'>
                    {cuaca.length ? (
                        <>
                            {cuaca.map((item, idx) => (
                                <CardWeather key={idx} judul={item.judul} deskripsi={item.deskripsi} tanggal={item.created_at} gambar={item.gambar} />
                            ))}
                        </>
                    ) : (
                        <div className='w-full h-[50vh] flex justify-center items-center'>
                            <h1>Belum ada Berita</h1>
                        </div>
                    )}
                </div>
            </div>
        </Guest>
    )
}

export default CuacaPage