import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const questions = [
    {
      question: "Chọn phát biểu không đúng:",
      options: [
        "Cách mạng khoa học và công nghệ thúc đẩy xu thế toàn cầu hóa",
        "Cách mạng khoa học và công nghệ làm xuất hiện các vấn đề toàn cầu",
        "Cách mạng khoa học và công nghệ là xu thế tất yếu của toàn cầu hóa",
        "Cách mạng khoa học và công nghệ thúc đẩy sự phát triển của thế giới",
      ],
      answer: "C",
    },
    // Thêm các câu hỏi khác vào đây

    {
        question: "Hồ Chí Minh nói về loại hình hợp tác xã khi nào?",
        options: [
            "1920",
            "1927",
            "1945",
            "1954"
        ],
        answer: "B"
    },

    {
        question: "Ai là người khai phá tư tưởng độc lập dân tộc gắn liền với CNXH ở Việt Nam ?",
        options: [
            "V.I Lênin",
            "Đặng Tiểu Bình",
            "Hồ Chí Minh",
            "Phạm Văn Đồng"
        ],
        answer: "C"
    },

    {
        question: "Theo Hồ Chí Minh, đấu tranh chống chủ nghĩa cá nhân nghĩa là:",
        options: [
            "Chỉ bảo vệ lợi ích của tập thể",
            "Chỉ bảo vệ lợi ích cá nhân",
            "Loại bỏ lợi ích cá nhân",
            "Không dày xéo lên lợi ích cá nhân"
        ],
        answer: "D"
    },

    {
        question: "Theo Hồ Chí Minh, động lực quan trọng nhất của chủ nghĩa xã hội là gì?",
        options: [
            "Khoa học-kỹ thuật",
            "Con người",
            "Văn hóa",
            "Sự giúp đỡ của quốc tế"
        ],
        answer: "B"
    },

    {
        question: "Theo Hồ Chí Minh, chế độ chính trị mà chúng ta xây dựng là chế độ:",
        options: [
            "Do nhân dân lao động làm chủ",
            "Do nhân dân làm chủ",
            "Do giai cấp công nhân làm chủ",
            "Do giai cấp công nông làm chủ"
        ],
        answer: "B"
    },

    {
        question: "Theo Hồ Chí Minh, nền kinh tế mà chúng ta xây dựng phải được tạo lập trên cơ sở:",
        options: [
            "Nền nông nghiệp hiện đại",
            "Nền công nghiệp hiện đại",
            "Khoa học kỹ thuật phát triển",
            "Chế độ công hữu về tư liệu sản xuất"
        ],
        answer: "D"
    },

    {
        question: "Theo Hồ Chí Minh, kẻ thù hung ác của chủ nghĩa xã hội là gì?",
        options: [
            "Tham ô, lãng phí",
            "Chủ nghĩa cá nhân",
            "Các lực lượng phản động",
            "Thói hư, tật xấu"
        ],
        answer: "B"
    },

    {
        question: "Theo Hồ Chí Minh, đặc trưng nổi bật của chủ nghĩa xã hội là gì?",
        options: [
            "Khoa học - kỹ thuật phát triển",
            "Cơ cấu công - nông nghiệp hợp lý",
            "Sở hữu xã hội về tư liệu sản xuất",
            "Sở hữu tư nhân về tư liệu sản xuất"
        ],
        answer: "C"
    },

    {
        question: "Về tổ chức hợp tác xã, , Hồ Chí Minh nhấn mạnh nguyên tắc:",
        options: [
            "Làm đồng loạt",
            "Làm dần dần, từ thấp đến cao, tự nguyện, cùng có lợi, chống chủ quan, gò ép, hình thức",
            "Khẩn trương xây dựng cho được các hợp tác xã",
            "Làm nhanh chóng"
        ],
        answer: "B"
    },

  ];

  const currentQuestion = questions[currentQuestionIndex];

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="box-card">
        <div className="card">
            <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
                {/* Mặt trước */}
                <div className="card-front">
                    <div className="question">
                    <p id="question-text">{currentQuestion.question}</p>
                    <form id="quiz-form">
                        {currentQuestion.options.map((option, index) => (
                        <label key={index} className="quiz-option">
                            <input type="radio" name="answer" value={option} />
                            {option}
                        </label>
                        ))}
                    </form>
                    </div>
                </div>

                {/* Mặt sau */}
                <div className="card-back">
                    <p id="answer-text">Đáp án: {currentQuestion.answer}</p>
                </div>
            </div>
        </div>
      {/* Nút điều hướng */}
      <div className="navigation">
        <button id= "btn-left" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          <svg className = "icon-btn-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
          </svg>
        </button>
        <button id="btn-flip" onClick={handleFlip}>Lật</button>
        <button id= "btn-right" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          <svg className = "icon-btn-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
