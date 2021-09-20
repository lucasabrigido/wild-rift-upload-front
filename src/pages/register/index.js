/* eslint-disable react/jsx-no-target-blank */
import React, { useState, memo } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CakeIcon from '@mui/icons-material/Cake';

import Form from '../../components/form-template';
import Input from '../../components/input';
import Button, { buttonTypes } from '../../components/loading-button';
import Select from '../../components/select';

import './styles.scss';
// usuario, email, idade, senha, confirmar senha, termo de uso, sexo
const initialValues = {
    nickname: '',
    email: '',
    birthdate: '',
    password: '',
    confirmPassword: '',
    acceptedTermsUsage: false,
    sexo: '',
    city: '',
}

const items = [
    {
        label: 'Masculino',
        value: 'male',
    },
    {
        label: 'Feminino',
        value: 'female'
    },
    {
        label: 'Outros',
        value: 'others'
    }
];

const MyForm = memo(({onClick}) => {
    const [infos, setInfos] = useState(initialValues);
    const [extras, setExtras] = useState({ confirmPassword: {hidden: true, error: false}, password: {hidden: true} })

    const onChange = (key) => ({target}) => {
        let newState = {
            ...infos,
            [key]: target.value,
        };
        if(['password', 'confirmPassword'].includes(key)) {
            setExtras(state => ({
                ...state,
                confirmPassword: {
                    ...state.confirmPassword,
                    error: newState.confirmPassword ? newState.confirmPassword !== newState.password : false
                },
            }));
        }
        setInfos(newState);
    };

    const changeVisibility = (key) => () => {
        setExtras(state => ({...state, [key]: {...state[key], hidden: !state[key].hidden}}));
    };

    return (
        <Form className='form-register' >
            <div className='container-title' >
                <h1>Registrar</h1>
            </div>

            <div className='container-register-actions' >
                <Input
                    defaultValue={infos.email}
                    label='email'
                    onChange={onChange('email')}
                    IconLeft={EmailIcon}
                    type='email'
                />
                <div className='group-two' >
                    <Input
                        defaultValue={infos.nickname}
                        label='nickname'
                        onChange={onChange('nickname')}
                        IconLeft={SupervisedUserCircleIcon}
                        className='input-group-two'
                    />
                    <Input
                        defaultValue={infos.city}
                        label='cidade'
                        onChange={onChange('city')}
                        IconLeft={LocationCityIcon}
                        className='input-group-two'
                    />
                </div>
                <div className='group-two' >
                    <Select
                        items={items}
                        value={infos.sexo}
                        onChange={onChange('sexo')}
                        label='sexo'
                        className='select-sexo-register'
                    />
                    <Input
                        defaultValue={infos.birthdate}
                        label='data de nascimento'
                        onChange={onChange('birthdate')}
                        IconLeft={CakeIcon}
                        className='input-group-two'
                        type='date'
                    />
                </div>
                <div className='group-two' >
                    <Input
                        defaultValue={infos.password}
                        label='senha'
                        onChange={onChange('password')}
                        IconRight={extras.password.hidden ? VisibilityOffIcon : VisibilityIcon}
                        onClickIconRight={changeVisibility('password')}
                        className='input-group-two password'
                        type={extras.password.hidden ? 'password' : 'text'}
                    />
                    <Input
                        defaultValue={infos.confirmPassword}
                        label='confirmação de senha'
                        error={extras.confirmPassword.error}
                        onChange={onChange('confirmPassword')}
                        IconRight={extras.confirmPassword.hidden ? VisibilityOffIcon : VisibilityIcon}
                        onClickIconRight={changeVisibility('confirmPassword')}
                        className='input-group-two password'
                        type={extras.confirmPassword.hidden ? 'password' : 'text'}
                    />
                </div>
                <div className='container-button-on-register' >
                    <div className='container-terms-button' >
                        <div className='container-checkbox' >
                            <input
                                type='checkbox'
                                onChange={({target})=> setInfos(state => ({...state, acceptedTermsUsage: target.checked}))}
                            />
                            <span>
                                ao enviar seus dados você CONCORDA com nossos 
                                <a
                                    target="_blank"
                                    href='https://dev-wild-rift-resources-file-bucket.s3.amazonaws.com/resources/termo-de-uso-v1.pdf'
                                >
                                    termos de uso
                                </a>
                            </span>
                        </div>
                        <Button
                            text='registrar'
                            className='button-on-register'
                            type={buttonTypes.default}
                            onClick={onClick}
                        />
                    </div>
                </div>
            </div>
        </Form>
    )
});

const Register = () => {

    const onClick = (infos) => {
        console.log('infos');
    };

    return (
        <div className='container-login' >
            <MyForm/>
        </div>
    )
};

export default memo(Register);