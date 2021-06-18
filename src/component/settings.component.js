import React ,{useState} from 'react'
import {TextField, Button} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import clsx from 'clsx'


export default function Settings(props) {
    const [btn1Ref,setBtn1Ref] = useState(null)
    const [btn2Ref,setBtn2Ref] = useState(null)
    const [btn3Ref,setBtn3Ref] = useState(null)
    const [highlightedBtn,setHighlightedBtn] = useState(null)
    const [alertDivRef,setAlertDivRef] = useState(null)
    const [userName,setUserName] = useState("")
    const [difficulty,setDifficulty] = useState(null)
    const [alertDiv2Ref,setAlertDiv2Ref] = useState(null);
    
    const startBtnHandler = ()=>{
        if (userName === ""){
            alertDivRef.style.setProperty("display","block")
            return
        }
        else{
            alertDivRef.style.setProperty("display","none")
        }
        if(difficulty === null){
            alertDiv2Ref.style.setProperty("display","block")
            return
        }
        else{
            alertDiv2Ref.style.setProperty("display","none")
        }
        if(props.audio){
            props.audio.play()
        }

        props.startgame(userName,difficulty)
    }
    const handleChange =(event)=>{
        setUserName(event.target.value)
    }
    const highlightedBtnHandler = (param,diff)=>{
        if(highlightedBtn !== param){
            setHighlightedBtn(param)
            setDifficulty(diff)
        }else{
            setHighlightedBtn(null)
        }
        
    }

    if(highlightedBtn !== null){
        btn1Ref.style.setProperty("opacity",0.2)
        btn2Ref.style.setProperty("opacity",0.2)
        btn3Ref.style.setProperty("opacity",0.2)
        highlightedBtn.style.setProperty("opacity",0.8)
    }

    // const classes = useStyles()
    return (
            <React.Fragment>
            <div className='inval username'>
                <TextField 
                    id="username" 
                    InputProps={{startAdornment: <AccountCircleIcon/>}} 
                    label="Player Name" 
                    autoComplete={"off"}
                    value = {userName}
                    onChange={(event)=>handleChange(event)}
                    fullWidth={true}/>
            </div>
            <div ref={alertdiv => {setAlertDivRef(alertdiv)}} className="alert">
                <Alert variant = "filled" className="alertin" severity="error">UserName is empty !!</Alert>
            </div>
            <h1 className="typo" >Level</h1>
            <div className="inval difficulty">
                    <div ref={btnref=>{setBtn1Ref(btnref)}} onClick={()=>{highlightedBtnHandler(btn1Ref,"2")}} className={clsx("btn btn1")}>Easy</div>
                    <div ref={btnref=>{setBtn2Ref(btnref)}} onClick={()=>{highlightedBtnHandler(btn2Ref,"1")}} className={clsx("btn btn2")}>Medium</div>
                    <div ref={btnref=>{setBtn3Ref(btnref)}} onClick={()=>{highlightedBtnHandler(btn3Ref,"0.8")}} className={clsx("btn btn3")}>Hard</div>
            </div>
            <div ref={alertdiv => {setAlertDiv2Ref(alertdiv)}} className="alert">
                <Alert variant = "filled" className="alertin" severity="error">Common now select A difficulty !!</Alert>
            </div>
            <div className="hit">
                <Button variant="contained" onClick={()=>{startBtnHandler()}} className="startButton" >Start Game</Button>
            </div>
            </React.Fragment>
    )
}
