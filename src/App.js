
import './App.css';

import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
pagesize = 5;
apiKey= process.env.REACT_APP_NEWS_API;
state = {
  progress: 0
}

setProgress = (progress) =>{
  this.setState({progress:progress});
}
 
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
      color='#f11946'
      height={4}
      progress={this.state.progress}/>
      
        
      
      <Routes>
      <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apiKey} key={"general"} pagesize = {this.pagesize} country ={"Us"} category={"general"}/>}/>
      <Route path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key={"general"} pagesize = {this.pagesize} country ={"Us"} category={"general"}/>}/>
      <Route path="/entertainment" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"entertainment"} pagesize = {this.pagesize} country ={"Us"} category={"entertainment"}/>}/>
      <Route path="/business" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"business"} pagesize = {this.pagesize} country ={"Us"} category={"business"}/>}/>
      <Route path="/health" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"health"} pagesize = {this.pagesize} country ={"Us"} category={"health"}/>}/>
      <Route path="/science" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"science"} pagesize = {this.pagesize} country ={"Us"} category={"science"}/>}/>
      <Route path="/sports" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"sports"} pagesize = {this.pagesize} country ={"Us"} category={"sports"}/>}/>
      <Route path="/technology" element = {<News setProgress={this.setProgress} apikey={this.apikey} key={"technology"} pagesize = {this.pagesize} country ={"Us"} category={"technology"}/>}/>
    </Routes>
      </Router>
      </div>
    )
  }
}

