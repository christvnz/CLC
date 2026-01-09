/* eslint-disable import/no-unresolved */
import { Pagination, Autoplay } from 'swiper/modules';
import { CtfImage } from '@src/components/features/contentful';
import { PageOurPartnersPostFieldsFragment } from '@src/lib/__generated/sdk';
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

interface props {
    partners: PageOurPartnersPostFieldsFragment[]
}

const Partners = (props: props) => {
    const partners = props.partners
    return (
        <>
            <div className='flex gap-[25px] items-center mb-10'>
                <div className='bg-[#FEAB01] flex-1 h-[2px]'></div>
                <div className='mt-[-0.3em] mb-[-0.4em] text-2xl font-bold capitalize'>Our Partners</div>
                <div className='bg-[#FEAB01] flex-1 h-[2px]'></div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {
                    partners.map((partner, index) => (
                        partner.image && 
                            <SwiperSlide key={index}>
                                <Link href={partner.url ? partner.url : ''} target={partner.url ? '_blank' : '_self'}>
                                    <CtfImage
                                        nextImageProps={{
                                            className: 'object-contain aspect-[16/9] h-full w-full',
                                        }}
                                        {...partner.image}
                                    />
                                </Link>
                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}

export default Partners