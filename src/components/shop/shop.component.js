"use client";
import SHOP_DATA from '@/shop-data.json';
import { Fragment, useContext } from 'react';
import { ProductContext } from '@/contexts/products.context';
import ProductCard from './productCard.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import styles from "./shop.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function groupByType(products) {
    return products.reduce((acc, product) => {
        const type = product.type || 'other';
        if (!acc[type]) acc[type] = [];
        acc[type].push(product);
        return acc;
    }, {});
}

const typeDisplayNames = {
    "graphic-tee": "Graphic Tees",
    "pants": "Pants",
    "pullovers": "Pullovers",
    "shorts": "Shorts",
    "shoes": "Shoes"
}

export default function Shop() {
    const { products } = useContext(ProductContext);

    const grouped = groupByType(products);

    return (
        <div className={styles.container}>
            {Object.entries(grouped).map(([type, items]) => (
                <section key={type} id={type} style={{ marginBottom: '48px' }}>
                    <h2 style={{ textAlign: 'center', margin: '32px 0 16px', color: "white", fontSize: "24px", fontWeight: "bold" }}>
                        {typeDisplayNames[type] || type}
                    </h2>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation
                        style={{ padding: '32px 0', maxWidth: '1200px', margin: '0 auto' }}
                    >
                        {items.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            ))}
        </div>
    );
}