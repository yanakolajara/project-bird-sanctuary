import birdData from './data/birds.js';

export let total = 0;
export const birdList = () => {
    const list = birdData.map(bird => {
        return(
        <div class="card" id={bird.id}>
            <p class="birdName">{bird.name}</p>
            <img class="birdImage" alt="bird image" src={bird.img}/>
            <p class="birdPrice">${bird.amount.toFixed(2)}</p>
            <button class="birdAdopt" onClick={() => addElement(bird)}>Adopt</button>
        </div>
        )})
    return(
        <>{list}</>
    )
}

export const addElement = (bird) => {
    const birdElement = document.createElement('li');
    const removeButton = document.createElement('p')
    const cartValue = Number(document.getElementById('cartBirds').getAttribute('value'))
    const newSubtotal = document.querySelector('.subtotal')
    const cartList = document.querySelector('#cartBirds')

    birdElement.appendChild(document.createTextNode(`${bird.name}: $${bird.amount}`))
    birdElement.setAttribute('amount', bird.amount)
    birdElement.setAttribute('id', bird.id)
    removeButton.setAttribute('class', 'removeElement')
    removeButton.appendChild(document.createTextNode('Remove'))
    removeButton.setAttribute('onclick',
    "parentNode.remove();\
    const newSubtotal = document.querySelector('.subtotal');\
    const cartList = document.querySelector('#cartBirds');\
    const cartValue = Number(document.getElementById('cartBirds').getAttribute('value'));\
    const newTotal = document.querySelector('.totalCost');\
    const newDiscount = document.querySelector('.discount');\
    const listLength = document.getElementById('cartList').children.length;\
    cartList.setAttribute('value', cartValue - parentNode.getAttribute('amount'));\
    const newCartValue = Number(document.getElementById('cartBirds').getAttribute('value'));\
    newSubtotal.removeChild(newSubtotal.firstChild);\
    newSubtotal.appendChild(document.createTextNode(`Subtotal: $${newCartValue}`));\
    const discount = listLength >= 3;\
    discount ? (newDiscount.removeChild(newDiscount.firstChild),newDiscount.appendChild(document.createTextNode(`Discount: 10%`))) : (newTotal.removeChild(newTotal.firstChild), newTotal.appendChild(document.createTextNode(`Total: $${(newCartValue).toFixed(2)}`))) ;\
    discount ? (newTotal.removeChild(newTotal.firstChild) , newTotal.appendChild(document.createTextNode(`Total: $${(newCartValue * .9).toFixed(2)}`))) : (newDiscount.removeChild(newDiscount.firstChild),newDiscount.appendChild(document.createTextNode(`Discount: 0%`)));\
    ")
    
    birdElement.appendChild(removeButton)
    document.querySelector('#cartList').appendChild(birdElement)
    newSubtotal.removeChild(newSubtotal.firstChild)
    cartList.setAttribute('value', cartValue + bird.amount)
    const newCartValue = Number(document.getElementById('cartBirds').getAttribute('value'))
    newSubtotal.appendChild(document.createTextNode(`Subtotal: $${(newCartValue).toFixed(2)}`))
    verifyDiscount(newCartValue)
}

const verifyDiscount = (cartValue) => {
    const newTotal = document.querySelector('.totalCost')
    const newDiscount = document.querySelector('.discount')
    if(document.querySelector('#cartList').children.length >= 3){
        newDiscount.removeChild(newDiscount.firstChild)
        newDiscount.appendChild(document.createTextNode(`Discount: 10%`))
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(cartValue * .9).toFixed(2)}`))
    }else{
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(cartValue).toFixed(2)}`))
    }
    return;
}


//TODO: Add bonus