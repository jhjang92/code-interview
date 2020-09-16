import React from 'react';

const Button = ({ FontColor, onClick, Text }) => {
  const buttonStyle = {
    background: FontColor,
  };
  if (FontColor && onClick) {
    return (
      <button style={buttonStyle} onClick={onClick}>
        {Text}
      </button>
    );
  }
  return <button>{Text}</button>;
};

export default Button;
