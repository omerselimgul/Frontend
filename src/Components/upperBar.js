import { Button, TextField } from "@mui/material";
import React from "react";
import { backend, frontend } from "../constant/constant";
import CustomSelect from "./select";

const UpperBar = () => {
    const handleChange = () => {

    }
    return (

        <div className="mx-56 rounded-sm  p-24 relative opacity-90 bg-slate-100" >
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "4rem", marginBottom: "4rem", }}>


                <TextField label="Title" variant="standard"
                    style={{ color: "black", width: "20rem", fontWeight: "bold" }}
                />

            </div>

            <div className="flex items-center justify-between">
                <CustomSelect
                    label="Frontend"
                    dataSoruce={frontend}
                    ValuePath={"Value"}
                    Name={"Name"}
                    handleChange={handleChange}
                />
                <CustomSelect
                    label="Backend"
                    dataSoruce={backend}
                    ValuePath={"Value"}
                    Name={"Name"}
                    handleChange={handleChange}
                />

            </div>
            <div className="w-full content-center items-center justify-center flex mt-6 ">
                <TextField
                    style={{ color: "black", width: "20rem" }}
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="What you want ?"
                    variant="standard"
                />
            </div>
            <div className="absolute right-12 mt-8">
                <Button variant="outlined" style={{ color: "black", borderColor: "black"}}>Send us</Button>
            </div>
        </div>

    )
}
export default UpperBar