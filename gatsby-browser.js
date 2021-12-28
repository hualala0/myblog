/** @format */

import './src/styles/loading.css'
import './src/styles/index.css'
// import { format } from './src/components/format'

// export const wrapRootElement = format

export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById('___loader').style.display = 'none'
  }, 1000)
}
