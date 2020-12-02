import React from 'react';
import { Form, Input, Field, Button, Header, Message } from 'semantic-ui-react';
import './login.css';

export function Login(props) {

    return (
        <div className="login">
            <img className="n8_icon" src={props.icon} alt="N8"></img>
            <br />
            <span>{props.loginMessage}</span>
            <form className="admin_form" onSubmit={props.onSubmit}>
                <p>
                    <label htmlFor="user_email">Email</label>
                    <br/>
                    <input 
                        className="user_email" 
                        type="text" 
                        name="email" 
                        value={props.inputs.email} 
                        size="20" 
                        autoCapitalize="off" 
                        onChange={props.onChange} 
                        required 
                    />
                    <br/>
                    <span>{props.emailError}</span>
                </p>
                <p>
                    <label htmlFor="user_password">Password</label>
                    <br/>
                    <input 
                        className="user_password" 
                        type="password" 
                        name="password" 
                        value={props.inputs.password} 
                        size="20" 
                        onChange={props.onChange} 
                        required 
                    />
                    <br/>
                    <span>{props.passError}</span>
                </p>
                <p>
                    <input 
                        className="submit_button" 
                        type="submit" 
                        value="Enter" 
                    />
                </p>
                <a href="/admin/forgot-password">Forgot password?</a>
            </form>
            <a href="/">← Back to N8</a>
        </div>
    );
    // return (
    //     <Form className="login" onSubmit={props.onSubmit} error={props.error}>
    //         <Header as="h1">Login</Header>
    //         <Message content={props.loginMessage} />
    //         <Form.Input
    //             label="Email" 
    //             type="text"
    //             name="email" 
    //             value={props.inputs.email} 
    //             onChange={props.onChange}
    //             placeholder={props.emailError} error
    //             // error={{
    //             //     content: props.emailError,
    //             //     pointing: 'below'
    //             // }}
    //             required
    //         />
    //        <Form.Input
    //             label="Password" 
    //             type="password" 
    //             name="password" 
    //             value={props.inputs.password} 
    //             onChange={props.onChange}
    //             error={{
    //                 content: props.passError,
    //                 pointing: 'below'
    //             }}
    //             required
    //        />
    //        <Input type="submit" value="Enter"/>
    //     </Form>
    // );

}