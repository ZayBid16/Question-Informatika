/* --- LOGIC - Abid's Quest Engine --- */

const anniversaryDate = new Date(2024, 6, 17); // 17 Juli 2024
const nomorWA = "+62 851 5787 2366"; // GANTI NOMOR WA ABID

let musicStarted = false;
let sadLevel = 0; // Menghitung berapa kali tombol 'Nggak' didekati

function updateStats() {
    const now = new Date();
    const diffDays = Math.ceil(Math.abs(now - anniversaryDate) / (1000 * 60 * 60 * 24)); 
    document.getElementById('days-count').innerHTML = `DAYS TOGETHER: ${diffDays} DAYS`;

    let nextAnniv = new Date(now.getFullYear(), now.getMonth(), 17);
    if (now.getDate() >= 17) nextAnniv.setMonth(now.getMonth() + 1);
    const daysUntil = Math.ceil((nextAnniv - now) / (1000 * 60 * 60 * 24));
    document.getElementById('next-milestone').innerHTML = `NEXT MISSION: ${daysUntil} DAYS TO MONTHSARY`;
}

window.onload = updateStats;

function startMusic() {
    if (!musicStarted) {
        const audio = document.getElementById('bgm');
        audio.volume = 0.4;
        audio.play().catch(() => {});
        musicStarted = true;
    }
}

/**
 * Logika Tombol 'Nggak' dengan dialog sedih progresif
 */
function runAway() {
    startMusic();
    const noBtn = document.getElementById('noBtn');
    const dialog = document.getElementById('dialogText');
    const emoji = document.getElementById('pixelEmoji');
    
    // Gerakan tombol menghindar
    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
    
    sadLevel++;

    // Dialog sedih progresif
    if (sadLevel < 3) {
        dialog.innerHTML = "Sistem: Yah, kok mau diklik? Abid nanti sedih lho... 🥺";
        emoji.innerHTML = "😿";
    } else if (sadLevel < 6) {
        dialog.innerHTML = "Sistem: Tega banget Putik... Abid beneran sedih ini. Masa mau nolak? 😭";
        emoji.innerHTML = "💔";
    } else {
        dialog.innerHTML = "Sistem: ERROR: Tombol menolak rusak karena Abid terlalu sedih. Klik 'MAU' saja ya? 🧸";
        emoji.innerHTML = "🥀";
    }
}

function onYes() {
    startMusic();
    document.getElementById('btnGroup').classList.add('hidden');
    document.getElementById('pixelEmoji').innerHTML = "😻";
    document.getElementById('dialogText').innerHTML = "Sistem: LEVEL UP! ❤️ <br> Abid & Putik sekarang resmi SOULMATE!";
    
    document.getElementById('gallery-container').classList.remove('hidden');
    document.getElementById('secret-container').classList.remove('hidden');
    
    typeWriter("Hai Putik sayang... Sejak 17 Juli 2024 kamu sudah jadi bagian terindah dalam hidup Abid. Abid sayang banget sama kamu. I love you! ❤️");

    setInterval(spawnHeart, 300);
}

function typeWriter(text) {
    let i = 0;
    const speed = 70;
    const elem = document.getElementById('typewriterText');
    const waBtn = document.getElementById('waBtn');
    elem.innerHTML = "";
    
    function type() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            waBtn.classList.remove('hidden');
        }
    }
    type();
}

function sendWhatsApp() {
    const pesan = "Hai Abid! Aku sudah baca semua pesannya. I love you too! ❤️✨";
    const waLink = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${encodeURIComponent(pesan)}`;
    window.open(waLink, '_blank');
}

function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('pixel-heart');
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}