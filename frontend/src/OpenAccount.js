import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return ( 
        <div className="container p-5" >
      <div className="row text-center">
        <h1 className="mt-5">Open Account in EquiTrade</h1>
        <p>
            Join millions of investors and traders who trust EquiTrade for their trading and investment needs.
        </p>
        <button 
            className="p-3 btn btn-primary fs-5 mb-5" 
            style={{width: "20%", margin: "0 auto"}}
            onClick={handleSignUpClick}
        >
            Sign Up Now
        </button>
      </div>
    </div>
     );
}

export default OpenAccount;