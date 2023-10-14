import React, { useState } from 'react';

const Calc = () => {
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState(0);

    const calculateAge = () => {
        const today = new Date();
        const birthdateDate = new Date(birthdate);

        let age = today.getFullYear() - birthdateDate.getFullYear();
        const monthDiff = today.getMonth() - birthdateDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
            age--;
        }

        setAge(age);
    };

    return (
        <>
            <center><div className='Container'>
                <h1 className='heading container_title'>Age Calculator</h1>
                <div className='Container_middle'>
                    <div className='right'>
                        <h4>Enter your Date of Birth</h4>
                        <input className='date' type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)} />
                        <br/>

                        <div className='button_div'>
                            <button className='button-65' onClick={calculateAge}>Calculate Age</button>
                        </div>
                    </div>

                    <div className='Container_middle_para'>
                     <h1>You are <span className='age_heading'>{age > 0 ? ` ${age}` : '?'}</span> Years old</h1>
                    </div>
                </div>
            </div></center>
        </>
    );
};

export default Calc;
