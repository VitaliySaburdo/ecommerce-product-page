import { Container } from '../Container';
import { Description } from '../Description';
import { Header } from '../Header';
import { ProductShowBar } from '../ProductShowBar';
import style from './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <div className={style.wrapper}>
              <ProductShowBar />
              <Description />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
