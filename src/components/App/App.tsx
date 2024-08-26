import { useState } from 'react';
import { Container } from '../Container';
import { Description } from '../Description';
import { Header } from '../Header';
import { ProductShowBar } from '../ProductShowBar';
import { Order } from '../../types';
import style from './App.module.scss';

function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (order: Order) => {
    setOrders([order]);
  };

  const handleDelete = (id: string) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const HandleOnConfirm = (orders: Order[]) => {
    setOrders(orders);
  };

  return (
    <>
      <Header
        orders={orders}
        onDelete={handleDelete}
        onConfirm={HandleOnConfirm}
      />
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
