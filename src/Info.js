import birdData from './data/birds.js';

export const birdList = () => {
    const list = birdData.map(bird => {
        return(
        <div class="card" id={bird.id}>
            <p class="birdName">{bird.name}</p>
            <img class="birdImage" alt="bird image" src={bird.img}/>
            <p class="birdPrice">${bird.amount.toFixed(2)}</p>
            <button class="birdAdopt" onClick={() => addElement(bird)}>Adopt</button>
        </div>
        )
    })
    return(
        <>
            {list}
        </>
    )
}

export let total = 0;
export const addElement = (bird) => {
    const birdElement = document.createElement('li');
    const newSubtotal = document.querySelector('.subtotal')
    const newTotal = document.querySelector('.totalCost')
    const newDiscount = document.querySelector('.discount')
    birdElement.appendChild(document.createTextNode(`${bird.name}: $${bird.amount}`))
    birdElement.setAttribute('amount', bird.amount)
    birdElement.setAttribute('id', bird.id)
    document.querySelector('#cartList').appendChild(birdElement)
    newSubtotal.removeChild(newSubtotal.firstChild)
    newSubtotal.appendChild(document.createTextNode(`Subtotal: $${(total += bird.amount).toFixed(2)}`))
    if(document.querySelector('#cartList').children.length >= 3){
        newDiscount.removeChild(newDiscount.firstChild)
        newDiscount.appendChild(document.createTextNode(`Discount: 10%`))
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(total * .9).toFixed(2)}`))
    }else{
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(total).toFixed(2)}`))
    }
    return;
}
