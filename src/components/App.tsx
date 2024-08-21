import productImage from '../assets/images/image-product-1-thumbnail.jpg';
import { Container } from './Container';
import { Header } from './Header/Header';
function App() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <h1>Hello</h1>
            <img src={productImage} alt="" />
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
