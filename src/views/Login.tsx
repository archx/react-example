import React, { useState } from 'react';
import {connect} from 'react-redux';
import {loginAction, logoutAction} from '../redux/actions';

const Login: React.FC<any> = (props) => {
    const loginAction: (value: any) => void = props.loginAction;
    const [username, setUsername] = useState('');

    const doSubmit = () => {
        console.log('username ->', username);
        loginAction({username})
        props.history.push("/home");
    };

    return (
        <div className="login">
            <h1>登录</h1>
            <input name="username" onChange={(e) => setUsername(e.target.value)} />
            <br></br>
            <button onClick={doSubmit}>点击登录</button>
        </div>
    );
}

export default connect(null, {loginAction, logoutAction})(Login)