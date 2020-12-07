import './App.css';
import React, { Component } from 'react';
import QrReader from 'react-qr-scanner'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 300,
      width: 1000,
    }
 
    return(
      <div>
        <h1>QR Code Rewards</h1>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
        <button>Save this QR code</button>
      </div>
    )
  }
}

export default App;
