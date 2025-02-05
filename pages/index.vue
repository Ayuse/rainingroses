<template>
    <div class="h-screen w-screen bg-[#E6E3DC] ">

        <div class="h-screen w-screen bg-[#444444] text-white flex items-center justify-center preloader_container">
            <!-- <NuxtRouteAnnouncer /> -->
            <StackedImages />
        </div>

        <nav class="flex justify-around text-[#000000] text-[20px] font-italiana max-w-[800px] m-auto pt-8">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/diary">Fictional Diary</nuxt-link>
            <nuxt-link to="/musings">Musings</nuxt-link>
            <nuxt-link to="/vault">Book Vault</nuxt-link>
            <nuxt-link to="/about">About</nuxt-link>
        </nav>


    </div>
</template>