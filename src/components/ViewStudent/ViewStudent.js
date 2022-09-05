import React from "react";
function ViewStudent({ data }) {
    const {studentName,
        java,
        fe,
        react,
        aveScore} = data;
    return (
        <div className="d-flex flex-column align-items-center">
            <h3>Detail</h3>
            <div className="d-flex flex-column align-items-center w-100">
                <div className="w-100 bg-primary text-center text-white py-3">{studentName}</div>
                <div className="d-flex justify-content-around w-100 border border-primary py-2">
                    <div className="d-flex flex-column align-items-center w-25">
                        <h6>Java</h6>
                        <div className="bg-success text-white w-100 py-3 text-center">{java}</div>
                    </div>
                    <div className="d-flex flex-column align-items-center w-25">
                        <h6>FE</h6>
                        <div className="bg-success text-white w-100 py-3 text-center">{fe}</div>
                    </div>
                    <div className="d-flex flex-column align-items-center w-25">
                        <h6>React</h6>
                        <div className="bg-success text-white w-100 py-3 text-center">{react}</div>
                    </div>
                </div>
                <div className="w-50 bg-primary text-center text-white py-3 my-2">{aveScore}</div>
            </div>
        </div>
    )
}

export default ViewStudent;