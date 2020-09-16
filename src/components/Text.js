import React from 'react';

const Text = ({ TextColor, Margin, TextTitle }) => {
  return (
    <>
      <div
        style={{
          color: TextColor,
          margin: Margin,
        }}
      >
        {TextTitle}
      </div>
    </>
  );
};

export default Text;
