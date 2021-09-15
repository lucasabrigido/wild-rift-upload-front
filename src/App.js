import React from 'react';
import Upload from './pages/upload';
import wild from './assets/images/wild.jpg';

import './styles.scss';

function App() {
  return (
    <div className='container-all'>
      <img src={wild} className='image-bg' alt='wild' />
      <Upload/>
    </div>
  );
}

export default App;
