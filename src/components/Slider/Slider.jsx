import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Mousewheel} from 'swiper';
import Card from "../Card/Card";

//Images
import slide1 from '../../images/slides/1.png';
import slide2 from '../../images/slides/2.png';
import slide3 from '../../images/slides/3.png';
import slide4 from '../../images/slides/4.png';
import slide5 from '../../images/slides/5.png';
import slide6 from '../../images/slides/6.png';
import slide7 from '../../images/slides/7.png';
import slide8 from '../../images/slides/8.png';

//Styles
import './Slider.scss';
import 'swiper/scss';

SwiperCore.use([Mousewheel]);

const Slider = () => {
    const images = [slide1, slide8, slide5, slide7, slide6, slide4, slide3, slide2];
    return (
        <Swiper
            breakpoints={{
                375: {
                    spaceBetween: 28,
                    slidesOffsetBefore: 20,
                    mousewheel: false
                },
                640: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    slidesOffsetBefore: 130
                },
                1920: {
                    spaceBetween: 40,
                    slidesPerView: 4.5,
                    slidesOffsetBefore: 260
                },
            }}
            className='slider'

            slidesPerView={1.5}
            scrollbar={{
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: 100,
            }}
            mousewheel
            freeMode={{
                sticky: false,
                enabled: true,
                momentum: true
        }}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {images.map((img, i) => <SwiperSlide key={i}><Card image={img}/></SwiperSlide>)}
        </Swiper>
    );
}

export default Slider;