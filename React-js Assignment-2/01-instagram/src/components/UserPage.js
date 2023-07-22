import React, { useState } from 'react';
import instaLogo from '../assests/insta-logo.png';  
import '../components/UserPage.css';  

const UserPage = () => {
    // State to keep track of whether the user wants to sign up or log in
    const [isSignUp, setIsSignUp] = useState(false);

    // Function to toggle between sign up and login views
    const handleToggleView = () => {
        setIsSignUp((prevState) => !prevState);
    };

    return (
        <div className="user-page">
            {/* Instagram logo */}
            <div className="logo">
                <img src={instaLogo} alt="insta-logo" />
            </div>

            {/* Input fields */}
            <div className="input-fields">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                {/* Additional fields for sign up if isSignUp is true */}
                {isSignUp && (
                    <>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </>
                )}

                {/* Button for sign up or login */}
                <button>{isSignUp ? 'Sign Up' : 'Login'}</button>

                {/* Toggle button to switch between sign up and login views */}
                <div className="toggle-button">
                    <p>{isSignUp ? 'Already have an account?' : 'Do not have an account?'}</p>
                    <button onClick={handleToggleView}>
                        {isSignUp ? 'Login' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
