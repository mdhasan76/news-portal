import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../layout/AuthProvider';

const Login = () => {
    const [errMsg, setErrMsg] = useState('')
    const mota = useContext(AuthContext);
    const { logIn } = mota;

    const handleLogIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        setErrMsg('')
        logIn(email, password)
            .then(res => {
                e.target.reset()
                console.log(res.user)

            })
            .catch(err => {
                setErrMsg(err.message)
            })
    }

    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {
                    errMsg && <h6 className='text-danger'>{errMsg}</h6>
                }
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> <br />
                <Button className='mt-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default Login;