import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React, { createRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";

const Register = () => {
    const [showPassword, setShowPassword] = React.useState({
        pass1: false,
        pass2: false
    });
    const usernameRef = createRef();
    const passwordRef = createRef();

    const handleClickShowPassword = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field]
        })
    };
    const onClick = useCallback(() => {

    }, [])
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="relative w-full h-screen  color2" >
            <Card ClassName={"absolute  rounded-lg color3 shadow-md shadow-gray-700"} Title={"Register"} height="70%">
                <div className=" items-center h-full p-16 " style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "space-around" }} >

                    <TextField
                        ref={usernameRef}
                        label="Username"
                        variant="outlined"
                        className="w-full"
                        size="small"
                    />

                    <div className="flex w-full relative">

                        <TextField
                            ref={passwordRef}
                            label="Password"
                            variant="outlined"
                            className="w-full"
                            size="small"
                            type={showPassword.pass1 ? "text" : "password"}
                        >

                        </TextField>
                        <IconButton
                            className="absolute"
                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword("pass1")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword.pass1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>

                    <div className="flex w-full">

                        <TextField
                            ref={passwordRef}
                            label="Password"
                            variant="outlined"
                            className="w-full"
                            size="small"
                            type={showPassword.pass2 ? "text" : "password"}
                        >

                        </TextField>
                        <IconButton

                            aria-label="toggle password visibility"
                            onClick={() => handleClickShowPassword("pass2")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword.pass2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>
                    <Link to="/" className="w-full h-8 mb-16" >
                        <Button
                            style={{ backgroundColor: "#9ba5c9", marginBottom: "1rem" }}
                            variant="contained" className="w-full h-16" onClick={onClick} >Register</Button>
                    </Link>
                </div>
            </Card>
        </div >
    )
}
export default Register