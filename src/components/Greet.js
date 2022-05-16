import React from "react";

function Greet ({firstName, lastName }) {
    return <h2>Hello {firstName || lastName}!</h2>
}






export default Greet; 