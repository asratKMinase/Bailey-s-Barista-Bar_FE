import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { userContext } from "../../App";
import { useState ,useContext, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const styleObj = {
    fontSize: 25,
    color: "#4a44f1",
    textAlign: "center",
    paddingTop: "10px",
}

const BaristaSignUp = () => {

const url = "http://localhost:9008";

const navigate = useNavigate();

const [user] = useContext(userContext);

const [body, setBody] = useState([]);

useEffect(() => {
    display();
}, []);

async function display() {

    try {
        
        const response = await fetch(`${url}/classes/findAllClasses`);
        const classesData = await response.json();
        console.log(classesData);
        const classesDataRows = classesData.map((e)=>{
            
            return (
                <TableRow>
                    <TableCell align="center">{e.id}</TableCell>
                    <TableCell align="center">{e.cname}</TableCell>
                    <TableCell align="center">{e.sdate}</TableCell>
                    <TableCell align="center">{e.edate}</TableCell>
                </TableRow>
            );
        });
    
        setBody(classesDataRows);
    } catch (e) {
        console.error(e);

    }
}

    return ( 
      <>
      <center>
        <nav className="baristasup">
           <h1 style={styleObj}>Welcome to sign up page</h1>
        </nav>
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Class ID</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Class Name</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Start Date</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">End Date</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>{body}</tbody>
            </Table>
            </TableContainer>
            {/* <Button variant='contained' onClick={() => Navigate("/login")}>Back</Button> */}
      </center>
      </>

     );
}
export default BaristaSignUp;