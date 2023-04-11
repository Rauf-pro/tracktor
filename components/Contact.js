import React from 'react'

export default function Contact() {
  return (
    <section className='pt-[100px] pb-[143px]'>
        <div className='container mx-auto'>
        <h2 className=" font-lexend-semibold md:text-[120px] text-[40px] md:pb-[65px] pb-[37px] relative top-0   ">
          Əlaqə
        </h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 w-3/4'>
            <div>
                <h2 className='lg:text-[20px] text-[18px] font-lexend-regular text-yellowColor pb-[16px]'>Bizə zəng edin</h2>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px] pb-[16px] '>+99450 221 30 21</p>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px] pb-[16px] '>+99450 857 00 87</p>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px] pb-[16px] '>+99470 371 30 71</p>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px]'>+99451 515 06 37</p>
                <h2 className='lg:text-[20px] text-[18px] font-lexend-regular text-yellowColor lg:pt-[56px] pt-[40px] pb-[16px]'>Ünvan</h2>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px]'>Bakı-Sumqayıt şossesi, 12-ci km.</p>
                <h2 className='lg:text-[20px] text-[18px] font-lexend-regular text-yellowColor lg:pt-[56px] pt-[40px] pb-[16px]'>E-poçt</h2>
                <p className='text-lightColor font-lexend-light lg:text-[20px] text-[18px]'>info@traktordetal.com</p>
            </div>
            <div>
                <form className='flex flex-col'>
                <label className='text-whiteColor pb-[12px]'>Ad Soyad</label>
                    <input type="text" placeholder='Ali Aliyev' className='pl-[20px] py-[18px] bg-formBg mb-[40px] ' />
                    <label className='text-whiteColor pb-[12px]'>E-poçt ünvanı</label>
                    <input type="text" placeholder='Ali Aliyev' className='pl-[20px] py-[18px] bg-formBg ' />
                    <label className='text-whiteColor pb-[12px]'>Mesajınız</label>
                    <textarea type="text"  className='pl-[20px] h-[168px]  bg-formBg ' />

                    <button className='bg-yellowColor mt-[24px] text-center py-[20px]'>Göndər</button>
                   
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}
