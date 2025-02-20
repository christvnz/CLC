/* eslint-disable import/no-unresolved */
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import Banner1 from './slider-01.jpg'
import Banner2 from './slider-2.jpg'

const Banner = () => {

    const images = [
        // {
        //     image: 'https://placehold.co/1100x500',
        //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        //     position: 'center',
        //     textColor: '#000000',
        //     buttonText: 'Read More',
        //     buttonBackground: '#FEAB01',
        //     buttonTextColor: '#ffffff',
        //     link: 'http://localhost:3000/food'
        // },
        // {
        //     image: 'https://placehold.co/1300x500',
        //     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        //     position: 'left',
        //     textColor: '#000000',
        //     buttonText: 'Read More',
        //     buttonBackground: '#FEAB01',
        //     buttonTextColor: '#ffffff',
        //     link: 'http://localhost:3000/food'
        // },
        // {
        //   image: 'https://placehold.co/1400x500',
        //   title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        //   position: 'right',
        //   textColor: '#000000',
        //   buttonText: 'Read More',
        //   buttonBackground: '#FEAB01',
        //   buttonTextColor: '#ffffff',
        //   link: 'http://localhost:3000/food'
        // }
    ]

    const classNames = {
        center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        left: 'top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2',
        right: 'top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2'
    }

    return (
        <Swiper
            spaceBetween={30}
            autoplay={{
                delay: 4500, 
                disableOnInteraction: false,
            }}
            effect={'fade'}
            pagination={true}
            modules={[EffectFade, Pagination, Autoplay]}
        >
            <SwiperSlide className='rounded-xl overflow-hidden'>
                <Link href="https://www.facebook.com/groups/590817651915936" target='_blank'>
                    <div className='h-[180px] sm:h-[200px] md:h-[400px] lg:h-[600px] relative'>
                        <Image src={Banner1} className='w-full h-full object-fill md:object-cover' alt='banner-1' />
                    </div>
                </Link>
            </SwiperSlide>
            <SwiperSlide className='rounded-xl overflow-hidden'>
                <Link href="https://www.facebook.com/groups/590817651915936" target='_blank'>
                    <div className='h-[180px] sm:h-[200px] md:h-[400px] lg:h-[600px] relative'>
                        <Image src={Banner2} className='w-full h-full object-fill md:object-cover' alt='banner-2' />
                    </div>
                </Link>
            </SwiperSlide>
            {/* {
                images.map((image, index) => {
                    return (
                        <SwiperSlide key={index} className='rounded-xl overflow-hidden'>
                            <div className='h-[200px] md:h-[400px] lg:h-[600px] relative'>
                                <img src={image.image} className='w-full h-full object-cover' alt={image.title} />
                                <div className={'absolute text-center flex flex-col items-center gap-y-6  md:max-w-[600px] ' + classNames[image.position]}>
                                    <h1 className='font-bold'
                                        style={{
                                            color: image.textColor
                                        }}
                                    >{image.title}</h1>
                                    <button className="text-colorWhite font-medium py-2 px-5 rounded-xl overflow-hidden col-span-12 cursor-pointer w-fit"
                                        style={{
                                            backgroundColor: image.buttonBackground ? image.buttonBackground : '#FEAB01',
                                            color: image.buttonTextColor
                                        }}
                                    >
                                        {image.buttonText}
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            } */}
        </Swiper>
    )
}

export default Banner