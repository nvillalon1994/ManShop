import React from 'react'

import ManShop from './ManShop'
import WomanShop from'./WomanShop'
import Home from './Home'

export function App() {
  return (
    <div>
      {/* <Routes>
        <Route path ="/aplicaicon" element={<Home/>}></Route>
        <Route path="/ManShop.js" element={<ManShop/>}/>
        <Route path="/WomanShop.js" element={<WomanShop/>}/>
        

      </Routes> */}
      <ManShop></ManShop>
      
     
      
    </div>
  )
}

export default App;
