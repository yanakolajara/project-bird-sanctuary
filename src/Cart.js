import birdData from './data/birds.js';


export const adopt = (props) => {
    // TODO: Add onClick props
    const {id} = props;
    const bird = birdData.find((x) => x.id === id)
    return(
        <></>
    )
}
// TODO: Add adopt function to app.js
// TODO: Call function ass <adopt/> with id of animal