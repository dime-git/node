import React from 'react';
import { useState } from 'react/cjs/react.development';
import { api } from "../RestAPI/ApiConstants";

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postData() {
        const user = {
            email: email,
            password: password
        }
        fetch(`${api.root}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json().then(result => alert(`Logged in. Token: ` + result.token)))
            .catch(err => alert(err))
    }
    return (
        <form className="mt-5">
            <div className="input-group mb-3">
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="E-mail" id="basic-url" aria-describedby="basic-addon3"></input>
            </div>
            <div className="input-group mb-3">
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" aria-label="Amount (to the nearest dollar)"></input>
            </div>
            <button onClick={postData} type="button" className="btn btn-primary">Sign-In</button>
        </form>
    )
}