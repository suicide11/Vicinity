import React from 'react'

function Card(data) {
    // console.log(data)
    return (
        <div class="card" style={{ width: "18rem", margin:"5vh", background: "none", border: "none" }}>
            <img height="200vh" width="100%" class="card-img-top" src={data.icon} alt="Card image cap" />
        </div>
       
    )
}

export default Card