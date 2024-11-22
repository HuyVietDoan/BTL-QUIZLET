import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Hàm mở modal
  const showList = () => {
    setIsOpen(true);
  };

  // Hàm đóng modal
  const hideList = () => {
    setIsOpen(false);
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div id="header">
      <div className="nav">
         {/* Navigation Buttons */}
        <div className="nav-btn">
          <div className="nav-btn-list">
            <button className="btn-list js-btn_list" onClick={showList}>
              <svg className = "list-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="nav-btn-reload">
            <button type="button" onClick={reloadPage}>
              <svg className = "logo-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-btn_search">
          <div className="search-box">
            <button className="search-box_btn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-2">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
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

      <div className={`modal ${isOpen ? "open" : ''}`}>
        <div className="modal-container js-modal-container">
          {/* Button controls */}
          <div className="modal-btn">
            <div className="modal-btn-list">
              <button className="btn-list js-btn-close" onClick={hideList}>
                <svg className = "list-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="modal-btn-reload">
              <button className="btn-reload" onClick={reloadPage}>
                <svg className = "logo-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <ul className="modal-related">
            <li>
              <div className="modal-home-item">
                <button
                  className="modal-icon"
                  type="button"
                  onClick={reloadPage}
                >
                  <svg className = "modal-home-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span>Trang chủ</span>
                </button>
              </div>
            </li>
            <li>
              <div className="modal-folder-item">
                <button className="modal-icon">
                  <svg className = "modal-folder-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                  </svg>
                  <span>Thư viện của bạn</span>
                </button>
              </div>
            </li>
            <li>
              <div className="modal-bell-item">
                <button className="modal-icon">
                  <svg className = "modal-bell-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                  </svg>
                  <span>Thông báo</span>
                </button>
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;
