import React from 'react'
import Home from './Home'
import Cart from './Cart'


export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
  )
}

export default App