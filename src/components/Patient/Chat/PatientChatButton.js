import React from 'react';

const PatientChatButton = () => {
  const handleButtonClick = async () => {
    try {
      const response = await fetch('API 주소 작성'); // API 주소 작성
      if (!response.ok) {
        throw new Error('API 요청이 실패하였습니다.');
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('text/html')) {
        throw new TypeError('API 반환값이 html이 아닙니다.');
      }
      const html = await response.text();
      if (html.trim() !== '') {
        window.open('', '_blank').document.write(html);
      }
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

export default PatientChatButton;
