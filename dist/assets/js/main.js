const { createApp } = Vue;
import { fetchApi, countDown } from "./Utils.js";

const headOptions = {
    data() {
        return {
            menus: [],
            isScrolled: false,
        };
    },
    methods: {
        pageScroll() {
            this.isScrolled = window.scrollY > 150 ? true : false;
        },
    },
    async mounted() {
        this.menus = await fetchApi("./assets/database/menus.json");
        this.pageScroll();
        window.addEventListener("scroll", (e) => {
            this.pageScroll();
        });
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.pageScroll);
    },
};

const headApp = createApp(headOptions);
headApp.mount("#head-app");

const mainOptions = {
    data() {
        return {
            counts: {
                days: "0",
                hours: "0",
                minutes: "0",
                seconds: "0",
            },
            aboutColors: [],
            artists: [],
        };
    },
    methods: {
        countTime() {
            let time = countDown(10, 31, 18, 0, 0);
            this.counts.days = time.days;
            this.counts.hours = time.hours;
            this.counts.minutes = time.minutes;
            this.counts.seconds = time.seconds;
        },
    },
    async mounted() {
        setInterval(() => {
            this.countTime();
        }, 1000);
        this.aboutColors = await fetchApi(
            "./assets/database/about_colors.json",
        );
        this.artists = await fetchApi("./assets/database/artists.json");
    },
};

const mainApp = createApp(mainOptions);
mainApp.mount("#main-app");

// const swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     loop: true,
//     // autoplay: {
//     //     delay: 2500,
//     //     disableOnInteraction: false,
//     // },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
