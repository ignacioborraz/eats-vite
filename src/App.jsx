import './App.css';
import Layout from './layouts/Layout'
import Carousel from './components/Carousel/Carousel';

function App() {

  let string = "App"
  let numero = 1

  return (
    <div className={string}>
      <header className="App-header">
        <h1>MINGA</h1>
        <p>app para realizar con el cohorte 40</p>
      </header>
      <Layout>
        <Carousel />
      </Layout>
    </div>
  )
}

export default App;