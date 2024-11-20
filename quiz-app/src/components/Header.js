import React from "react";

function Header() {
  const reloadPage = () => window.location.reload();

  return (
    <header id="header">
      <div className="nav">
        <div className="nav-btn">
          <div className="nav-btn-list">
            <button className="btn-list">
              <svg
                className="list-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
              </svg>
            </button>
          </div>
          <div className="nav-btn-reload">
            <button type="button" onClick={reloadPage}>
              <svg
                className="logo-btn"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-btn_search">
          <div className="search-box">
            <button className="search-box_btn">
              <svg
                className="btn-search"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="..." />
              </svg>
            </button>
          </div>
          <div className="btn-right_note">
            <a
              role="button"
              href="https://quizlet.com/upgrade?source=header_plus"
            >
              <span>Nâng cấp: dùng thử miễn phí 7 ngày</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
