<template>
  <div :class="[
    'min-h-screen font-italiana py-[8rem] transition-colors duration-300',
    'bg-[#111111] text-white'
  ]">
    <!-- Header section with welcome message and image -->
    <div class="container mx-auto px-4 py-8">
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-8 pb-12"
      >
        <div class="w-full md:w-1/3"> 
          <img
            src="/images/tola.png"
            alt="Welcome"
            class="rounded-lg max-w-xs mx-auto shadow-lg"
          />
        </div>
        <div class="w-full md:w-2/3 space-y-4">
          <h1 class="text-3xl font-bold">Welcome to My Book Vault!</h1>
          <div class="h-0.5 w-16 my-4 bg-white/50"></div>
          <p class="text-lg">
            Inside, you'll discover a delightful mix of Romance, Thrillers,
            Drama, Domestic Fiction, and Educational Books. Enjoy browsing
            through the stories waiting to sweep you off your feet!
          </p>
          <p class="text-lg mt-4">Thanks for visiting, and happy reading!</p>
        </div>
      </div>
    </div>

    <!-- Book collections in simple text grid -->
    <div class="py-12 transition-colors duration-300 bg-[#f5eee3] dark:bg-[#1a1a1a] text-[#4a5d46] dark:text-gray-200">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
          <div class="book-title">THE LIST</div>
          <div class="book-title">WAHALA</div>
          <div class="book-title">MY SISTER THE SERIAL KILLER</div>
          <div class="book-title">A BROKEN PEOPLES PLAYLIST</div>
          <div class="book-title">STAY WITH ME</div>
          <div class="book-title">YINKA WHERE IS YOUR HUSBAND</div>
          <div class="book-title">UNDER THE UDALA TREES</div>
          <div class="book-title">HIS ONLY WIFE</div>
          <div class="book-title">SUCH A FUN AGE</div>
          <div class="book-title">THE FISHERMEN</div>
          <div class="book-title">THE GIRL WITH THE LOUDING VOICE</div>
          <div class="book-title">THE SWEETEST REMEDY</div>
          <div class="book-title">LOVE IN COLOR</div>
          <div class="book-title">TIES THAT TETHER</div>
          <div class="book-title">HOME GOING</div>
          <div class="book-title">SANKOFA</div>
          <div class="book-title">THE MAID</div>
          <div class="book-title">THE DEATH OF VIVEK OJI</div>
          <div class="book-title">PEOPLE WE MEET ON VACATION</div>
          <div class="book-title">THE THING AROUND YOUR NECK</div>
          <div class="book-title">GETTING TO HAPPY</div>
          <div class="book-title">ALL ABOUT LOVE</div>
          <div class="book-title">BLACK CAKE</div>
          <div class="book-title">THE SEX LIVES OF AFRICAN WOMEN</div>
          <div class="book-title">THEN SHE WAS GONE</div>
          <div class="book-title">THE VANISHING HALF</div>
          <div class="book-title">NEVER LIE</div>
          <div class="book-title">THE COWORKER</div>
          <div class="book-title">WARD D</div>
          <div class="book-title">THE HOUSEMAIDS SECRET</div>
          <div class="book-title">LESSONS IN CHEMISTRY</div>
          <div class="book-title">THE MYSTERY GUEST</div>
          <div class="book-title">BEFORE I GO TO SLEEP</div>
          <div class="book-title">IT ENDS WITH US</div>
          <div class="book-title">COUNTERFEIT</div>
          <div class="book-title">THE SILENT PATIENT</div>
          <div class="book-title">DO EPIC SHIT</div>
          <div class="book-title">REMINDERS OF HIM</div>
          <div class="book-title">NEARLY ALL THE MEN IN LAGOS ARE MAD</div>
        </div>
      </div>
    </div>

    <!-- Additional book categories -->
    <div class="pb-12 transition-colors duration-300 bg-[#f5eee3] dark:bg-[#1a1a1a] text-[#4a5d46] dark:text-gray-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-bold mb-4">More Favorites</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-center">
          <div class="book-title">EDUCATED</div>
          <div class="book-title">BECOMING</div>
          <div class="book-title">THE SEVEN HUSBANDS OF EVELYN HUGO</div>
          <div class="book-title">WHERE THE CRAWDADS SING</div>
          <div class="book-title">CIRCE</div>
          <div class="book-title">THE SONG OF ACHILLES</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No need for custom dark mode implementation - using the navigation's dark mode system
</script>

<style scoped>
.book-title {
  padding: 1rem 0.5rem;
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #4a5d46;
  border-radius: 0.25rem;
}

.dark .book-title {
  color: #d1d5db;
}

.book-title:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: translateY(-1px);
}

.dark .book-title:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Simple grid layout for book titles */
.grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
  background-size: 20px 20px;
}

.dark .grid {
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
}
</style>
