// CHUYỂN MÀU
document.addEventListener("DOMContentLoaded", function() {
    const colorThemeButton = document.getElementById("colorThemeButton");
    const colorOptions = document.querySelectorAll(".color-option");

    // Chuyển đổi màu chủ đề khi nhấp vào nút
    colorThemeButton.addEventListener("click", function() {
        const dropdownContent = document.getElementById("colorOptions");
        dropdownContent.classList.toggle("show");
    });

    // Áp dụng màu khi chọn một tùy chọn màu
    colorOptions.forEach(option => {
        option.addEventListener("click", function() {
            const selectedColor = this.getAttribute("data-color");
            applyColor(selectedColor);
        });
    });

    // Áp dụng màu cho các phần tử tương ứng
    function applyColor(color) {
        // Xóa tất cả các class màu trước đó
        document.body.classList.remove("color-pink", "color-yellow", "color-orange", "color-green", "color-blue", "color-black", "color-white");

        // Thêm class màu mới
        if (color === "#ff69b4") {
            document.body.classList.add("color-pink");
        } else if (color === "#ffff00") {
            document.body.classList.add("color-yellow");
        } else if (color === "#ffa500") {
            document.body.classList.add("color-orange");
        } else if (color === "#00ff00") {
            document.body.classList.add("color-green");
        } else if (color === "#4169e1") {
            document.body.classList.add("color-blue");
        } else if (color === "#000000") {
            document.body.classList.add("color-black");
        }else if (color === "#ffffff") {
            document.body.classList.add("color-white");
        }

        // Đóng dropdown sau khi chọn màu
        const dropdownContent = document.getElementById("colorOptions");
        dropdownContent.classList.remove("show");
    }
});

/////////////////////////////////////
// Lấy đối tượng nút đổi màu
const colorThemeButton = document.getElementById("colorThemeButton");

// Hàm thay đổi màu background
function changeBackgroundColor() {
    // Làm điều gì đó để thay đổi màu background
    document.body.style.backgroundColor = "pink"; // Đổi màu background thành màu hồng
}

// Bắt sự kiện click vào nút đổi màu
colorThemeButton.addEventListener("click", function() {
    changeBackgroundColor(); // Gọi hàm để thay đổi màu background khi nút được nhấn
});



// music
function playPause() {
    var audio = document.getElementById('audioPlayer');
    var volumeOff = document.getElementById('playerVolumeOff');
    var volumeOn = document.getElementById('playerVolumeOn');
    var petalsContainer = document.getElementById('petals-container');
    var body = document.body;

    if (audio.paused) {
        audio.play();
        volumeOff.style.display = 'none';
        volumeOn.style.display = 'inline';
        body.classList.add('music-playing'); // Thêm lớp khi nhạc được bật
        startFallingPetals(petalsContainer);
    } else {
        audio.pause();
        volumeOff.style.display = 'inline';
        volumeOn.style.display = 'none';
        body.classList.remove('music-playing'); // Xóa lớp khi nhạc tắt
        stopFallingPetals(petalsContainer);
    }
}


// hoa roi
function startFallingPetals(container) {
    for (let i = 0; i < 50; i++) { // Số lượng cánh hoa
        let petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian ngẫu nhiên từ 2s đến 5s
        petal.style.animationDelay = Math.random() * 5 + 's'; // Độ trễ ngẫu nhiên
        container.appendChild(petal);
    }
}

function stopFallingPetals(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Tùy chọn: loại bỏ nếu không muốn tự động phát khi tải trang
document.addEventListener('DOMContentLoaded', function() {
    playPause();
});




// Avatar
document.addEventListener("DOMContentLoaded", function () {
    // Lấy đối tượng hình ảnh
    const avatar = document.querySelector(".rotating-avatar");

    // Bắt sự kiện khi di chuột vào hình ảnh
    avatar.addEventListener("mouseenter", function () {
        // Thêm class "rotate" để bắt đầu hiệu ứng xoay
        avatar.classList.add("rotate");
    });

    // Bắt sự kiện khi di chuột ra khỏi hình ảnh
    avatar.addEventListener("mouseleave", function () {
        // Xóa class "rotate" để dừng hiệu ứng xoay
        avatar.classList.remove("rotate");
    });
});


// Bắt sự kiện khi trang đã tải hoàn toàn



// script.js
function copyToClipboard(text, element) {
    navigator.clipboard
        .writeText(text)
        .then(() => {
            element.classList.remove("far", "fa-copy");
            element.classList.add("fas", "fa-check", "copied-icon");
            setTimeout(() => {
                element.classList.remove("fas", "fa-check", "copied-icon");
                element.classList.add("far", "fa-copy");
            }, 5000);
        })
        .catch((err) => {});
}

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typewriter");
    const originalText = textElement.innerText;

    function runTypewriter() {
        textElement.innerText = "";
        let i = 0;

        function typeNextCharacter() {
            if (i < originalText.length) {
                textElement.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeNextCharacter, 100);
            } else {
                setTimeout(runTypewriter, 100);
            }
        }
        typeNextCharacter();
    }
    runTypewriter();
});