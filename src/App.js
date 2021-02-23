import React from 'react'

import './App.css';
import QRCode from "qrcode.react";
import {SliderPicker} from "react-color"
import AppBar from '@material-ui/core/AppBar';
import {TextField} from '@material-ui/core';



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
   this.setState({
     qrText:event.target.value
   })

  }
  render(){
    return(
      <div >
                <div className="container">
                  
                      <div className="partition">
                        <AppBar position="static" color="secondary">
                                <h1 id='head'>Generate QR codes</h1>
                        </AppBar>
                                
                               
                              
<div className='ab'>
                            <div className='code'>

                                
                           
                                   <QRCode 
                                            value={this.state.qrText}
                                            fgColor={this.state.qrfgcolor}
                                            bgColor={this.state.qrbgcolor}
                                            size={250}
                                          
                                           
                                  />
                                  <div className="tex">
                                  <TextField   
                                    label="Text for QR"
                                    variant="outlined"
                                    onChange={this.changeQrText}
                                  />
                              </div>
            
                              <img  src={"https://lukaszadam.com/assets/downloads/hero-illustration.svg"} />
                                 
                                  
</div>

                            
                                        
                       </div>      
                       </div>   
                </div> 
                <div className="right">
  <SliderPicker />
</div>
                
      </div>            
   
      
    )
  }
}

export default App