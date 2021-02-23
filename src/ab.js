import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import QRCode from "react-qr-code";
import TextField from '@material-ui/core/TextField';
import { TwitterPicker } from "react-color";

import { Button } from '@material-ui/core';
class App extends Component {

constructor(props){
  super(props)
 
  this.state={
    qrtext:'QR Code BY Premashish',
   
    bgcolor:'Black',
    fgcolor:'white',
  }
   this.changeQr=this.changeQr.bind(this)
   this.onColorChange=this.onColorChange.bind(this)
}

changeQr(event){this.setState({input:event.target.value})}
 onColorChange(color, event) {this.setState({ fgColor: color.hex })}


  render() {
    return (
      <div>
            
            <div className="outer">
                    <h1>Qr Code Generator</h1>
            </div>
          
          <div className="combined">
                <div className="QR">
                      <QRCode bgColor={this.state.bgcolor}   fgColor={this.state.fgcolor} size={this.state.size}  value="hfhbf"/>
                </div >
                <div className="bt">
                
                 <TwitterPicker
            triangle="hide"
            color={this.state.fgColor}
            colors={[
              "#FF6900",
              "#FCB900",
              "#7BDCB5",
              "#00D084",
              "#8ED1FC",
              "#0693E3",
              "#ABB8C3",
              "#EB144C",
              "#3D3D3D",
              "#000000",
            ]}
            onChange={this.onColorChange}
          />
                </div>
                
          </div>
          <br />
          <div className="val">
                   <TextField id="outlined-basic" label="Enter the Link" variant="outlined" onChange={(e) => this.changeQr(e)} />
                </div>
      </div>
    )
  }
}



export default App