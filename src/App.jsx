import logo from './logo.svg';
import './App.css';
import Main from './components/Main'
import Layout from './layouts/Layout'
function App() {

  let string = "App"
  let numero = 1

  return (
    <div className={string}>
      <header className="App-header">
        <h1>MINGA</h1>
        <p>
          app para realizar con el cohorte 40
        </p>
      </header>
      <Layout>
        {/* PRIMER UTILIZACIÓN DE COMPONENTE MAIN */}<Main texto="Hola soy una prop" numero={numero} />
        {/* SEGUNDA UTILIZACIÓN DE COMPONENTE MAIN */}<Main texto="Hola soy la segunda prop" />
      </Layout>
    </div>
  );
}

export default App;