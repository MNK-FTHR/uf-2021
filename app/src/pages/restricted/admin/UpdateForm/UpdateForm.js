import React, { useState, useEffect } from 'react';
import Axios from "axios";

function UpdateForm(props) {
    Axios.defaults.withCredentials = true;
    const [client, setClient] = useState();
  
    return (
        <div>
            update {props.client.prenom}
        </div>
    )
}

export default UpdateForm
