import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap'


const NewForm = () => {
    const timeSelect = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"]

    const timeSelector = timeSelect.map((time, idx) => { return (<option key={idx} value={time}> {time}</option>) })
    // Above needs logic to eliminate times before previously selected time.


    const [staffName, setStaffName] = useState("")
    const [staffEmail, setStaffEmail] = useState("")
    const [staffAboutMe, setStaffAboutMe] = useState("")
    const [timeIn, setTimeIn] = useState("")
    const [timeOutLunch, setTimeOutLunch] = useState("")
    const [timeInLunch, setTimeInLunch] = useState("")
    const [timeOut, setTimeOut] = useState("")

    return (
        <div className="container" style={{ display: "flex", flexDirection: 'column', maxWidth: 500 }} >
            <h1>New Therapist Form</h1>
            <p>{JSON.stringify(staffName)} , {JSON.stringify(staffEmail)} , {JSON.stringify(staffAboutMe)}</p>
            <p> {JSON.stringify(timeIn)} , {JSON.stringify(timeOutLunch)}, {JSON.stringify(timeInLunch)}, {JSON.stringify(timeOut)}  </p>
            <Form style={{ display: "flex", flexDirection: 'column', width: '100%' }} >
                <div className="mb-3">
                    <label className="form-label"> Name: </label>
                    <input className="form-control" id="name" onChange={(e) => setStaffName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label"> Email: </label>
                    <input type="email" className="form-control" id="email" onChange={(e) => setStaffEmail(e.target.value)} />
                </div>
                {/* Fix this text area */}
                <div className="mb-3">
                    <label className="form-label" style={{ display: "flex" }}> About Me:  </label>
                    <textarea rows="5" placeholder="Fix Me!" onChange={(e) => setStaffAboutMe(e.target.value)} />
                </div>
                <div style={{ display: "flex" }}>
                    <div className="mb-3" >
                        <label className="form-label"> Time In: </label>
                        <select id="selectTimeIn" onChange={(e) => setTimeIn(e.target.value)}>
                            <option value="" hidden> Time In: </option>
                            {timeSelector}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Time Out (Lunch): </label>
                        <select id="selectTimeOutLunch" onChange={(e) => setTimeOutLunch(e.target.value)}>
                            <option value="" hidden> Lunch Out: </option>
                            {timeSelector}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Time In (Lunch): </label>
                        <select id="selectTimeInLunch" onChange={(e) => setTimeInLunch(e.target.value)}>
                            <option value="" hidden> Lunch In: </option>
                            {timeSelector}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Time Out: </label>
                        <select id="selectTimeOut" onChange={(e) => setTimeOut(e.target.value)}>
                            <option value="" hidden> Time Out: </option>
                            {timeSelector}
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </div>
    )
}

export default NewForm
