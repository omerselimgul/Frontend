import { Button, TextField } from "@mui/material";
import React, { createRef, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card";
const LoginPage = () => {
    const usernameRef = createRef();
    const passwordRef = createRef();
    const [errors, setErrors] = useState({
        Username: false,
        Password: false
    })
    const onClick = useCallback(() => {

    }, [])
    const onChangeHandler = (value, field) => {
        if (value === null || value === "") {
            setErrors({ ...errors, [field]: true })
        } else {
            setErrors({ ...errors, [field]: false })
        }
    }
    return (
        <div className="relative w-full h-screen  color2" >
            <Card ClassName={"absolute  rounded-lg color3 shadow-md shadow-gray-700"} Title={"Login"}>
                <div className=" items-center h-full p-16 " style={{ color: "white", display: "flex", flexDirection: "column", justifyContent: "space-around" }} >
                    <TextField
                        ref={usernameRef}   
                        label="Username"
                        variant="outlined"
                        className="w-full"
                        error={errors.Username}
                        size="small"
                        helperText={errors.Username === true ? "Incorrect entry." : null}
                        onChange={(e) => onChangeHandler(e.target.value, "Username")}
                    />
                    <TextField
                        ref={passwordRef}
                        label="Password"
                        variant="outlined"
                        className="w-full"
                        size="small"
                        error={errors.Password}
                        helperText={errors.Password === true ? "Incorrect entry." : null}
                        onChange={(e) => onChangeHandler(e.target.value, "Password")}
                    />
                    <Button
                        style={{ backgroundColor: "#9ba5c9" }}
                        variant="contained" className="w-full h-16" onClick={onClick} >Login</Button>
                    <Link to="/register" className="w-full h-8">
                        <Button
                            style={{ color: "#9ba5c9" }}
                            variant="text" className="w-full h-8">Register</Button>
                    </Link>
                </div>
            </Card>
        </div >

    )
}

export default LoginPage