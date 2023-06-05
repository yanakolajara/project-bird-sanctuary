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

export const addElement = (bird) => {
    const birdElement = document.createElement('li');
    const newTotal = document.querySelector('.totalCost')
    birdElement.appendChild(document.createTextNode(`${bird.name}: $${bird.amount} (id: ${bird.id})`))
    birdElement.setAttribute('attribute', bird.amount)
    document.querySelector('#cartList').appendChild(birdElement)
    newTotal.removeChild(newTotal.firstChild)
    newTotal.appendChild(document.createTextNode(`Total: $${(total += bird.amount).toFixed(2)}`))
    return;
}

export let total = 0;