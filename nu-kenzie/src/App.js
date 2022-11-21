import './Style/globalStyle.css'
import './App.css';
import { Form } from './Components/Form';
import { tipoDeValor, todosValores } from './data/data';
import { useState } from 'react';
import { Lista } from './Components/Lista';
import { Saldo } from './Components/Contador';
import { CardsVazio } from './Components/CardsVazio';
import { NavBarCards } from './Components/NavBarCards';
import { HomePage } from './Components/HomePage';

function App() {
  const [tipos, setTipos] = useState(tipoDeValor)
  const [valores, setValores] = useState(todosValores)
  const [home, setHome] = useState(false)


  const addValor = (novoValor) => {
    setValores([...valores, novoValor])
  }

   const removerValor = (descricao) => {
   let novaLista = valores.filter((element) => element.description != descricao)
    setValores(novaLista)
  }   

  return (
    <div className="App">
     { home ? (
      <div className='background'> 
        <header>
        <nav className='nav'>
          <div className='div-nav'>
            <div className='div-logo'>
              <h2 className='h2-rosa'>Nu</h2>
              <h2 className='h2-cinza'>Kenzie</h2>
            </div>
            <button className='button-div' onClick={ () => setHome(false)}>Inicio</button>
          </div>
        </nav>
      </header>

      <main>
        <div className='div-form'>
          <Form tipos={tipos} valores={valores} addValor={addValor}/>
          <Saldo arry={valores}/>
        </div>
        <div className='essa'>
          <NavBarCards arry={valores} removerValor={removerValor}/>
          <Lista arry={valores} removerValor={removerValor}/>
        </div>

      </main>
      </div>) : (
        <HomePage setHome={setHome}/>
    )}
    </div>
  );
}




export default App;

