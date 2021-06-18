import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core'
import Settings from './settings.component'
import clsx from 'clsx'
import Gameplay from './gameplay.component'
import bgmusic from '../assets/bgmusic.mp3'

const useStyles = makeStyles(theme=>({
    
    container:{
        position:"relative",
        height:"200%",
        // background:"black",
        overflow:"hidden",
        width:"100%",
        top:"0",
        },
    content2:{
        // background:"black",
        height:"50%",

    },content1:{
        height:"50%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
    }
}))


export default function DropGame(){
    const [difficulty,setDifficulty] = useState("");
    const [name,setName] = useState("");
    const [containerRef,setContainerRef] = useState(null);
    const [animate,setAnimate] = useState(0)
    const [even, setEven] = useState(null)
    const aud = new Audio(bgmusic)
    aud.volume = 0.6
    const restart = () =>{
        if (containerRef !== null){
            window.location.reload()
            aud.Pause()
            containerRef.setAttribute("animate","0")
            setAnimate(0)
            setName("")
            setDifficulty("")
        }
        
    }

    const startGame =(name,difficulty)=>{
        if (containerRef !== null){
            containerRef.setAttribute("animate","1")
            setAnimate(1)
            setName(name)
            setDifficulty(difficulty)
        }
    }

    const classes = useStyles()
    return(
        <div id="play" animate={0} onKeyDown={event=> setEven(event)} ref={containerref => setContainerRef(containerref)} className={clsx(classes.container,"c")}>
                <div className={classes.content1}>
                    <div className="settingscontainer"><Settings audio={aud} startgame={startGame}/></div>
                </div>
                <div  className={classes.content2}><Gameplay audio={aud} restart={restart} event={even} start={animate} name={name} difficulty={difficulty}/></div>
            </div>
    )
}