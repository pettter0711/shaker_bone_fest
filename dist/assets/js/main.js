const { createApp } = Vue;
import { fetchApi } from "./Utils.js";

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
