import { Container } from '../Container';
import { Header } from '../Header/Header';
import { ProductShowBar } from '../ProductShowBar/ProductShowBar';
import './App.module.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <ProductShowBar />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
