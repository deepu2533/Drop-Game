import React, { useState ,useEffect, useRef} from 'react'
import Summary from './summary.component'
import point from '../assets/point.mp3'
import loose from '../assets/loose.mp3'
import { ContactSupportOutlined } from '@material-ui/icons'

export default function Gameplay(props) {
    const [start,setStart] = useState(0)
    const [end, setEnd] = useState(false)
    const points = useRef(0)
    let ballid = 0
    let animate=0
    let bucket = document.getElementById('bucket')
    const pointScored = new Audio(point)
    const loosed = new Audio(loose)

    useEffect(()=>{
        let bucket = document.getElementById('bucket')
        bucket.style.left='0%'
    },[])    


    function startGame(event,bucket){    
        const moveRight = (element)=>{
            element.style.left = parseInt(element.style.left)+2 + '%';
        }
        
        const moveLeft = (element)=>{
            if( parseInt(bucket.style.left) > 0 )
            element.style.left = parseInt(element.style.left)-2 +'%'
        }

        var pressedKey = event.which
        if (pressedKey === 37){moveLeft(bucket);}
        if (pressedKey === 39 && parseInt(bucket.style.left) <= 86){moveRight(bucket);}
    
    }

    if (start === 1){
        startGame(props.event,bucket)
    }
    
    
    

    const animationHandler =()=>{
        document.getElementById("ball").setAttribute('animate','1')
        document.getElementById("bucket").setAttribute('animate','1')
        setStart(1)
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    function Ball(){
        const num = getRndInteger(0,98)
        const colorr = getRndInteger(0,255)
        const colorg = getRndInteger(0,255)
        const colorb = getRndInteger(0,255)

        const x = document.createElement('div')
        x.style.left = `${num}%`
        x.style.background =  `radial-gradient(circle at 50px 50px, rgba(${colorr},${colorg},${colorb},0.8) 60%,#000 )`
        x.className = "ball2"
        x.id = ""+ballid
        x.style.animation = `ballfall ${props.difficulty}s 1s ease-in forwards`
        x.setAttribute('animate',1)
        x.addEventListener("animationend",function(){
            const rect1 = this.getBoundingClientRect()
            const rect2 = document.getElementById('bucket').getBoundingClientRect()
            var overlap = !(rect1.right < rect2.left || rect1.left > rect2.right || rect1.bottom < rect2.top || rect1.top > rect2.bottom)
            if (overlap){
                points.current += 1 ;
                this.style.setProperty("display","none");
                pointScored.play()
                Ball();
            }
            else{
                loosed.play()
                console.log(props.audio)
                setStart(0)
                setEnd(true)
                }
            })

        document.getElementById("gamebord").appendChild(x)
    }

    const ballDestroy=(event)=>{
        if(event.animationName === "ballfall")
        {document.getElementById('ball').style.setProperty("display","none")
        Ball()
        }
        if(event.animationName === "bucket"){
            bucket.style.left='0%'
        }

    }
    

    return (
        <React.Fragment>
            {end ? <Summary restart = {props.restart} end={setEnd} name={props.name} difficulty = {props.difficulty} points={points.current} />:<div id="gamebord" class="gameBord">
            <div id = "bucket" className="bucket" animate={animate}>
            </div>
            <span className="counter" onAnimationEnd={()=>animationHandler()} animate ={props.start} ></span>
            <div onAnimationEnd={(event)=>{ballDestroy(event)}} id ="ball" animate={animate} className="ball" >

            </div>
            </div>
}
        </React.Fragment>
    )
}