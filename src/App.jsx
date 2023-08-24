import MenuProvider from "./Contexts/MenuContext"
import CartProvider from "./Contexts/CartContext"

import Home from "./Pages/Home"

function App() {

  return (
    <>
      <MenuProvider>
        <CartProvider>
          <Home />
        </CartProvider>
      </MenuProvider>
    </>
  )
}

export default App
