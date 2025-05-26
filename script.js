function tampilkanUcapan() {


  if (nama.trim() === "") {
    output.innerHTML = "<p style='color:red'>Silakan isi nama terlebih dahulu.</p>";
    return;
  }

  const ucapan = `
    <p>Dear <strong>${nama}</strong>,</p>
    <p>Selamat ulang tahun! 🎉</p>
    <p>Semoga hari-harimu dipenuhi dengan kebahagiaan, cinta, dan kesuksesan. Terima kasih telah menjadi teman yang luar biasa dan selalu ada dalam suka maupun duka.</p>
    <p>Semoga semua impianmu tercapai dan hidupmu selalu diberkahi. Jangan pernah berhenti bermimpi dan teruslah menjadi pribadi yang menginspirasi.</p>
    <p>Dengan penuh cinta dan harapan terbaik,</p>
    <p><em>Sahabatmu yang selalu mendukungmu 💖</em></p>
  `;
  output.innerHTML = ucapan;
  const output = document.getElementById("output");
output.innerHTML = ucapan
  .trim()
  .split('\n\n')
  .map(paragraf => `<p>${paragraf.trim()}</p>`)
  .join('');

// Link share WhatsApp
document.getElementById("waShareBtn").href = `https://wa.me/?text=${encodeURIComponent(ucapan)}`;

// Efek bunga jatuh
const emojiList = ["🌸", "💮", "🌼", "🌺"];
setInterval(() => {
  const bunga = document.createElement("div");
  bunga.classList.add("bunga");
  bunga.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];
  bunga.style.left = Math.random() * 100 + "vw";
  bunga.style.fontSize = (18 + Math.random() * 20) + "px";
  bunga.style.animationDuration = (5 + Math.random() * 3) + "s";
  document.body.appendChild(bunga);
  setTimeout(() => bunga.remove(), 7000);
}, 300);

// Efek bintang berkilau acak
for(let i = 0; i < 25; i++) {
  const star = document.createElement('div');
  star.classList.add('bintang');
  star.style.width = star.style.height = (4 + Math.random() * 4) + 'px';
  star.style.top = (Math.random() * 100) + 'vh';
  star.style.left = (Math.random() * 100) + 'vw';
  star.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.body.appendChild(star);
}

}
// Konfeti warna-warni
setInterval(() => {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.setProperty('--hue', Math.floor(Math.random() * 360));
  confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 6000);
}, 200);

// Love naik ke atas
setInterval(() => {
  const love = document.createElement('div');
  love.classList.add('love');
  love.innerText = '❤️';
  love.style.left = Math.random() * 100 + 'vw';
  love.style.fontSize = (16 + Math.random() * 12) + 'px';
  love.style.animationDuration = (4 + Math.random() * 2) + 's';
  document.body.appendChild(love);
  setTimeout(() => love.remove(), 7000);
}, 500);
// Tambahkan di dalam <script> window.onload setelah animasi bunga
setInterval(() => {
  const love = document.createElement('div');
  love.classList.add('love');
  love.style.left = Math.random() * 100 + 'vw';
  love.style.animationDuration = (Math.random() * 3 + 2) + 's';
  document.body.appendChild(love);
  setTimeout(() => love.remove(), 5000);
}, 400);
