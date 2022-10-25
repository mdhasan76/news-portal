import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../layout/AuthProvider';

const Register = () => {
    const [errMsg, setErrMsg] = useState('')
    const { createNewUser, userUpdate } = useContext(AuthContext);

    // setErrMsg('')
    const handleNewUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        setErrMsg('')
        createNewUser(email, password)
            .then(res => {
                e.target.reset()
                userUpdate(name, photo)
                    .then(() => alert("name & img Updated "))
                    .catch(err => {
                        setErrMsg(err.message)
                        console.log(err)
                    })

                console.log(res.user)
            })
            .catch(err => {
                setErrMsg(err.message)
                console.log(err)
            })
    }
    return (
        <div>
            <Form onSubmit={handleNewUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Photo</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
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
    );
};

export default Register;
