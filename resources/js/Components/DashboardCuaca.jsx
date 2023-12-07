import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

const DashboardCuaca = () => {

  return (
    <div className='w-full h-full'>
      <h1>Hari,Jam</h1>
      <h1>Perkiraan Cuaca</h1>
      <div className='w-full flex'>
        <TiWeatherPartlySunny size={200} />
        
      </div>
    </div>
  );
};

export default DashboardCuaca