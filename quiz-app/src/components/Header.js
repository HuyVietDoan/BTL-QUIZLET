import React from 'react';

function Header() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div id="header">
      <div className="nav">
        <div className="nav-btn">
          <div className="nav-btn-list">
            <button className="btn-list js-btn_list">
              <i className="list-icon ti-list"></i>
            </button>
          </div>
          <div className="nav-btn-reload">
            <button type="button" onClick={reloadPage}>
              <i className="logo-btn ti-reload"></i>
            </button>
          </div>
        </div>
        <div className="nav-btn_search">
          <div className="search-box">
            <button className="search-box_btn">
              <i className="ti-search"></i>
            </button>
            <input
              className="search-box_input"
              placeholder="Tìm kiếm bài kiểm tra thử"
              type="text"
            />
          </div>
        </div>
        <div className="btn-right">
          <div className="btn-right_choice">
            <button className="btn-right_plus">
              <i className="ti-plus"></i>
            </button>
          </div>
          <div className="btn-right_note">
            <a
              role="button"
              href="https://quizlet.com/upgrade?source=header_plus&redir=https%3A%2F%2Fquizlet.com%2Flatest"
            >
              <span>Nâng cấp: dùng thử miễn phí 7 ngày</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
