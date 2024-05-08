import React from 'react'
import Header from '../../components/Header';
import Intro from './Intro';

export default function index() {
  return (
    <div className='bg-primary px-40'>
      <Header />
      <Intro />
    </div>
  )
}
