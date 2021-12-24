import { Footer } from '../../components/footer'
import { Header } from '../../components/header'
import { Main } from '../../components/main'

function Home() {
  return (
    <div className='wrapper'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default Home