// Fungsi untuk navigasi ke halaman berikutnya
document.getElementById('nextButton')?.addEventListener('click', function() {
    window.location.href = 'page2.html';
});

// Fungsi untuk kembali ke halaman sebelumnya
document.getElementById('backButton')?.addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Fungsi untuk menampilkan alert saat selesai
document.getElementById('finishButton')?.addEventListener('click', function() {
    alert("Terima kasih telah merayakan ulang tahun ini!");
});
