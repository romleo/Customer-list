import React from 'react';
// import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ListButton() {
    let history = useHistory();

    function handleClick() {
        history.push("/List");
    }

    return (
        <button type="button" onClick={handleClick}>
            Go to Users List
       </button>
    );
}
export default ListButton;