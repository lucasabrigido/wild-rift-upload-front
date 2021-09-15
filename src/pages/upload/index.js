import React, { useState } from "react";
import Axios from 'axios';

import {baseUrl, urlPaths} from '../../utils/constants';
import Upload from '../../components/upload';
import FormUpload from '../../components/form';

import './styles.scss';

const initialState = {
  name: '',
  about: '',
  email: '',
  birthdate: '',
  acceptTerms: false,
}

export default function PageUpload() {
  const [dataForm, setData] = useState(initialState);
  const [fileNames, setFileNames] = useState([]);
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDrop = acceptedFiles => {
    setFileNames(state => [...state, ...acceptedFiles.map(file => file.name)]);
    setAttachments(state => [...state, ...acceptedFiles]);
  }
  const onChangeData = (value, key) => {
    setData(state => ({...state, [key]: value}));
  }

  const save = async (e) => {
    e.preventDefault();
    setLoading(true);
    let files = [];
    for (const file of attachments) {
        await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onabort = () => reject();
          reader.onerror = () => reject();
          reader.onload = async () => {
            const binaryStr = reader.result
            const {data} = await Axios.post(baseUrl + urlPaths.upload, {
              mime: file.type,
              name: file.name.replaceAll(' ', '-'),
            });
            await Axios.put(data.put, binaryStr, {headers: {'Content-Type': file.type}});
            files.push({
              name: file.name,
              mime: file.type,
              url: data.get,
              status: 'CREATED',
            });
            resolve();
          }
          reader.readAsArrayBuffer(file)
        });
    }
    try {
      await Axios.post(baseUrl + urlPaths.uploadSave, {
        photos: files,
        ...dataForm,
        birthdate: new Date(dataForm.birthdate).toISOString(),
      });
    } catch(err){
      console.log(err);
      console.log(err.message);
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='form-upload' >
      <Upload onChange={handleDrop} fileNames={fileNames} />
      <FormUpload onClick={save} hasAttachments={attachments.length > 0} loading={loading} data={dataForm} onChange={onChangeData} />
    </div>
  );
}
