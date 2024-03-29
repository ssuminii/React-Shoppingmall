import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <div className='login-container'>
      <Form onSubmit={(event)=> loginUser(event)} className='login-form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='로그인 상태 유지' />
        </Form.Group>
        <div className='login-plus'>
          <Button variant='light' type='submit'>
            로그인
          </Button>
          <Button variant='dark' type='submit'>
            회원가입 하기
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login