import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './components/App'
import { mock } from './mock'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <App data={mock} changeHandler={data => console.log(data)} />
  </StrictMode>,
)
