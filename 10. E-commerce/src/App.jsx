import { useState } from "react"
import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Sidebar from "./Sidebar/Sidebar"
import products from './db/data'
import Card from "./components/Card"


function App() {
  const [selectesCategory , setSelectedCategory] = useState(null)
  const [query , setQuery ] = useState("")
  //------------- input filter------------------
  


  const handleInputChange = event => {
    setQuery(event.target.value) 

  }

  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()!== -1))

   //------------- Radio filter------------------

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

     //------------- Radio filter------------------


    const handleClick = event => {
      selectesCategory(event.target.value)
    }

    function filterData(products , selected  , query ) 
    { let filteredProducts = products

      // filtering input items 

      if (query ) {
        filteredProducts = filteredItems 

      }
      // selected filter  

      if (selected) {
        filteredProducts = filteredProducts.filter(({category , color , company , newPrice , title })=> products.category === selected || company === selected  || newPrice == selected ||title === selected ) 
      }
      return filteredProducts.map(({img , title , star , reviews , prevPrice , newPrice }) => {
        <Card key={Math.random()}
        img={img}
        title = {title}
        reviews={reviews}
        newPrice={newPrice}
        star={star}
        prevPrice = {prevPrice}

        />
      })
    }



  return (
    <>
        <Sidebar/>
        <Navigation/> 
        <Recommended/> 
        <Products/> 
        
    
    </>

  )
}

export default App
