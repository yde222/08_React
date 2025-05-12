"use client";

import React, { useState } from "react";

export default function MultiInputControl() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
                ...formData,
                [name]: value,
            });
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: ""
        });
    };


    return (    
    <div>
        <h2>다중 입력값 제어</h2>
        <input type ="text" name={formData.firstName} onChange={handleChange}placeholder="이름을 입력하세요" />
        <input type ="text" name={formData.lastName} onChange={handleChange}placeholder="성를 입력하세요" />
    
    <hr />
        <p>입력한 이름: {formData.firstName}</p>
        <p>입력한 성: {formData.lastName}</p>
    
        <button onClick = {handleChange}>입력초기화</button>
    </div>
    
    );      
}