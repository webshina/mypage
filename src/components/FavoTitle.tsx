import React from 'react';

type Props = {
  fontSize?: number;
};
const FavoTitle: React.FC<Props> = ({ fontSize = 80 }) => {
  return (
    <>
      <div>
        <div
          className={
            'font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
          }
          style={{ fontSize }}
        >
          Favo
        </div>
        <div className="h-5" />
        <div className="text-black">
          <div className="font-bold text-3xl">育てるNFT</div>
          <div className="my-1 text-md">でスモールビジネスの</div>
          <div className="font-bold text-3xl">初期集客</div>
          <div className="my-1 text-md">を加速する</div>
        </div>
      </div>
    </>
  );
};

export default FavoTitle;
