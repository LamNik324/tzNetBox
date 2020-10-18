import React from 'react';
import '../styles/loader.css';

export default function Loader() {
  return (
    <div className='d-flex justify-content-center'>
    <div className="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  </div>
  )
}


