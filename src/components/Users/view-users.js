import { Button, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { userContext } from "../../App";
import { useState ,useContext, useEffect} from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Image from "../../mainBagrroundC.jpg";

const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    margin: 0,
    padding: 5,
    opacity: "100%",
  }
 };

const styleObj = {
    fontSize: 25,
    color: "#4a44f1",
    textAlign: "center",
    paddingTop: "10px",
}

const ViewUsers= () => {

const url = "http://localhost:9008";

const navigate = useNavigate();

const [user] = useContext(userContext);

const [body, setBody] = useState([]);


useEffect(() => {
    display();
}, []);

async function display() {

    try {
        
        const response = await fetch(`${url}/users/findAllUsers`);
        const usersData = await response.json();
    

    
        const usersDataRows = usersData.map((e)=>{
            
            return (
                <TableRow>
                    <TableCell align="center">{e.username}</TableCell>
                    <TableCell align="center">{e.fname}</TableCell>
                    <TableCell align="center">{e.lname}</TableCell>
                    <TableCell align="center">{e.rdate}</TableCell>
                    <TableCell align="center">{e.email}</TableCell>
                </TableRow>
            );
        });
    
        setBody(usersDataRows);
    } catch (e) {
        console.error(e);

    }
}

    return ( 
      <>
      <center>
        <nav className="baristasup">
           <h1 style={styleObj}>Welcome to users information page</h1>
        </nav>
        <TableContainer component={Paper}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Username</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">First Name</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Last Name</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Registration Date</TableCell>
                        <TableCell style={{backgroundColor:'lightgrey', color: 'black' }} align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <tbody>{body}</tbody>
            </Table>
            </TableContainer>
            <Button variant='contained' onClick={() => navigate("/usersdashboard")}>Back</Button>
      </center>
      </>

     );
}
export default ViewUsers;