<template>
  <div class="min-h-screen bg-[#111111] text-white font-italiana py-[8rem]">
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
          <div class="h-0.5 w-16 bg-white/50 my-4"></div>
          <p class="text-lg">
            Inside, you'll discover a delightful mix of Romance, Thrillers,
            Drama, Domestic Fiction, and Educational Books. Enjoy browsing
            through the stories waiting to sweep you off your feet!
          </p>
          <p class="text-lg mt-4">Thanks for visiting, and happy reading!</p>
        </div>
      </div>
    </div>

    <!-- Book collections in three columns -->
    <div class="bg-[#f5eee3] text-[#4a5d46] py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Column 1 -->
          <div class="space-y-4">
            <div class="book-item">
              <p class="font-medium">The List - Yomi Adegoke</p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                A Broken Peoples Playlist - Chimeka Garricks
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                Under the Udala Trees - Chinelo Okparanta
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Fishermen - Chigozie Obioma</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Love In Color - Bolu Babalola</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Sankofa - Chibundu Onuzo</p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                People we Meet on Vacation - Emily Henry
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">All about Love - Bell Hooks</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Then she was Gone - Lisa Jewell</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Coworker - Freida McFadden</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Lessons in Chemistry - Bonnie Garmus</p>
            </div>
            <div class="book-item">
              <p class="font-medium">It Ends with Us - Colleen Hoover</p>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-4">
            <div class="book-item">
              <p class="font-medium">Wahala - Nikki May</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Stay With Me - Ayobami Adebayo</p>
            </div>
            <div class="book-item">
              <p class="font-medium">His Only Wife - Peace Adzo Medie</p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                The Girl with the Louding Voice - Abi Dare
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">Ties that Tether - Jane Igharo</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Maid - Nita Prose</p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                The Thing Around your Neck - Chimamanda Adiche
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">Black Cake - Charmaine Wilkerson</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Vanishing Half - Brit Bennet</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Ward D - Freida McFadden</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Mystery Guest - Nita Prose</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Counterfeit - Kirstin Chen</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Do Epic Shit - Ankur Warikoo</p>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="space-y-4">
            <div class="book-item">
              <p class="font-medium">
                My Sister the Serial Killer - Oyinkan Braithwaite
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                Yinka Where is your Husband - Lizzie Camilla Blackburn
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">Such a Fun Age - Kiley Reid</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Sweetest Remedy - Jane Igharo</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Home Going - Yaa Gyasi</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Death of Vivek Oji - Akwaeke Emezi</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Getting to Happy - Terry McMillan</p>
            </div>
            <div class="book-item">
              <p class="font-medium">
                The Sex Lives of African Women - Nana Dakar
              </p>
            </div>
            <div class="book-item">
              <p class="font-medium">Never Lie - Freida McFadden</p>
            </div>
            <div class="book-item">
              <p class="font-medium">The Housemaids Secret - Freida McFadden</p>
            </div>
            <div class="book-item">
              <p class="font-medium">Before I Go to Sleep - S.J Watson</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional book categories -->
    <div class="bg-[#f5eee3] text-[#4a5d46] pb-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#e89394] text-white p-4 rounded-md">
            <p class="font-medium">The Silent Patient - Alex Michaelides</p>
          </div>
          <div class="bg-[#e89394] text-white p-4 rounded-md">
            <p class="font-medium">Reminders of Him - Colleen Hoover</p>
          </div>
          <div class="bg-[#e89394] text-white p-4 rounded-md">
            <p class="font-medium">
              Nearly all the Men in Lagos are Mad - Damilare Kuku
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary components or functionality here
</script>

<style scoped>
.book-item {
  padding: 0.75rem;
  background-color: #e89394;
  color: #111111;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
}

.book-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
