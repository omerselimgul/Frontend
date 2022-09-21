import React from "react";
import Navbar from "../../Components/navbar";
import UpperBar from "../../Components/upperBar";

const Home = () => {
    return (
        <div className="Main h-screen" style={{ paddingTop: "2rem" }}>
            <Navbar />
            <div className="mt-20">
                <UpperBar />
            </div>
        </div>
    )
}
export default Home