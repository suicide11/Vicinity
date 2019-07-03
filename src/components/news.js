import React, {Component} from 'react'
import { connect } from 'react-redux'
function News(data){
        const handleClick = (e)=>{
            console.log(e)
        }
   
        return(
          <div class="card" >
                <div  class="card-body">
                    <h5 class="card-title">{data.header}</h5>
                    <p class="card-text">{data.body}</p>
                </div>
            </div>
        )
    
}
const mapStateToProps = (state) => {
    return {
        IndiaNews: state.IndiaNews,
        InternationalNews:state.InternationalNews
    }
  }

export default connect(mapStateToProps)(News)