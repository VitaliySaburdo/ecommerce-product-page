import { useState } from 'react';
import { Container } from '../Container';
import { Description } from '../Description';
import { Header } from '../Header';
import { ProductShowBar } from '../ProductShowBar';
import style from './App.module.scss';

interface Order {
  img: string;
  name: string;
  price: number;
  count: number;
  total: number;
}

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (order: Order) => {
    setOrders([order]);
  };

  const handleDelete = (index: number) => {
    setOrders(orders.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <Header orders={orders} onDelete={handleDelete} />
      <main>
        <section>
          <Container>
            <div className={style.wrapper}>
              <ProductShowBar />
              <Description addToCart={addToCart} />
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}

export default App;
