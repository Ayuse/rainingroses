<template>
  <div
    class="max-w-[1204px] m-auto px-5 h-full py-5 md:py-40 mt-24 border-t-[#A09F9B] border-t-[1px] border-b-[1px] flex gap-4"
  >
    <div class="w-[550px]">
      <div class="flex justify-between py-5">
        <div class="flex flex-col">
          <h2 class="font-italiana font-light text-[48px]">Code Red</h2>
          <p class="font-inter text-[16px] font-light italic">
            In Serious Toruble
          </p>
        </div>
        <h3 class="font-inter text-[16px] font-light italic place-self-end">
          3 min read
        </h3>
      </div>

      <NuxtImg
        src="/images/code-red.png"
        class="w-full h-[700px] object-cover"
      />
    </div>

    <div class="w-[550px] place-content-end">
      <div class="flex justify-between py-5">
        <div class="flex flex-col">
          <h2 class="font-italiana font-light text-[48px]">Sister Unity</h2>
          <p class="font-inter text-[16px] font-light italic">
            The weight of a lifetime
          </p>
        </div>
        <h3 class="font-inter text-[16px] font-light italic place-self-end">
          3 min read
        </h3>
      </div>

      <NuxtImg src="/images/sister.png" class="w-full h-[580px] object-cover" />
    </div>
  </div>
</template>
