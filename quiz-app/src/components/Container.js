import React, { useState } from 'react';

function Container() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div id="container">
      <h1>TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG III</h1>

      {/* Đánh giá */}
      <div className="star-rating">
        {[5, 4, 3, 2, 1].map((rate) => (
          <React.Fragment key={rate}>
            <input type="radio" name="rate" id={`rate-${rate}`} />
            <label htmlFor={`rate-${rate}`} className="fas fa-star"></label>
          </React.Fragment>
        ))}
      </div>

      {/* Các tùy chọn học */}
      <div className="option">
        <ul className="option-list">
          <li>
            <button className="btn-memo">
              <i className="btn-memo-icon ti-comments">
                <br /> Thẻ ghi nhớ
              </i>
            </button>
          </li>
          <li>
            <button className="btn-study">
              <i className="btn-sutdy-icon ti-write">
                <br /> Học
              </i>
            </button>
          </li>
          <li>
            <button className="btn-exam">
              <i className="btn-exam-icon ti-files">
                <br /> Kiểm tra
              </i>
            </button>
          </li>
          <li>
            <button className="btn-aply">
              <i className="btn-aply-icon ti-layers-alt">
                <br /> Ghép thẻ
              </i>
            </button>
          </li>
        </ul>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-container">
            <button className="js-btn-close" onClick={toggleModal}>
              Đóng
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Container;
