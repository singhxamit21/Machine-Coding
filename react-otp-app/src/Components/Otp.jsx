import React, { useEffect, useRef, useState } from 'react'

const Otp = ({ otpLength = 6 }) => {
    const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""))

    const ref = useRef([]);

    useEffect(()=>{
        ref.current["0"].focus();
    },[])

    const handleKeyDown = (e, index) => {
        const key = e.key;
        const copyOtpFields = [...otpFields];

        if(key === "ArrowLeft"){
            if (index > 0) {
                ref.current[index - 1].focus();
            }
            return;
        }

        if(key === "ArrowRight"){
            if (index + 1 < otpFields.length) {
                ref.current[index + 1].focus();
            }
            return;
        }

        if (key === "Backspace") {
            copyOtpFields[index] = "";
            setOtpFields(copyOtpFields)
            if (index > 0) {
                ref.current[index - 1].focus();
            }
            return;
        }

        if (isNaN(key)) {
            return;
        }

        copyOtpFields[index] = key;
        //To Handle Last OTP box
        if (index + 1 < otpFields.length) {
            ref.current[index + 1].focus();
        }

        setOtpFields(copyOtpFields)
    }

    return (
        <div className='container'>
            {otpFields.map((value, index) => {
                return <input ref={(currentInput) => ref.current[index] = currentInput} key={index} type='text' value={value} onKeyDown={(e) => handleKeyDown(e, index)} />
            })}
        </div>
    )
}

export default Otp