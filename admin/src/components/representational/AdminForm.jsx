import React from 'react'
import './admin-form.css'


export function AdminForm(props) {

    return (
        <div className="login">
            <form className="admin_form" onSubmit={props.onSubmit}>
                <p>
                    <label htmlFor="user_email">Email</label>
                    <input className="user_email" type="text" name="email" value={props.inputs.email} size="20" autoCapitalize="off" onChange={props.onChange} required />
                </p>
                <p>
                    <label htmlFor="user_password">Password</label>
                    <input className="user_password" type="password" name="password" value={props.inputs.password} size="20" onChange={props.onChange} required />
                </p>
                <p>
                    <input className="submit_button" type="submit" value="Enter" />
                </p>
            </form>
            <a>Forgot Password?</a>
        </div>
    );
}