import React from 'react'

import './App.css';
import QRCode from "qrcode.react";
import TextField from '@material-ui/core';
import { TwitterPicker } from "react-color";
import AppBar from '@material-ui/core/AppBar';



const INIT_TEXT: string = "Enter text for QR"



class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      qrText:INIT_TEXT,
      qrbgcolor:'white',
      qrfgcolor:'black',
    }
    this.changeQrText=this.changeQrText.bind(this)

 
 }

changeQrText(event) {
   this.setState=({
     qrText:event.target.value
   })

  }
  render(){
    return(
      <div>
                <div className="container">
                  
                      <div className="partition">
                        <AppBar position="static" color="secondary">
                                <h1 id='head'>Generate QR codes</h1>
                        </AppBar>
                                
                               
                              
<div className='ab'>
                            <div className='code'>

                                <TextField   label="Text for QR"
            variant="outlined"
            onChange={this.changeQrText}/>
                           
                                   <QRCode 
                                            value={this.state.qrText}
                                            fgColor={this.state.qrfgcolor}
                                            bgColor={this.state.qrbgcolor}
                                            
                                          
                                           
                                  />
                                 
                                  
                            </div>
                            
                                        
                       </div>      
                       </div>   
                </div>    
      </div>            
   
      
    )
  }
}

export default App