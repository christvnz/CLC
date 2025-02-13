/* eslint-disable import/no-unresolved */
import { EffectFade, Navigation, Autoplay } from 'swiper/modules';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';

const Banner = () => {

    const images = [
        {
            image: 'https://placehold.co/1100x500',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'center',
            textColor: '#000000',
            buttonText: 'Read More',
            buttonBackground: '#FEAB01',
            buttonTextColor: '#ffffff',
            link: 'http://localhost:3000/food'
        },
        {
            image: 'https://placehold.co/1300x500',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            position: 'left',
            textColor: '#000000',
            buttonText: 'Read More',
            buttonBackground: '#FEAB01',
            buttonTextColor: '#ffffff',
            link: 'http://localhost:3000/food'
        },
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
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            spaceBetween={30}
            effect={'fade'}
            modules={[EffectFade, Navigation, Autoplay]}
        >
            {
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
            }
        </Swiper>
    )
}

export default Banner