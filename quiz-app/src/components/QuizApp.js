import React, { useState } from "react";

const questions = [
    {
        question: "Chọn phát biểu không đúng:",
        options: [
            "Cách mạng khoa học và công nghệ thúc đẩy xu thế toàn cầu hóa",
            "Cách mạng khoa học và công nghệ làm xuất hiện các vấn đề toàn cầu",
            "Cách mạng khoa học và công nghệ là xu thế tất yếu của toàn cầu hóa",
            "Cách mạng khoa học và công nghệ thúc đẩy sự phát triển của thế giới"
        ],
        answer: "C"
    },
    {
        question: "Hồ Chí Minh nói về loại hình hợp tác xã khi nào?",
        options: ["1920", "1927", "1945", "1954"],
        answer: "B"
    },
    // Thêm các câu hỏi khác...
];

const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setIsFlipped(false);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setIsFlipped(false);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <div className={`card ${isFlipped ? "flipped" : ""}`}>
                {/* Front Side */}
                <div className="card-front">
                    <h2>Câu hỏi {currentQuestionIndex + 1}</h2>
                    <p id="question-text">{currentQuestion.question}</p>
                    <form id="quiz-form">
                        {currentQuestion.options.map((option, index) => (
                            <label key={index}>
                                <input type="radio" name="answer" />
                                {option}
                                <br />
                            </label>
                        ))}
                    </form>
                </div>

                {/* Back Side */}
                <div className="card-back">
                    <h2>Đáp án</h2>
                    <p id="answer-text">{`Đáp án: ${currentQuestion.answer}`}</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="buttons">
                <button id="btn-left" onClick={handlePrev}>
                    Câu trước
                </button>
                <button id="btn-flip" onClick={handleFlip}>
                    Lật
                </button>
                <button id="btn-right" onClick={handleNext}>
                    Câu tiếp
                </button>
            </div>
        </div>
    );
};

export default QuizApp;
