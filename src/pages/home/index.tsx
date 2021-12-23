import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Main } from '../../components/main'
import GlobalStyles from '../../styles/global'

function Home() {
  return (
    <div className='wrapper'>
      <GlobalStyles />
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Home