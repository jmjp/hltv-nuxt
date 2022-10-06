<template>
    <!-- component -->
    <!-- follow me on twitter @asad_codes -->

    <div
        class="flex flex-wrap place-items-center sticky top-0 z-50 shadow-lg bg-gray-700 bg-opacity-40 border-b border-opacity-75 border-b-gray-800 backdrop-blur-lg">
        <section class="relative mx-auto">
            <!-- navbar -->
            <nav class="flex justify-between w-screen">
                <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                    <nuxt-link class="text-3xl font-bold font-heading" to="/">
                        <!-- <img class="h-9" src="logo.png" alt="logo"> -->
                        CLUTCHER
                    </nuxt-link>
                    <!-- Nav Links -->
                    <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                        <li v-for="page in pages">
                            <nuxt-link :to="page.to"
                                class="transition duration-700 ease-in-out capitalize text-gray-400 hover:text-white"
                                active-class="text-white active-border">{{ page.title }}</nuxt-link>
                        </li>
                    </ul>
                    <!-- Header Icons -->
                    <div class="hidden xl:flex space-x-5 items-center">
                        <!-- Sign In / Register      -->
                        <button class="bg-blue-500 px-6 py-2 rounded hover:bg-blue-700">Sign-in</button>

                    </div>
                </div>
                <!-- Responsive navbar -->
                <button class="navbar-burger self-center mr-12 xl:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

        </section>
    </div>
</template>


<script setup lang="ts">
import { menuItem } from './interfaces/menuItem';

const pages: menuItem[] = [
    { title: "Inicio", to: "/" }
] 
</script>

<style scoped>
.active-border::after {
    display: block;
    content: '';
    border-bottom: solid 3px #ffffff;
    transform: scaleX(0.5);
    animation: forwards 950ms animateBorder;
    /* transition: animateBorder 750ms ease-in-out; */
}

@keyframes animateBorder {
    0% {
        border-bottom-color: #ffffff81;
        transform: scaleX(0);
    }
    50% {
        border-bottom-color: #ffffffc5;
        transform: scaleX(1.2);
    }
    100% {
        border-bottom-color: #ffffff;
        transform: scaleX(0.1);
    }
}
</style>