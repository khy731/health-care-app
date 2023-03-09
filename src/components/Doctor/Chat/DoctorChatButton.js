import React from 'react';

const DoctorChatButton = () => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('');     // API 주소 작성
      if (!response.ok) {
        throw new Error('API 요청이 실패하였습니다.');
      }
      window.open(response.url, '_blank');
    } catch (error) {
      console.error(error);
      // 에러 메시지를 표시하거나 다른 처리를 수행
    }
  };

  return (
    <button onClick={handleButtonClick}>
      채팅 버튼
    </button>
  );
};

export default DoctorChatButton;
