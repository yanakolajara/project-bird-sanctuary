import './App.css'
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
          <div id="cartBirds" value="0">
            <ol id="cartList">
            </ol>
          </div>
          <hr/>
          <div class="cartSummary">
            <p class="subtotal" value="0">Subtotal: $0.00</p>
            <p class="discount">Discount: 0%</p>
            <h4 class="totalCost" value="0">Total: $0.00</h4>
          </div>
          <hr/>
          <div class="bonusItems">
            <ul class="bonusList">
            </ul>
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
