import birdData from './data/birds.js';
import bonusItems from './data/bonusItems.js'

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
    const bonus = document.querySelector('#bonusList')

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
    const bonus = document.querySelector('#bonusList');\
    cartList.setAttribute('value', cartValue - parentNode.getAttribute('amount'));\
    const newCartValue = Number(document.getElementById('cartBirds').getAttribute('value'));\
    newSubtotal.removeChild(newSubtotal.firstChild);\
    newSubtotal.appendChild(document.createTextNode(`Subtotal: $${newCartValue}`));\
    const discount = listLength >= 3;\
    const newCartLength = document.querySelector('#cartList').children.length;\
    discount ? (newDiscount.removeChild(newDiscount.firstChild),newDiscount.appendChild(document.createTextNode(`Discount: 10%`))) : (newTotal.removeChild(newTotal.firstChild), newTotal.appendChild(document.createTextNode(`Total: $${(newCartValue).toFixed(2)}`))) ;\
    discount ? (newTotal.removeChild(newTotal.firstChild) , newTotal.appendChild(document.createTextNode(`Total: $${(newCartValue * .9).toFixed(2)}`))) : (newDiscount.removeChild(newDiscount.firstChild),newDiscount.appendChild(document.createTextNode(`Discount: 0%`)));\
    const total = discount ? newCartValue * .9 : newCartValue;\
    if(total < 1000 & total >= 500){\
        !!bonus.children[3] ? bonus.children[3].remove() : NaN;\
    } else if(total < 500 & total >= 300){\
        !!bonus.children[3] ? bonus.children[3].remove() : NaN;\
        !!bonus.children[2] ? bonus.children[2].remove() : NaN;\
    } else if(total < 300 & total >= 100){\
        !!bonus.children[3] ? bonus.children[3].remove() : NaN;\
        !!bonus.children[2] ? bonus.children[2].remove() : NaN;\
        !!bonus.children[1] ? bonus.children[1].remove() : NaN;\
    } else if(total < 100){\
        !!bonus.children[3] ? bonus.children[3].remove() : NaN;\
        !!bonus.children[2] ? bonus.children[2].remove() : NaN;\
        !!bonus.children[1] ? bonus.children[1].remove() : NaN;\
        !!bonus.children[0] ? bonus.children[0].remove() : NaN;\
    };\
    ")
    
    birdElement.appendChild(removeButton)
    document.querySelector('#cartList').appendChild(birdElement)
    newSubtotal.removeChild(newSubtotal.firstChild)
    cartList.setAttribute('value', cartValue + bird.amount)
    const newCartValue = Number(document.getElementById('cartBirds').getAttribute('value'))
    const newCartLength = document.querySelector('#cartList').children.length
    newSubtotal.appendChild(document.createTextNode(`Subtotal: $${(newCartValue).toFixed(2)}`))
    verifyDiscount(newCartValue)
    bonus.innerHTML = ''
    if(verifyDiscount(newCartValue) >= 100 && verifyDiscount(newCartValue) < 300){
        const bonusItem = document.createElement('li')
        bonusItem.appendChild(document.createTextNode(bonusItems[0]))
        bonus.appendChild(bonusItem)
    }else if(verifyDiscount(newCartValue) >= 300 && verifyDiscount(newCartValue) < 500){
        for(let x = 0; x < 2; x++){
            const bonusItem = document.createElement('li')
            bonusItem.appendChild(document.createTextNode(bonusItems[x]))
            bonus.appendChild(bonusItem)
        }
    }else if(verifyDiscount(newCartValue) >= 500 && verifyDiscount(newCartValue) < 1000){
        for(let x = 0; x < 3; x++){
            const bonusItem = document.createElement('li')
            bonusItem.appendChild(document.createTextNode(bonusItems[x]))
            bonus.appendChild(bonusItem)
        }
    }else{
        for(let x = 0; x < 4; x++){
            const bonusItem = document.createElement('li')
            bonusItem.appendChild(document.createTextNode(bonusItems[x]))
            bonus.appendChild(bonusItem)
        }
    }
    // TODO: Add bonus list logic
}

const verifyDiscount = (cartValue) => {
    const newTotal = document.querySelector('.totalCost')
    const newDiscount = document.querySelector('.discount')
    let total = NaN
    if(document.querySelector('#cartList').children.length >= 3){
        newDiscount.removeChild(newDiscount.firstChild)
        newDiscount.appendChild(document.createTextNode(`Discount: 10%`))
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(cartValue * .9).toFixed(2)}`))
        total = cartValue * .9;
    }else{
        newTotal.removeChild(newTotal.firstChild)
        newTotal.appendChild(document.createTextNode(`Total: $${(cartValue).toFixed(2)}`))
        total = cartValue
    }
    return total;
}

export const submitForm = () => {
    alert("You have adopted birds. Thank you!")
}