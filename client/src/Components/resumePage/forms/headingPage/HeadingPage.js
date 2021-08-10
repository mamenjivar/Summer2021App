import React, { useState } from 'react';
import './HeadingPage.css'
import { IoIosAddCircleOutline } from 'react-icons/io';

const Form = (props) => {
    // Props being brought in
    const { data, handleChange, next } = props;
    // Controls button being disabled 
    const [continueMe, setContinue] = useState(false)
    // Validation design
        // First Input: fist name
    const [styleState, setStyleState] = useState("label-default");
    const [styleStateBottom, setStyleStateBottom] = useState("bottom-border-default");
        // Second Input: last name
    const [styleStateTwo, setStyleStateTwo] = useState("label-default");
    const [styleStateBottomTwo, setStyleStateBottomTwo] = useState("bottom-border-default");
        // Third Input: email
    const [styleStateThree, setStyleStateThree] = useState("label-default");
    const [styleStateBottomThree, setStyleStateBottomThree] = useState("bottom-border-default");
        // Fourth Input: phone number
    const [styleStateFour, setStyleStateFour] = useState("label-default");
    const [styleStateBottomFour, setStyleStateBottomFour] = useState("bottom-border-default");
    // Validation
    // Return true: if is it invalid
    // Return false: if it is valid 
    const firstNameValidation = () => {
        if (!(/^[a-zA-Z]*$/.test(data.firstName)) || data.firstName === '') {
            setStyleState("label-invalid")
            setStyleStateBottom("bottom-border-invalid")
            return true 
        }
        else if(data.firstName === ''){

        }
        setStyleState("label-valid")
        setStyleStateBottom("bottom-border-valid")
        return false
    }
    const lastNameValidation = () => {
        if (!(/^[a-zA-Z]*$/.test(data.lastName)) || data.lastName === '') {
            setStyleStateTwo("label-invalid")
            setStyleStateBottomTwo("bottom-border-invalid")
            return true 
        }
        setStyleStateTwo("label-valid")
        setStyleStateBottomTwo("bottom-border-valid")
        return false
    }
    const usersEmailValidation = () => {
        if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.usersEmail))) {
            setStyleStateThree("label-invalid")
            setStyleStateBottomThree("bottom-border-invalid")
            return true 
        }
        setStyleStateThree("label-valid")
        setStyleStateBottomThree("bottom-border-valid")
        return false
    }
    const phoneNumberValidation = () => {
        if (!(/^\d{10}$/.test(data.phoneNumber))) {
            setStyleStateFour("label-invalid")
            setStyleStateBottomFour("bottom-border-invalid")
            return true 
        }
        setStyleStateFour("label-valid")
        setStyleStateBottomFour("bottom-border-valid")
        return false
    }
    // Add a link  On Click Show link
        // First Link
    const [showOption, setShow] = useState()
    const showLink = (event) => {
        event.preventDefault();
        setShow(true)
    }   
        // Second Link
    const [showOptionTwo, setShowTwo] = useState()
    const showLinkTwo = (event) => {
        event.preventDefault();
        setShowTwo(true)
    }
    // Calls all validation to check if satisfied 
    function checkAll (){
        let setFormStatus; 
        const validationFuncs = [firstNameValidation(), lastNameValidation(), usersEmailValidation(), phoneNumberValidation()]
        for (let i = 0; i < validationFuncs.length; i++) {
            console.log(validationFuncs[i])
            // Return true = invalid 
            if(validationFuncs[i] === true){
                // Form is not complete or invalid input(s)
                setFormStatus = false
            }
        }
        return setFormStatus
    }

    function check (event){
        if(checkAll()===false){
            setContinue(false)
            event.preventDefault();
        }
        else{
            setContinue(true)
            next()
        }
    }

    return (
        <div className="main-heading-form-container">
            <form >
                {/* Top row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        {/* First Name */}
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleState}>First Name</span>
                                <input 
                                    type="text"
                                    name="firstName"
                                    placeholder="e.g. John"
                                    className="input-area" 
                                    value={data.firstName}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottom}></div>
                            </div>
                        </div>
                        {/* Last Name */}
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateTwo}>Last Name</span>
                                <input 
                                    type="text"
                                    name="lastName"
                                    placeholder="e.g. Doe"
                                    className="input-area" 
                                    value={data.lastName}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomTwo}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Middle row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        {/* Email */}
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateThree}>Email</span>
                                <input 
                                    type="email"
                                    name="usersEmail"
                                    placeholder="MyEmail@gmail.com"
                                    className="input-area" 
                                    value={data.usersEmail}
                                    onChange={handleChange}
                                />
                                <div className = {styleStateBottomThree}></div>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="column-item">
                            <div className="input-container">
                                <span className = {styleStateFour}>Phone Number</span>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="e.g. 1234567890"
                                    className="input-area" 
                                    value={data.phoneNumber}
                                    onChange={handleChange} 
                                />
                                <div className = {styleStateBottomFour}></div>
                            </div>
                        </div>
                    </div>
                </div>  
                {/* Add link row */}
                <div className="main-heading-form-item">
                    <div className="column-container">
                        {/* First Link */}
                        <div className="column-item">
                            <div className="input-container">
                                <button 
                                    onClick={showLink} 
                                    className = {showOption ? 'disableButton': 'showButton'}>
                                    <IoIosAddCircleOutline/> Add Link
                                </button>
                                <div className = {showOption ? 'showLinkOne': 'disableInput'}>
                                    <span className = 'label-default'>Link (optional)</span>
                                    <input
                                            type="tel"
                                            name="linkOne"
                                            placeholder="e.g. LinkedIn"
                                            className = 'input-area'
                                            value={data.linkOne}
                                            onChange={handleChange} 
                                        />
                                    <div className = 'bottom-border-default'></div>
                                </div>
                            </div>
                        </div>
                        {/* Second link */}
                        <div className="column-item">
                            <div className="input-container">
                                <button 
                                    onClick={showLinkTwo} 
                                    className = {showOptionTwo ? 'disableButton': 'showButton'}>
                                    <IoIosAddCircleOutline/> Add Link
                                </button>
                                <div className = {showOptionTwo ? 'showLinkOne': 'disableInput'}>
                                    <span className = 'label-default'>Link (optional)</span>
                                    <input
                                            type="tel"
                                            name="linkOneTwo"
                                            placeholder="e.g. GitHub"
                                            className = 'input-area'
                                            value={data.linkOneTwo}
                                            onChange={handleChange} 
                                        />
                                    <div className = 'bottom-border-default'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* Button Row */}
                <div className="main-heading-form-item">
                    <div className="button-container">
                        <div className="button-item">
                        </div>
                        {/* Next button */}
                        <div className="button-item">
                            <div className = "right-button-container">
                                <button  className = "button-type-next" onClick={check} disabled={continueMe}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Form;