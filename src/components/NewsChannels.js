import React,{Component} from 'react'
import { connect } from 'react-redux'
import Card from './card'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class NewsChannel extends Component {

    state = {
        channelName:''
    }
   componentDidMount(){
       console.log(this.props.InternationalChannel)
   }
   handleChnnelName = (e)=>{
       console.log(e)
   }

   handleClick = (e)=>{
       localStorage.setItem('channelname',e)
   }

   ListIndianNews = ()=>{
       
    if ( this.props.IndianChannels.length !== 0 ) {
        return this.props.IndianChannels.map( channel => 
           <div onClick={()=>{this.handleClick(channel.name)}} className="col-sm-4" key={channel.id}>
              
                <Link  to="/National">
                <Card header={channel.name}  id={channel.id} icon={channel.icon} />
                </Link>
                
           </div>
        )
      }
       
   }
   ListInterNationalNews = ()=>{
       
    if ( this.props.InternationalChannel.length !== 0 ) {
        return this.props.InternationalChannel.map( channel => 
            <div onClick={()=>{this.handleClick(channel.name)}} className="col-sm-4" key={channel.id}>
              
              <Link  to="/International">
              <Card header={channel.name}  id={channel.id} icon={channel.icon} />
              </Link>
              
         </div>
        )
      }
       
   }
    render(){
        return(
            <div className="container">
                
                <center style={{marginTop:"10%", color:"white"}}> <h2>National News</h2> </center>
                <div className="row">
                {this.ListIndianNews()}
                </div>
                <center style={{marginTop:"10%", color:"white"}}> <h2>International News</h2> </center>
                <div className="row">
                {this.ListInterNationalNews()}
                </div>
               
            </div>
            
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        updateChannelName:(name)=>{dispatch({type:'update',id:name})}
    }
}
const mapStateToProps = (state) => {
    return {
        InternationalChannel: state.InternationalChannel,
        IndianChannels:state.IndianChannels
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(NewsChannel)