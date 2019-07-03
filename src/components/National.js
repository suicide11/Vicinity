import React, { Component } from 'react'
import News from './news'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sortJsonArray from 'sort-json-array'
class National extends Component {
    
    state = {
        activeId: '',
        channelname: localStorage.getItem('channelname'),
        id: '',
        body: '',
        head: '',
        data:''

    }
    componentDidMount (){
        this.setState({
            data:this.props.IndiaNews
        })
    }
    handleClick = (id, head, body) => {
        this.setState({
            id: id,
            head: head,
            body: body
        })
    }
    NationalNews = () => {

        if (this.state.data.length !== 0) {
            return this.state.data.map(news =>
                <center ><div data-toggle="collapse" data-target="#full" onClick={() => { this.handleClick(news.id, news.head, news.fullnews) }} key={news.id}>


                    <News activeId={this.activeId} key={news.id} header={news.head} key={news.id} body={news.news} />


                </div></center>
            )
        }

    }
    handleSort = (e) =>{
       const x =  sortJsonArray(this.props.IndiaNews,'head')
        this.setState({
            data:x
        })
        
    }
    render() {
        return (
            <div style={{ marginTop: "5%" }} className="container">
                <center>
                    <h2>{this.state.channelname}</h2>
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <Link class="btn btn-sm btn-outline-dark" style={{minWidth:"20vh"}} to="/" >Channels</Link>
                        </li>
                        <li class="nav-item">
                            <button onClick={this.handleSort} class="btn btn-sm btn-outline-dark" style={{minWidth:"20vh"}} >Sort Alphabetically</button>
                        </li>
                    </ul>
                    <br /><br />
                </center>
                <div class="card-columns">
                    {this.NationalNews()}
                    <div id="full" class="collapse fullNews">
                        <div class="container">
                            <center>  <br /><br /> <h2>{this.state.head}</h2>
                                <br /><br />

                                {this.state.body}

                                <br /><br />
                                <button className="btn btn-lg btn-outline-success" data-toggle="collapse" data-target="#full" > close</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addCompanyName: (name) => { dispatch({ type: 'update', id: name }) }
    }
}
const mapStateToProps = (state) => {
    return {
        IndiaNews: state.IndiaNews,
        InternationalNews: state.InternationalNews
    }
}

export default connect(mapStateToProps)(National)