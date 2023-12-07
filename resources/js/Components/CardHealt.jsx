import React from 'react'

const CardHealt = () => {
  return (
      <div className='w-full h-[30vh] bg-gray-200 rounded-lg shadow-md mb-5 flex-row flex'>
          <div className='w-[25%] h-full'>
              <img src='https://picsum.photos/id/14/1920/1080' className='w-full min-h-full rounded-l-lg' />
          </div>
          <div className='w-[75%] h-full p-5'>
              <h1 className='text-xl font-black'>GERMAS (GERAKAN MASYARAKAT SEHAT)</h1>
              <div className='w-full pt-2 text-justify'>
                  <h1>GERMAS adalah suatu tindakan sistematis dan terencana yang dilakukan secara bersama-sama oleh
                      seluruh komponen bangsa dengan kesadaran, kemauan, dan kemampuan berperilaku sehat untuk
                      meningkatkan kualitas hidup. Tujuannya untuk menjaga kesehatan masyarakat, menjaga lingkungan
                      selalu bersih, meningkatkan produktivitas masyarakat, dan akhirnya dapat menekan angka biaya berobat.
                      ” Sesuai dengan Instruksi Presiden Nomor 1 Tahun 2017).</h1>
              </div>
          </div>
      </div>
  )
}

export default CardHealt