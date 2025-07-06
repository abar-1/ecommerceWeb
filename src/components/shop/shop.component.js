"use client";
import SHOP_DATA from '@/shop-data.json';
import { Fragment, useContext } from 'react';
import { CategoriesContext } from '@/contexts/categories.context';
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
    const { categoriesMap } = useContext(CategoriesContext);



    return (
        <div className={styles.container}>
            {Object.keys(categoriesMap).map((title) => (
                <section key={title} id={title} style={{ marginBottom: '48px' }}>
                <h2 style={{ textAlign: 'center', margin: '32px 0 16px', color: "white", fontSize: "24px", fontWeight: "bold" }}>
                    {title}
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    style={{ padding: '32px 0', maxWidth: '1200px', margin: '0 auto' }}
                >
                    {categoriesMap[title].map((product) => (
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