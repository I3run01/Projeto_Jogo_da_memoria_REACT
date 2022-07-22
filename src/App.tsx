import { Main } from './GlobalStyles'

import { Actions } from './components/GameDiv/Actions'
import { GameDiv } from './components/GameDiv'
import { Nav } from './components/Nav'


function App() {

  return (
    <div className="App">
      <Main>
        <div id='Menu'>
          <Nav/>
        </div>
        <div id='Game'>
          <GameDiv/>
        </div>
      </Main>
    </div>
  )
}

export default App
