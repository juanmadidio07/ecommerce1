import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Products from './components/Products'


function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Welcome to my Online Store"/>
    <Products />
    </>
  )
}

export default App
