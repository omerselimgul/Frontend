import React from "react";

const Card = ({ width, height, left, top, textAlign, ClassName, Title, ...props }) => {

    return (
        <div style={{
            width: width, height: height, left: left, top: top, textAlign: textAlign
        }} className={ClassName} >
            <h1 className="font-extrabold mt-6" style={{ fontSize: "1.5rem" }} >{Title} </h1>
            {props.children}
        </div>
    )
}
Card.defaultProps = {
    width: "35%",
    height: "60%",
    left: "30%",
    top: "15%",
    textAlign: "center",

}
export default Card