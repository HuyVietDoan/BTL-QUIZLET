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
                {!isFlipped ? (
                    <div className="card-front">
                      {/* Câu hỏi */}
                      <div className="question">
                        <p id="question-text">{currentQuestion.question}</p>
                        {/* Danh sách đáp án */}
                        <form id="quiz-form">
                          {currentQuestion.options.map((option, index) => (
                            <label key={index} className="quiz-option">
                              <input type="radio" name="answer" value={option} />
                              {option}
                            </label> ))}
                        </form>
                      </div>
                    </div>       
                ) : (
                    <div className="card-back">
                        <p id="answer-text">Đáp án: {currentQuestion.answer}</p>
                    </div>
                )}
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
        <button id= "btn-right"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          <svg className = "icon-btn-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
