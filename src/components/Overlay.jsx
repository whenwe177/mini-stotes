import React from 'react'

function Overlay(props) {
    const { showClass, onClick } = props;
    const classList = `overlay ${showClass}`
  return (
    <div className={ classList } onClick={ onClick }></div>
  )
}

export default Overlay