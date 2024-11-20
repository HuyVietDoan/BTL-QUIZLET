import React from "react";

function Container() {
  return (
    <div id="container">
      <h1>TƯ TƯỞNG HỒ CHÍ MINH - CHƯƠNG III</h1>
      <div className="star-rating">
        {[5, 4, 3, 2, 1].map((rate) => (
          <React.Fragment key={rate}>
            <input type="radio" name="rate" id={`rate-${rate}`} />
            <label htmlFor={`rate-${rate}`} className="fas fa-star"></label>
          </React.Fragment>
        ))}
      </div>
      <div className="option">
        <ul className="option-list">
          {[
            { text: "Thẻ ghi nhớ", iconPath: "..." },
            { text: "Học", iconPath: "..." },
            { text: "Kiểm tra", iconPath: "..." },
            { text: "Ghép thẻ", iconPath: "..." },
          ].map((option, index) => (
            <li key={index}>
              <button className={`btn-${option.text}`}>
                <svg
                  className={`btn-${option.text.toLowerCase()}-icon`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={option.iconPath} />
                </svg>
                <span className={`text-${option.text.toLowerCase()}`}>
                  {option.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Container;
