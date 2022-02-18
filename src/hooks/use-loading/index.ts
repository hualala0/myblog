import { useEffect } from 'react'

export const useLoading = () => {
  useEffect(() => {
    const loader = document.getElementById('___loader')
    if (loader) {
      loader.style.display = 'none'
      return () => {
        loader.style.display = 'flex'
      }
    }
  })
}
