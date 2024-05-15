// music
function playPause() {
    var audio = document.getElementById('audioPlayer');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

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
        .catch((err) => {
        });
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
