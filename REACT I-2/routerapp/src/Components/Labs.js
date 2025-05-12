import React from 'react'
import{useNavigate} from 'react-router-dom'

const Labs = () => {
    const x = useNavigate();
    function clickHandler() {
        //move to about page
       x("/about");
    }
    return (<div>
        <div>This is Labs</div>
        <button onClick={clickHandler}>Move to About Page</button>
    </div>
    )
}

export default Labs
