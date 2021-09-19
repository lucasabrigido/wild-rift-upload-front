import React, { useState, memo } from 'react';

import Form from '../../components/form-template';
import Input from '../../components/input';
import Button, { buttonTypes } from '../../components/loading-button';

import './styles.scss';

const MyForm = memo(({onClick}) => {
    const [infos, setInfos] = useState({email: '', password: ''});

    const onChange = (key) => ({target}) => {
        setInfos(state => ({...state, [key]: target.value}));
    };

    return (
        <Form className='form-login' >
            <div className='container-title' >
                <h1>Login</h1>
            </div>

            <div className='container-login-actions' >
                <Input defaultValue={infos.email} label='email' onChange={onChange('email')}/>
                <Input defaultValue={infos.password} label='senha' onChange={onChange('password')}/>
                <div>
                    <Button
                        text='login'
                        className='button-login'
                        type={buttonTypes.default}
                        onClick={onClick}
                    />
                    <div className='container-last-actions' >
                        <div className='container-checkbox' >
                            <input type='checkbox'/>
                            <span>Lembrar senha</span>
                        </div>
                        <Button
                            className='forgot-password'
                            text='esqueceu a senha?'
                            type={buttonTypes.link}
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div>


            <div className='container-register' >
                <span>
                    Não é um membro?
                </span>
                    <Button
                        className='button-register'
                        text='se registre aqui'
                        type={buttonTypes.link}
                        onClick={onClick}
                    />
            </div>
        </Form>
    )
});

const Login = () => {

    const onClick = (infos) => {
        console.log('infos');
    };

    return (
        <div className='container-login' >
            <MyForm/>
        </div>
    )
};

export default memo(Login);