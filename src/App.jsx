
import './App.css'
import Product from './components/Product'
import Items from './components/Items'
function App() {
  const obj = {
    ram: "8 GB",
    rom: "128 GB",
    processor: "i9"
  }
  return (
    <>
      <h1>Code step by step</h1>
      <Items />
      <Product name="Iphone 17" price="30000" color="White" data={obj} />
      <Product name="Samsung 26 Ulra" price="32000" color="Black" data={obj} />
      <Product name="Motorola" price="15000" color="Red" data={obj} />
    </>
  )
}

export default App
