import React from "react";
import LoadingImage from '../../asset/images/loading.gif';

function Spinner(){
    return(
        <div className="d-flex align-items-center justify-content-center">
            <img className="loading-img" src={LoadingImage} alt="" />
        </div>
    )
}

export default Spinner;