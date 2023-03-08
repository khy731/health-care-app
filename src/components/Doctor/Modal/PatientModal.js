import React from 'react';

function PatientModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal-header">
              <h2>환자 정보</h2>
              <button className="modal-close" onClick={onClose}>
                X
              </button>
            </div>
            <div className="modal-body">
              <table className="patient-table">
                <thead>
                  <tr>
                    <th>항목</th>
                    <th>내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>이름</td>
                    <td>환자1</td>
                  </tr>
                  <tr>
                    <td>성별</td>
                    <td>여성</td>
                  </tr>
                  <tr>
                    <td>생년월일</td>
                    <td>1998/01/04</td>
                  </tr>
                  <tr>
                    <td>전화번호</td>
                    <td>010-3242-6543</td>
                  </tr>
                  <tr>
                    <td>증상</td>
                    <td>극심한 두통과 기침 및 메스꺼움</td>
                  </tr>
                  <tr>
                    <td>진단</td>
                    <td>독감</td>
                  </tr>
                  <tr>
                    <td>처방</td>
                    <td>두통약 2주치, 타이레놀 등의 진통제</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PatientModal;

