import React from 'react'
// component
import Header from './Component/Header/Header'
import AQIndex from './Component/AQIndex/AQIndex'
import Homepage from './Page/Homepage/Homepage'

import 'tachyons'

const App = () => {
  return (
    <div className="flex flex-column">
      <Header />

      <div className="w-100 flex justify-end">
        <AQIndex />
      </div>

      <div className="pa4 flex-grow-1 flex-shrink-0 flex items-start">
        <Homepage />
      </div>
    </div>
  )
}

export default App
