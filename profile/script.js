
// Lấy đối tượng button chuyển đổi Dark mode
const darkModeToggle = document.getElementById("darkModeToggle");

// Bắt sự kiện khi người dùng click vào button
darkModeToggle.addEventListener("click", function() {
    // Toggle chế độ Dark mode bằng cách thêm/xóa lớp "dark-mode" cho body
    document.body.classList.toggle("dark-mode");
});


// music
function playPause() {
    var audio = document.getElementById('audioPlayer');
    var volumeOff = document.getElementById('playerVolumeOff');
    var volumeOn = document.getElementById('playerVolumeOn');

    if (audio.paused) {
        audio.play();
        volumeOff.style.display = 'none';
        volumeOn.style.display = 'inline';
    } else {
        audio.pause();
        volumeOff.style.display = 'inline';
        volumeOn.style.display = 'none';
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
