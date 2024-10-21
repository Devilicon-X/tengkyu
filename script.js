let messages = [
  "Halo Alikha, makasih ya udah di buka",
  "Kamu selalu jadi seseorang yang spesial buatku",
  "Terima kasih untuk semua kenangan indah kita",
  "Meskipun kita sudah tidak bersama, kamu tetap di hati",
  "Semoga kamu selalu bahagia di manapun berada"
];

let currentMessage = 0;
const messageElement = document.getElementById('message');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
  currentMessage++;
  if (currentMessage >= messages.length) {
    currentMessage = 0;
  }

  // Animasi fade out
  messageElement.style.animation = "fadeOut 1s forwards";

  // Ganti teks setelah animasi selesai
  setTimeout(() => {
    messageElement.textContent = messages[currentMessage];
    messageElement.style.animation = "fadeIn 1s forwards";
  }, 1000); // Waktu sesuai durasi animasi fadeOut
});
