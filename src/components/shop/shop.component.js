"use client";
import SHOP_DATA from '@/shop-data.json';
import { useContext } from 'react';
import { ProductContext } from '@/contexts/products.context';
import ProductCard from './productCard.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Shop() {
    const { products } = useContext(ProductContext);

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            style={{ padding: '32px 0', maxWidth: '1200px', margin: '0 auto' }}
        >
            {products.map(({ id, name, imageUrl, price }) => (
                <SwiperSlide key={id}>
                    <ProductCard id={id} name={name} imageUrl={imageUrl} price={price} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}