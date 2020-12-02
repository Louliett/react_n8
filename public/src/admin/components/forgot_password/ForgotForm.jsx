import React from 'react';
import './forgot-form.css';

export function ForgotForm(props) {

    return (
        <div className="forgot_password">
            <img className="n8_icon" src={props.icon} alt="N8"></img>
            <h3>Forgot Password</h3>
            <br />
            <div className="message_box">
                {props.message}
            </div>
            <form className="forgot_password_form" onSubmit={props.onSubmit}>
                <p>
                    <label htmlFor="user_email">Email</label>
                    <br/>
                    <input 
                        className="user_email" 
                        type="text" 
                        name="email" 
                        value={props.email} 
                        size="20" 
                        autoCapitalize="off" 
                        onChange={props.onChange} 
                        required 
                    />
                    <br/>
                    <span>{props.emailError}</span>
                </p>
                <p>
                    <input 
                        className="submit_button" 
                        type="submit" 
                        value="Reset Password" 
                    />
                </p>
            </form>
            <a href="/admin">← Back to login</a>
        </div>
    );
}