import React from 'react';

const Magnet = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        left: '50px',
        top: '50%',
        transform: 'translateY(-50%)',
      }}
    >
      <img
        src="https://via.placeholder.com/100x100?text=Magnet"
        alt="Magnet"
      />
    </div>
  );
});

export default Magnet;
