import React from 'react'
import PropTypes from 'prop-types';
import './Title.css'

export const Title = ({title, subtitle}) => {
  return (
    <div className='titles'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  };
