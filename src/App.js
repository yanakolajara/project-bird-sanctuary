import './App.css'
import birdData from './data/birds.js';
import {birdList} from './Info.js'
import { useState } from 'react';

function App () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [zipcode, setZipcode] = useState('');

  return (
    <div id="mainDiv">
      <aside>
        <div class="cart">
          <p class="title">Cart</p>
          <div class="cartBirds">
            <ol id="cartList">
            </ol>
          </div>
          <hr/>
          <div class="cartSummary">
            <p class="discount">Discount: 0%</p>
            <p class="subtotal">Subtotal: $0.00</p>
            <p class="totalCost">Total: $0.00</p>
          </div>
        </div>
        <div class="checkOut">
          <p class="title">Checkout</p>
          <form onSubmit="">
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(x) => setFirstName(x.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(x) => setLastName(x.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(x) => setEmail(x.target.value)}
            />
            <label htmlFor="zipCode">Zip code</label>
            <input
            type="number"
            id="zipCode"
            value={zipcode}
            onChange={(x) => setZipcode(x.target.value)}
            />
            <input
            type="submit"
            id="submit"
            />
          </form>
        </div>
      </aside>
      <main class="birds">
        {birdList()}  
      </main>
    </div>
  );
};

export default App;
