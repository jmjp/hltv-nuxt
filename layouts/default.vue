<template>
    <div
        class="transition-width duration-700 ease-in-out bg-gradient-to-tr from-richblack to-navyblue bg-cover bg-no-repeat min-h-screen text-white">
        <header>
            <Menu />
        </header>
        <body>
            <div class="mt-2">
                <slot />
            </div>
        </body>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    transform: scale(0.8);
    filter: blur(.2rem);
}
</style>