import React from 'react'

const Times = () => {
    const morningTimes = ["8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30"]
    const afternoonTimes = ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"]
    const eveningTimes = ["5:00", "5:30", "6:00", "6:30", "7:00",]



    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "" }}>
                <div className="__title">
                    <span className="ng-scope">Morning</span>
                </div>
                <div className="__title">
                    <span className="ng-scope">Afternoon</span>
                </div>
                <div className="__title">
                    <span className="ng-scope">Evening</span>
                </div>
            </div>
            <hr />
            <table className="table"><div className="col-lg-4 col-xs-4 is-table__cell">
            </div>
                <tbody style={{ display: "flex", justifyContent: "space-around" }}>
                    <tr style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                        {morningTimes.map((time, idx) => {
                            return (<td><button className="btn btn-outline-info btn-lg" >{morningTimes[idx]}</button></td>)
                        })}
                    </tr>
                    <tr style={{ display: "flex", flexDirection: "column" }}>
                        {afternoonTimes.map((time, idx) => {
                            return (<td><button className="btn btn-outline-secondary btn-lg" disabled>{afternoonTimes[idx]}</button></td>)
                        })}
                    </tr>
                    <tr style={{ display: "flex", flexDirection: "column" }}>
                        {eveningTimes.map((time, idx) => {
                            return (<td><button className="btn btn-outline-info btn-lg">{eveningTimes[idx]}</button></td>)
                        })}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Times
