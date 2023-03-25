import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import 'swiper/css/pagination';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});