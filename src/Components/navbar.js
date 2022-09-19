import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div className="color2 fixed  container ml-24 mt-6 h-12 w-screen flex items-center justify-between p-8 text-white">
            <Link className="font-Bold " style={{ fontSize: "1.5rem" }}>
                Home
            </Link>
            <div className="flex justify-between w-2/12 font-semibold text-white">
                <Link>
                    About
                </Link>
                <Link>
                    Project
                </Link>
                <Link to="/login">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Navbar