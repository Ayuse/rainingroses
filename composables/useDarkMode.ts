export const useDarkMode = () => {
  const isDark = ref(false)

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      // Update localStorage
      localStorage.setItem('darkMode', isDark.value.toString())
      
      // Update document class
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  const initDarkMode = () => {
    if (process.client) {
      // Check localStorage first
      const stored = localStorage.getItem('darkMode')
      if (stored !== null) {
        isDark.value = stored === 'true'
      } else {
        // Fallback to system preference
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }
      
      // Apply the initial state
      if (isDark.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  return {
    isDark: readonly(isDark),
    toggleDarkMode,
    initDarkMode
  }
} 