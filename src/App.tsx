import { Footer } from './components/footer'
import { Header } from './components/header'
import GlobalStyles from './styles/global'
import { Main } from './components/main'

function App() {
  return (
    <div>
      <GlobalStyles/>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}

export default App
