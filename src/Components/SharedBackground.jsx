import React from 'react';
import { useTheme } from '@emotion/react';

const SharedBackground = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      className={`w-full h-auto md:h-[100vh] ${
        theme.palette.mode === 'dark'
          ? 'bg-gradient-to-b from-[#141B2D] to-[#00538a]'
          : 'bg-white'
      }`}
    >
      {children}
    </div>
  );
};

export default SharedBackground;