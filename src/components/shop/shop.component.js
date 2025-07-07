"use client";
import SHOP_DATA from '@/shop-data.json';
import { Fragment, useEffect } from 'react';
import { getCategoriesAndDocuments } from '@/utils/firebase/firebase.utils';
import { setCategories } from '@/store/categories/categories.action';
import { useSelector, useDispatch } from 'react-redux';

import ProductCard from './productCard.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { selectCategoriesMap } from '@/store/categories/categories.selector';

import styles from "./shop.module.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Shop() {

    const dispatch = useDispatch();

    const categoriesMap = useSelector(selectCategoriesMap);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, [dispatch])

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