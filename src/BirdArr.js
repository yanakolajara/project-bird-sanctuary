import birdData from './data/birds.js';

export const birdList = () => {
    const list = birdData.map(bird => {
        return(
        <div class="card" id={bird.id}>
            <p class="birdName">{bird.name}</p>
            <img class="birdImage" alt="bird image" src={bird.img}/>
            <p class="birdPrice">${bird.amount.toFixed(2)}</p>
            <button class="birdAdopt" onClick=''>Adopt</button>
        </div>
        )
    })
    return(
        <>
            {list}
        </>
    )
}