import React from 'react'
import Header from './header.js'
export default class App extends React.Component {

  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
