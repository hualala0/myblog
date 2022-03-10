import './src/styles/loading.css'
import 'highlight.js/styles/mono-blue.css'
import './src/styles/index.css'
import React from 'react'
// import { format } from './src/components/format'

// export const wrapRootElement = format

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  const loader = document.getElementById('___loader')
  if (loader) {
    loader.style.display = 'flex'
  }
}
