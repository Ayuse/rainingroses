<template>
  <div class="min-h-screen bg-[#E6E3DC] pt-16 sm:pt-20 md:pt-32 pb-16 sm:pb-20 rounded-b-[30px] md:rounded-b-[60px]">
    <div class="max-w-[1282px] w-[92%] sm:w-[95%] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        <!-- Image Section -->
        <div class="md:col-span-1">
          <div
            class="bg-[#D9D9D9] rounded-[20px] sm:rounded-[25px] border border-[#212122] overflow-hidden max-w-[500px] mx-auto md:mx-0 h-[300px] sm:h-[350px] md:h-auto"
          >
            <img
              src="/images/tola.png"
              alt="Tola"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <!-- Content Section -->
        <div class="md:col-span-2 mt-8 md:mt-0">
          <h1
            class="font-italiana text-[32px] sm:text-[40px] md:text-[60px] mb-6 sm:mb-8"
          >
            All About Me
          </h1>

          <div
            class="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-light leading-relaxed space-y-4 sm:space-y-6"
          >
            <p>
              Tola is a spirited girl from Ajah, Lagos, who loves to share her
              thoughts on the everyday moments that inspire her. With a degree
              in Economics and Finance and a career in Accounting, she's diving
              into her artistic side, exploring new hobbies, and embracing the
              joy of spontaneity.
            </p>
            <p>
              An avid reader, Tola invites you to check out her book vault and
              resources page, where she shares her favorite reads and welcomes
              your recommendations. Join her as she navigates life, one random
              thought at a time!
            </p>

            <h2
              class="font-italiana text-[24px] sm:text-[28px] md:text-[40px] mt-10 sm:mt-12 mb-3 sm:mb-4"
            >
              Why Does Tola Write?
            </h2>
            <p>
              Writing has always been Tola's way of making sense of the world.
              It's a space where she can process her thoughts, explore new
              ideas, and connect with others who might be experiencing similar
              things. Through her words, she hopes to inspire others to find joy
              in everyday moments and embrace their own creativity.
            </p>

            <div class="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#A09F9B]">
              <h3
                class="font-italiana text-[22px] sm:text-[24px] md:text-[32px] mb-3 sm:mb-4"
              >
                Connect With Me
              </h3>
              <div class="flex flex-wrap gap-y-2 gap-x-6">
                <a
                  href="#"
                  class="text-[#212122] hover:opacity-70 transition-opacity text-[16px] sm:text-[18px]"
                  >Instagram</a
                >
                <a
                  href="#"
                  class="text-[#212122] hover:opacity-70 transition-opacity text-[16px] sm:text-[18px]"
                  >Twitter</a
                >
                <a
                  href="#"
                  class="text-[#212122] hover:opacity-70 transition-opacity text-[16px] sm:text-[18px]"
                  >Email</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "About Tola | Raining Roses",
  meta: [
    {
      name: "description",
      content:
        "Learn more about Tola, her background, interests, and why she writes.",
    },
  ],
});
</script>
