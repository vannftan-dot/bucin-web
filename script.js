// 1. Sistem Musik Lanjut (Anti Putus saat pindah halaman)
let music = document.getElementById('bgMusic');
let isPlaying = localStorage.getItem('musicPlaying') === 'true';
let currentTime = parseFloat(localStorage.getItem('musicTime')) || 0;

if (!isNaN(currentTime)) {
    music.currentTime = currentTime;
}

window.addEventListener('DOMContentLoaded', () => {
    if (isPlaying) {
        music.play().catch(e => console.log("Menunggu 1 kali klik biar musik nyala"));
    }
});

setInterval(() => {
    if(!music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 500);

function toggleMusic() {
    if (music.paused) {
        music.play();
        localStorage.setItem('musicPlaying', 'true');
    } else {
        music.pause();
        localStorage.setItem('musicPlaying', 'false');
    }
}

// 2. Efek Partikel Jatuh (Dibikin Ringan)
function createParticle() {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.innerText = Math.random() > 0.5 ? '❤️' : '✨';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (Math.random() * 15 + 10) + 'px';
    p.style.animationDuration = (Math.random() * 3 + 3) + 's'; // Diperlambat jatuhnya
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 6000);
}
// Muncul 1.5 detik sekali (sebelumnya 0.3 detik, bikin lemot)
setInterval(createParticle, 1500);
