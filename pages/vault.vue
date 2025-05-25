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
              <div class="book-cover mb-3 bg-gradient-to-br from-purple-600 to-purple-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-list.jpg" 
                  alt="The List by Yomi Adegoke"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">📖</div>
              </div>
              <p class="font-medium">The List - Yomi Adegoke</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-emerald-600 to-emerald-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/broken-peoples-playlist.jpg" 
                  alt="A Broken Peoples Playlist by Chimeka Garricks"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🎵</div>
              </div>
              <p class="font-medium">
                A Broken Peoples Playlist - Chimeka Garricks
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-amber-600 to-amber-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/under-udala-trees.jpg" 
                  alt="Under the Udala Trees by Chinelo Okparanta"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🌳</div>
              </div>
              <p class="font-medium">
                Under the Udala Trees - Chinelo Okparanta
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-blue-600 to-blue-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-fishermen.jpg" 
                  alt="The Fishermen by Chigozie Obioma"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🎣</div>
              </div>
              <p class="font-medium">The Fishermen - Chigozie Obioma</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-pink-600 to-pink-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/love-in-color.jpg" 
                  alt="Love In Color by Bolu Babalola"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">💕</div>
              </div>
              <p class="font-medium">Love In Color - Bolu Babalola</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-orange-600 to-orange-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/sankofa.jpg" 
                  alt="Sankofa by Chibundu Onuzo"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🏛️</div>
              </div>
              <p class="font-medium">Sankofa - Chibundu Onuzo</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-teal-600 to-teal-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/people-we-meet-on-vacation.jpg" 
                  alt="People we Meet on Vacation by Emily Henry"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">✈️</div>
              </div>
              <p class="font-medium">
                People we Meet on Vacation - Emily Henry
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-red-600 to-red-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/all-about-love.jpg" 
                  alt="All about Love by Bell Hooks"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">❤️</div>
              </div>
              <p class="font-medium">All about Love - Bell Hooks</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-gray-600 to-gray-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/then-she-was-gone.jpg" 
                  alt="Then she was Gone by Lisa Jewell"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🔍</div>
              </div>
              <p class="font-medium">Then she was Gone - Lisa Jewell</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-indigo-600 to-indigo-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-coworker.jpg" 
                  alt="The Coworker by Freida McFadden"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">👥</div>
              </div>
              <p class="font-medium">The Coworker - Freida McFadden</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-green-600 to-green-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/lessons-in-chemistry.jpg" 
                  alt="Lessons in Chemistry by Bonnie Garmus"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🧪</div>
              </div>
              <p class="font-medium">Lessons in Chemistry - Bonnie Garmus</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-rose-600 to-rose-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/it-ends-with-us.jpg" 
                  alt="It Ends with Us by Colleen Hoover"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🌸</div>
              </div>
              <p class="font-medium">It Ends with Us - Colleen Hoover</p>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-4">
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-yellow-600 to-yellow-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/wahala.jpg" 
                  alt="Wahala by Nikki May"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">⚡</div>
              </div>
              <p class="font-medium">Wahala - Nikki May</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-cyan-600 to-cyan-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/stay-with-me.jpg" 
                  alt="Stay With Me by Ayobami Adebayo"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🤝</div>
              </div>
              <p class="font-medium">Stay With Me - Ayobami Adebayo</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-violet-600 to-violet-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/his-only-wife.jpg" 
                  alt="His Only Wife by Peace Adzo Medie"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">💍</div>
              </div>
              <p class="font-medium">His Only Wife - Peace Adzo Medie</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/girl-with-louding-voice.jpg" 
                  alt="The Girl with the Louding Voice by Abi Dare"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🗣️</div>
              </div>
              <p class="font-medium">
                The Girl with the Louding Voice - Abi Dare
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-lime-600 to-lime-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/ties-that-tether.jpg" 
                  alt="Ties that Tether by Jane Igharo"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🔗</div>
              </div>
              <p class="font-medium">Ties that Tether - Jane Igharo</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-sky-600 to-sky-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-maid.jpg" 
                  alt="The Maid by Nita Prose"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🧹</div>
              </div>
              <p class="font-medium">The Maid - Nita Prose</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-stone-600 to-stone-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/thing-around-your-neck.jpg" 
                  alt="The Thing Around your Neck by Chimamanda Adiche"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">📿</div>
              </div>
              <p class="font-medium">
                The Thing Around your Neck - Chimamanda Adiche
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-amber-700 to-amber-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/black-cake.jpg" 
                  alt="Black Cake by Charmaine Wilkerson"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🍰</div>
              </div>
              <p class="font-medium">Black Cake - Charmaine Wilkerson</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-slate-600 to-slate-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-vanishing-half.jpg" 
                  alt="The Vanishing Half by Brit Bennet"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">👯</div>
              </div>
              <p class="font-medium">The Vanishing Half - Brit Bennet</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-red-700 to-red-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/ward-d.jpg" 
                  alt="Ward D by Freida McFadden"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🏥</div>
              </div>
              <p class="font-medium">Ward D - Freida McFadden</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-emerald-700 to-emerald-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-mystery-guest.jpg" 
                  alt="The Mystery Guest by Nita Prose"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🕵️</div>
              </div>
              <p class="font-medium">The Mystery Guest - Nita Prose</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-purple-700 to-purple-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/counterfeit.jpg" 
                  alt="Counterfeit by Kirstin Chen"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">💰</div>
              </div>
              <p class="font-medium">Counterfeit - Kirstin Chen</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-orange-700 to-orange-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/do-epic-shit.jpg" 
                  alt="Do Epic Shit by Ankur Warikoo"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🚀</div>
              </div>
              <p class="font-medium">Do Epic Shit - Ankur Warikoo</p>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="space-y-4">
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-black to-gray-800">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/my-sister-serial-killer.jpg" 
                  alt="My Sister the Serial Killer by Oyinkan Braithwaite"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🔪</div>
              </div>
              <p class="font-medium">
                My Sister the Serial Killer - Oyinkan Braithwaite
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-pink-700 to-pink-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/yinka-where-is-your-husband.jpg" 
                  alt="Yinka Where is your Husband by Lizzie Camilla Blackburn"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">💒</div>
              </div>
              <p class="font-medium">
                Yinka Where is your Husband - Lizzie Camilla Blackburn
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-blue-700 to-blue-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/such-a-fun-age.jpg" 
                  alt="Such a Fun Age by Kiley Reid"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🎭</div>
              </div>
              <p class="font-medium">Such a Fun Age - Kiley Reid</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-rose-700 to-rose-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/the-sweetest-remedy.jpg" 
                  alt="The Sweetest Remedy by Jane Igharo"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">💊</div>
              </div>
              <p class="font-medium">The Sweetest Remedy - Jane Igharo</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-yellow-700 to-yellow-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/homegoing.jpg" 
                  alt="Home Going by Yaa Gyasi"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🏠</div>
              </div>
              <p class="font-medium">Home Going - Yaa Gyasi</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-indigo-700 to-indigo-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/death-of-vivek-oji.jpg" 
                  alt="The Death of Vivek Oji by Akwaeke Emezi"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">⚰️</div>
              </div>
              <p class="font-medium">The Death of Vivek Oji - Akwaeke Emezi</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-green-700 to-green-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/getting-to-happy.jpg" 
                  alt="Getting to Happy by Terry McMillan"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">😊</div>
              </div>
              <p class="font-medium">Getting to Happy - Terry McMillan</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-red-800 to-red-950">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/sex-lives-african-women.jpg" 
                  alt="The Sex Lives of African Women by Nana Dakar"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🌍</div>
              </div>
              <p class="font-medium">
                The Sex Lives of African Women - Nana Dakar
              </p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-gray-700 to-gray-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/never-lie.jpg" 
                  alt="Never Lie by Freida McFadden"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🤥</div>
              </div>
              <p class="font-medium">Never Lie - Freida McFadden</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-teal-700 to-teal-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/housemaids-secret.jpg" 
                  alt="The Housemaids Secret by Freida McFadden"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">🤫</div>
              </div>
              <p class="font-medium">The Housemaids Secret - Freida McFadden</p>
            </div>
            <div class="book-item">
              <div class="book-cover mb-3 bg-gradient-to-br from-violet-700 to-violet-900">
                <div class="book-spine"></div>
                <!-- <img 
                  src="/images/books/before-i-go-to-sleep.jpg" 
                  alt="Before I Go to Sleep by S.J Watson"
                  class="book-cover-image"
                  onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
                /> -->
                <div class="book-placeholder">😴</div>
              </div>
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
            <div class="book-cover mb-3 bg-gradient-to-br from-purple-800 to-purple-950">
              <div class="book-spine"></div>
              <!-- <img 
                src="/images/books/the-silent-patient.jpg" 
                alt="The Silent Patient by Alex Michaelides"
                class="book-cover-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              /> -->
              <div class="book-placeholder">🤐</div>
            </div>
            <p class="font-medium">The Silent Patient - Alex Michaelides</p>
          </div>
          <div class="bg-[#e89394] text-white p-4 rounded-md">
            <div class="book-cover mb-3 bg-gradient-to-br from-rose-800 to-rose-950">
              <div class="book-spine"></div>
              <!-- <img 
                src="/images/books/reminders-of-him.jpg" 
                alt="Reminders of Him by Colleen Hoover"
                class="book-cover-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              /> -->
              <div class="book-placeholder">💭</div>
            </div>
            <p class="font-medium">Reminders of Him - Colleen Hoover</p>
          </div>
          <div class="bg-[#e89394] text-white p-4 rounded-md">
            <div class="book-cover mb-3 bg-gradient-to-br from-orange-800 to-orange-950">
              <div class="book-spine"></div>
              <!-- <img 
                src="/images/books/nearly-all-men-lagos-mad.jpg" 
                alt="Nearly all the Men in Lagos are Mad by Damilare Kuku"
                class="book-cover-image"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              /> -->
              <div class="book-placeholder">🌆</div>
            </div>
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

.book-cover {
  width: 100%;
  height: 120px;
  position: relative;
  border-radius: 4px;
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transform: perspective(200px) rotateY(-5deg);
  transition: all 0.3s ease;
  overflow: hidden;
}

.book-cover:hover {
  transform: perspective(200px) rotateY(0deg) translateY(-2px);
  box-shadow: 
    0 8px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.book-spine {
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.1),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 4px 0 0 4px;
}

.book-spine::after {
  content: '';
  position: absolute;
  left: 2px;
  top: 10%;
  width: 2px;
  height: 80%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
}

.book-title-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
}

.book-cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
}

.book-cover::after {
  content: '';
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
}

/* Vault-like grid effect */
.grid {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Add some depth to the vault sections */
.bg-\[#f5eee3\] {
  background: linear-gradient(135deg, #f5eee3 0%, #ede4d3 100%);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Enhanced book item styling for vault effect */
.book-item {
  background: linear-gradient(135deg, #e89394 0%, #d67b7c 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

.book-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 100%
  );
  pointer-events: none;
  border-radius: 0.25rem;
}

.book-cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.book-placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>
