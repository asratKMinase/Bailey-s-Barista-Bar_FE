import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Image from "../../login.webp";

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
    paddingTop: "100px",
}
export default function UsersLogin() {
    
    const usernameInput = useRef();
    const passwordInput = useRef();
    const [user, setUser] = useContext(userContext);
    const navigate = useNavigate();
    const url = "http://localhost:9008/auth";
    const urlu = "http://localhost:9008";

 

    async function login() {

        const users = {
            username: usernameInput.current.value,
            password: passwordInput.current.value,
        };
        try {
        
            const response = await fetch(`${urlu}/users/findAllUsers`);
            const usersData = await response.json();

            for(let i=0; i< usersData.length; i++){
                console.log(usersData[i].username )
                if(usersData[i].admin === true && usersData[i].username===users.username){
                    navigate("/usersdashboard");
                    console.log("Navigating to Bailey")
                }else {
                    navigate("/baristasignup");
                }
                
            }
        
        } catch (e) {
            console.error(e);
    
        }



        if (users.password === "Guest") {
            alert("You need to reset password");
        } else {
            try {
                const response = await axios.post(`${url}`, users);
                console.log(response.data);
                console.log("Hey this is the user prior ", users);
                setUser({ ...users, username: users.username});
                console.log("This is after we set the user ", users);
                
            } catch (error) {
                console.error(error.response.data);
            }
        }
    }

    return (
        <> 
            <center>
            <Paper style={styles.heroContainer}> 
            <h4 style={styleObj}> Welcome back, please log in below.</h4>
            <div className="login">
            <input  placeholder="Username" label="Username" variant="outlined" ref={usernameInput}></input>
            <br></br>
            <br></br>
            <input id ="usernamePasswordInput" type="password" placeholder="password" label="Username" variant="outlined"  ref={passwordInput}></input>
            <br></br>
            <br></br>
            </div>
            <Button variant='contained'  onClick={login}>Login</Button>
            <Button variant='contained' onClick={() => navigate("/mainnavbar")}>Back</Button>
            </Paper>
            </center>
        </>
    );
}
