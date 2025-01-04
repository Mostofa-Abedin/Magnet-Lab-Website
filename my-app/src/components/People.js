import React from 'react';

const People = React.forwardRef(({ index }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '80px',
        height: '80px',
        backgroundColor: 'skyblue',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '80px',
        fontWeight: 'bold',
        margin: '20px 0',
      }}
    >
      {`P${index + 1}`}
    </div>
  );
});

export default People;
