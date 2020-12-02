import React from 'react';
import './reset-password.css';

export function ResetPassword(props) {

    return (
        <div className="reset_password">
            <h1>Reset Password</h1>
            <br/>
            <span>{props.resetMessage}</span>
            <form className="reset_form" onSubmit={props.onSubmit}>
                <p>
                    <label htmlFor="new_password">
                        New Password
                    </label>
                    <br/>
                    <input 
                        className="new_password" 
                        type="password" 
                        name="newPassword" 
                        value={props.inputs.new_password} 
                        size="20" 
                        onChange={props.onChange} 
                        required 
                    />
                    <br/>
                    <span>{props.newPassError}</span>
                </p>
                <p>
                    <label htmlFor="confirm_password">
                        Confirm Password
                    </label>
                    <br/>
                    <input 
                        className="confirm_password" 
                        type="password" 
                        name="confirmPassword" 
                        value={props.inputs.password} 
                        size="20" 
                        onChange={props.onChange} 
                        required 
                    />
                    <br/>
                    <span>{props.confPassError}</span>
                </p>
                <p>
                    <input 
                        className="submit_button" 
                        type="submit" 
                        value="Confirm" 
                    />
                </p>
            </form>
        </div>
    );
}