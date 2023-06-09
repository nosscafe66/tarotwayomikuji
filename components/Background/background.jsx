import React from 'react';

const Background = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(#000000, #120a8f)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%)',
          filter: 'blur(10px)',
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '5em',
          fontWeight: 'bold',
          color: 'rgba(255, 255, 25, 0.7)', // 半透明の白色に変更
          zIndex: 0,
          mixBlendMode: 'overlay' // ブレンドモードをオーバーレイに変更
        }}
      >
        <span>Kashiopia Project</span>
      </div>
    </div>
  );
};

export default Background;
