import './App.css'

function App () {
  const data = require('./data/birds.js')
  return (
    <div id="mainDiv">
      <aside>
        <div class="cart">
          <p class="title">Cart</p>
          <div>Test1</div>
          <div>Test2</div>
          <div>Test3</div>
        </div>
        <div class="checkOut">
          <p class="title">Checkout</p>
          <form onSubmit="">
            <label htmlFor="firstName">First Name</label>
            <input
            type="text"
            id="firstName"
            value=""
            />
            <label htmlFor="lastName">Last Name</label>
            <input
            type="text"
            id="lastName"
            value=""
            />
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value=""
            />
            <label htmlFor="zipCode">Zip code</label>
            <input
            type="number"
            id="zipCode"
            value=""
            />
            <input
            type="submit"
            id="submit"
            />
          </form>
        </div>
      </aside>
      <main class="birds">
        <div class="birdBox">
          <p class="birdName">Bird name</p>
          <img class="birdImage" alt="bird image"/>
          <p class="birdPrice">$Bird Price</p>
        </div>
        <div class="birdBox"></div>
        <div class="birdBox"></div>
        <div class="birdBox"></div>
        <div class="birdBox"></div>        
      </main>
    </div>
  );
};

export default App;
