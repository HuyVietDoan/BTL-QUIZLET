import React from 'react';

function Aside() {
  return (
    <aside>
      <ul className="related">
        <li>
          <div className="home-item">
            <button type="button" onClick={() => window.location.reload()}>
              <i className="home-btn ti-home"></i>
            </button>
          </div>
        </li>
        <li>
          <a href="#">
            <ti className="folder-btn ti-folder"></ti>
          </a>
        </li>
        <li>
          <button className="bell-btn">
            <i className="bell-item ti-bell"></i>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
