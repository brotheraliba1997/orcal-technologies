import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center p-[14px]">
      <div
        className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;