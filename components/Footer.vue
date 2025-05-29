<template>
  <footer
    class="bg-[#212122] text-[#E6E3DC] px-6 md:px-10 py-20 flex flex-col gap-10 sticky bottom-0 -z-10"
    data-scroll
    data-scroll-speed="-0.2"
  >
    <div data-scroll data-scroll-speed="1">
      <h2 class="font-italiana mx-auto text-center text-[clamp(32px,8vw,48px)]">
        Join the Discussion
      </h2>
      <h3 class="font-inter text-center text-[16px] font-[200]">
        Stay updated with the latest musings and insights
      </h3>
    </div>
    <div data-scroll data-scroll-speed="1">
      <div
        class="flex justify-center items-center relative max-w-[672px] mx-auto"
      >
        <input
          type="text"
          placeholder="Your email"
          class="bg-[#212122] border border-[#E6E3DC] rounded-[18px] pl-[20px] py-[16px] w-full text-[16px] font-inter placeholder:text-[#FBFAF2] max-w-[672px]"
        />
        <button
          class="bg-[#E6E3DC] text-[#212122] px-4 py-[12px] font-inter font-light absolute right-[4.5px] rounded-[16px]"
        >
          Subscribe
        </button>
      </div>
    </div>

    <div
      class="font-dancing mx-auto relative text-center w-[50%]"
      data-scroll
      data-scroll-speed="1"
    >
    <div class="overflow-hidden text-[clamp(48px,8vw,96px)]">
              <NuxtImg src="/images/logo-header-lght.svg" class="home-header w-full" fit="cover" />
            </div>
    </div>
    <!-- <div class="max-w-[1204px] px-5">
      <p class="text-center">© 2025 Raining Roses. All rights reserved.</p>
    </div> -->
  </footer>
</template>
