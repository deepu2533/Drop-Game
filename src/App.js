import React,{useState} from 'react'
import DropGame from './component/dropgame.component'


export default function App() {
  var x = 0
  if (window.innerHeight > window.innerWidth){
    x = 0
  }else x = 90
  ;
  const [orientation, setOrientation] = useState(x)


  window.onorientationchange = function(event) {
      setOrientation(event.target.screen.orientation.angle);
  };


    return (
      
    <div id="enjoy" className="container">
      

      {(orientation === 0)? <div className="switch">Please switch to Landscape mode!</div>:
      <div className="content a"><DropGame/></div>}
    </div>
    )
}