
import './App.css'
import FetchData from './components/FetchData'
// import UseEffect from './components/UseEffect'
// import UseState from './components/UseState' 
// import Map from './components/Map' 
// import Filter from './components/Filter' 
function App() {
  // const obj = {
  //   ram: "8 GB",
  //   rom: "128 GB",
  //   processor: "i9"
  // }

  return (
    <>
      <div className="container-fluid">
      <FetchData />
        {/* <UseEffect /> */}
        {/* <Filter /> */}
        {/* <Map /> */}
        {/* <UseState /> */}
        {/* <Product name="Iphone 17" price="30000" color="White" data={obj} /> */}
        {/* <Product name="Samsung 26 Ulra" price="32000" color="Black" data={obj} />
      <Product name="Motorola" price="15000" color="Red" data={obj} /> */}
      </div>
    </>
  )
}

export default App
