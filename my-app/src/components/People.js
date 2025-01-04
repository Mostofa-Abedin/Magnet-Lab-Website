import React from 'react';
import P1Image from '../Images/P1_bg_removed.png';
import P2Image from '../Images/P2_bg_removed.png';
import P3Image from '../Images/P3_bg_removed.png';
import P4Image from '../Images/P4_bg_removed.png';
import P5Image from '../Images/P5_bg_removed.png';

const People = React.forwardRef(({ index }, ref) => {
  const images = [P1Image, P2Image, P3Image, P4Image, P5Image];

  return (
    <div
      ref={ref}
      style={{
        width: '60px', // Reduced size
        height: '60px', // Reduced size
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 5,
      }}
    >
      <img
        src={images[index]}
        alt={`Person ${index + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain', // Prevents cutting off parts of the image
          borderRadius: '50%', // Ensures circular images
        }}
      />
    </div>
  );
});

export default People;
