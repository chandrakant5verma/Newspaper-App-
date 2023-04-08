import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
      <img className="my-3" src={Loading} alt = "loading"/>
      </div>
    )
  }
}
