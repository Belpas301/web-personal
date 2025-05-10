function updateTime() {
  const el = document.getElementById("time");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  el.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();

// Modal welcome (versi final)
window.onload = function() {
  var modal = document.getElementById("welcomeModal");
  var loaderBox = document.getElementById("loaderBox");
  var modalContent = document.getElementById("modalContent");
  var closeBtn = document.getElementsByClassName("close")[0];

  modal.style.display = "flex";

  setTimeout(function() {
    loaderBox.style.display = "none";
    modalContent.style.display = "flex";
  }, 1200);

  closeBtn.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

// Notifikasi toggle
var notifBtn = document.getElementById("notifBtn");
var notifDropdown = document.getElementById("notifDropdown");

notifBtn.onclick = function(e) {
  e.stopPropagation();
  notifDropdown.style.display = (notifDropdown.style.display === "block") ? "none" : "block";
}

window.onclick = function(e) {
  if (!notifDropdown.contains(e.target) && e.target !== notifBtn) {
    notifDropdown.style.display = "none";
  }
}

function tampilkanNotifikasi() {
  var notifContainer = document.getElementById('notifContainer');
  var notifList = document.getElementById('notifList');

  var notifikasi = JSON.parse(localStorage.getItem('notifikasiAbsensi')) || [];

  if (notifikasi.length === 0) {
    notifList.innerHTML = '<p>Tidak ada notifikasi.</p>';
  } else {
    notifList.innerHTML = '<ul style="padding-left:18px;">' + notifikasi.map(item => '<li>' + item + '</li>').join('') + '</ul>';
  }

  notifContainer.style.display = (notifContainer.style.display === 'none') ? 'block' : 'none';
}

function hapusNotifikasi() {
  if (confirm('Yakin mau hapus semua notifikasi?')) {
    localStorage.removeItem('notifikasiAbsensi');
    document.getElementById('notifList').innerHTML = '<p>Tidak ada notifikasi.</p>';
  }
}
