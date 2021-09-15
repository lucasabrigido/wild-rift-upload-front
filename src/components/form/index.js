/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import LoadingButton from '../loading-button';
import './styles.scss';

const FormUpload = ({data, onClick, onChange, loading, hasAttachments}) => {
    let disabled = !data.name || !data.birthdate || !data.email || !data.acceptTerms || !hasAttachments;
    return (
        <form>
            <div className='container-form'>
                <h1>
                    ENVIE SEUS COSPLAY E GARANTA DIREITO A VARIAS SKINS
                </h1>
                <input placeholder='nome' value={data.name} type='text' onChange={({target})=>onChange(target.value, 'name')} />
                <input placeholder='data de nascimento' type='date' value={data.birthdate} onChange={({target})=>onChange(target.value, 'birthdate')} />
                <textarea placeholder='sobre' value={data.about} type='text' onChange={({target})=>onChange(target.value, 'about')} />
                <input placeholder='email' type='email' value={data.email} onChange={({target})=>onChange(target.value, 'email')} />
                <div className='container-checkbox' >
                    <input type='checkbox' value={data.acceptTerms} onChange={({target})=>onChange(target.checked, 'acceptTerms')} />
                    <span>ao enviar seus dados você CONCORDA com nossos <a target="_blank" href='https://dev-wild-rift-resources-file-bucket.s3.amazonaws.com/resources/termo-de-uso-v1.pdf'>termos de uso</a> </span>

                </div>
                <LoadingButton
                    text='enviar'
                    className='button-form-upload'
                    onClick={onClick}
                    loading={loading}
                    disabled={disabled}
                    style={{
                        padding: '10px',
                        margin: '5px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        border: 'none',
                        width: '100%',
                        marginBottom: '35px',
                        fontWeight: 'bold',
                        color: '#000',
                        outline: 'none',
                        cursor:  loading || disabled ? 'not-allowed' : 'pointer',
                    }}
                />
            </div>
        </form>
    )
};

export default FormUpload;