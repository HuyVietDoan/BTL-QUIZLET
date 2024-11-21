function tai_lai_trang(){
    location.reload();
}

const listBtn = document.querySelector('.js-btn_list')
const modal = document.querySelector('.modal') //luu class modal vao bien modal
const ClosetBtn = document.querySelector('.js-btn-close')
function showList() {
    modal.classList.add('open')
}

function hideList() {
    modal.classList.remove('open')
}

listBtn.addEventListener('click', showList)
ClosetBtn.addEventListener('click', hideList)

let currentQuestionIndex = 0;

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

function updateCard() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;

    const answersForm = document.getElementById("quiz-form");
    answersForm.innerHTML = "";
    question.options.forEach(option => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";     
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        answersForm.appendChild(label);
        answersForm.appendChild(document.createElement("br"));
    });

    document.getElementById("answer-text").textContent = `Đáp án: ${question.answer}`;
}

updateCard();

document.getElementById("btn-flip").addEventListener("click", function() {
    document.querySelector(".card").classList.toggle("flipped");
});

//Hiển thị câu hỏi đầu tiên khi tải lại trang 


// chuyen sang cau hoi tiep theo
document.getElementById("btn-left").addEventListener("click", function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateCard();
        document.querySelector(".card").classList.remove("flipped");
    }
});

// quay lai cau hoi truoc do
document.getElementById("btn-right").addEventListener("click", function() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateCard();
        document.querySelector(".card").classList.remove("flipped");
    }
});
