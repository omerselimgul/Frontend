import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CustomSelect = ({ dataSoruce, ValuePath, Name, ...props }) => {

    return (
        <>
            <FormControl size="small" variant="standard" sx={{ m: 1, minWidth: 240 }}  >
                <InputLabel style={{ color: "black" }} >{props.label}</InputLabel>
                <Select

                    id="deneme"
                    // input={<BootstrapInput />}
                    style={{ color: "black" }}
                    {...props}
                >
                    {
                        dataSoruce && dataSoruce.map(x => {
                            return (
                                <MenuItem style={{ color: "black" }} value={x[ValuePath]}>
                                    {x[Name]}
                                </MenuItem>
                            )
                        })
                    }

                </Select>
            </FormControl>
        </>

    )
}
export default CustomSelect