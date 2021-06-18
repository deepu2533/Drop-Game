import React from 'react'
import {Table,TableHead,TableBody,TableRow,TableCell,TableContainer,Paper,Button} from '@material-ui/core'
import {styled} from '@material-ui/core/styles'
import tableData from '../assets/table.json'
const MyTable = styled(Table)({
    background:"rgba(255,255,255,0.2)"
})
const MyTableBody = styled(TableBody)({
    background:"rgba(255,255,255,0.2)"
})
const MyTableHead = styled(TableHead)({
    background:"rgba(255,255,255,0.2)"
})
const MyTableRow = styled(TableRow)({
    background:"rgba(255,255,255,0.2)"
})
const MyTableCell = styled(TableCell)({
    background:"rgba(255,255,255,0.2)"
})
const MyTableContainer = styled(TableContainer)({
    background:"rgba(255,255,255,0.2)"
})




export default function Summary(props){
    
    return(
        <div className="summary">
            <div className="summarybox">
               <div>
                   <h1 className="h1">Summary</h1>
                </div>
               <div className="summarytop">
                    <h3 className="h3">Name: {props.name} </h3>
                    <h3 className="h3">Difficulty: {props.difficulty} </h3>
                    <h3 className="h3">Score: {props.points} </h3>
                </div>
                <div><h3>Top Players</h3></div>
                <div className="tableholder">
                <MyTableContainer component={Paper}>
                    <MyTable size="small">
                        <MyTableHead>
                                <MyTableRow>
                                    <MyTableCell align="left">Name</MyTableCell>
                                    <MyTableCell align="right">Score</MyTableCell>
                                    <MyTableCell align="right">Difficulty</MyTableCell>
                                </MyTableRow>
                        </MyTableHead>
                        <MyTableBody>
                            {tableData.map(atr=><MyTableRow>
                            <MyTableCell align="left" key={atr.name}>{atr.name}</MyTableCell>
                            <MyTableCell align="right" key={atr.score}>{atr.score}</MyTableCell>
                            <MyTableCell align="right" key={atr.difficulty}>{atr.difficulty}</MyTableCell>
                            </MyTableRow>)}
                        </MyTableBody>
                    </MyTable>
                </MyTableContainer>
                </div>
                <div className="footerholder"> <Button variant="contained" color="secondary" onClick={()=>{props.restart();props.end(false)}}>Restart</Button></div>
            </div>
        </div>
    )
}