import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useState ,useContext} from "react";
import { userContext } from "../../App";
import axios from "axios";
import { ClassNames } from "@emotion/react";


const ClassesRegister = () => {
    const navigate = useNavigate();

    const url = "http://localhost:9008";

    const classIdInput = useRef();
    const classNameInput = useRef();
    const sdateInput = useRef();
    const edateInput = useRef();
    const usernameInput = useRef();

    const [Classes,setClasses] = useContext(userContext)

    async function register() {
      const classes = {
      
        classid: classIdInput.current.value,
        cname: classNameInput.current.value,
        sdate: sdateInput.current.value,
        edate: edateInput.current.value,
        username: usernameInput.current.value
      };
  
      try {
        const response = await axios.post(`${url}/classes/register`, classes);
        console.log(response.data);
          //navigate("/challenges");
    } catch (error) {
        console.error(error.response.data);
    }
    
    }
    return ( 
      <>
        <center>
        <nav className="userNavBar">
        <h1> Welcome to Admin page </h1>
        </nav>
      <TextField id="outlined-basicC" label="ClassID" variant="outlined" inputRef={classIdInput}/>
      <br></br>
      <TextField id="outlined-basicCO" label="Course Name" variant="outlined" inputRef={classNameInput}/>
      <br></br>
      <TextField id="outlined-basicS" type="date" label="Start Date" variant="outlined" inputRef={sdateInput} InputLabelProps={{ shrink: true}}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicE" type="date" label="End Date" variant="outlined" inputRef={edateInput} InputLabelProps={{ shrink: true}}/>
      <br></br>
      <br></br>
      <TextField id="outlined-basicU" label="username" variant="outlined" inputRef={usernameInput}/>
      <br></br>
      <br></br>
      <Button variant='contained' onClick={register}>Create</Button>
      <Button variant='contained' onClick={() => navigate("/login")}>Back</Button>
      <br></br>
      </center>
      </>

     );
}
 
export default ClassesRegister;