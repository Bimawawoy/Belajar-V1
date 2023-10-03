document.addEventListener("DOMContentLoaded",
function () {
  
  // Simulate loading delay (you can adjust this)
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    // Add slide animation class to your content
    document.getElementById("content").classList.add("slide-in-animation");
  }, 3000); // Change 3000 to your desired delay in milliseconds
  console.log("Animation loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading delay (you can adjust this)
  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";
    document.body.classList.add("slide-in"); // Tambahkan class untuk animasi slide
  }, 3000); // Ganti 3000 dengan delay yang diinginkan dalam milidetik
});

document.getElementById('bimz123').addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Mencegah munculnya konteks menu
    alert('Akses tidak diizinkan!!.');
                                               });

function tekanlahanj(onclick) {
  alert("Server down")
  console.log("Button1 Clicked!!")
}

const toast = document.querySelector(".toast"),
  closeIcon = document.querySelector(".close"),
  progress = document.querySelector(".progress");

let timer1, timer2, timer3;

// Show the toast initially
toast.classList.add("active");
progress.classList.add("active");

// Timer untuk hilangkan progress
timer1 = setTimeout(() => {
  toast.classList.remove("active");
}, 8000);

timer2 = setTimeout(() => {
  progress.classList.remove("active");
}, 8300);

timer3 = setTimeout(() => {
  // Remove the toast element from the DOM after the transition ends
  toast.remove();
}, 8500);

closeIcon.addEventListener("click", () => {
  // Hide the toast when the close icon is clicked
  toast.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  // Clear the timers
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
});

// listener untuk menutup submenu saat sentuh di luar navigasi atau submenu
document.addEventListener('touchstart', function (event) {
  var target = event.target;
  if (!target.closest('.main-menu') && !target.closest('.submenu')) {
    hideAllSubmenus();
  }
});

// Fungsi hideAllSubmenus tetap sama
function hideAllSubmenus() {
  var submenus = document.querySelectorAll('.submenu');
  submenus.forEach(function (submenu) {
    submenu.style.display = 'none';
    console.log("Submenu hided")
  });
}

// Tambahkan fungsi toggleSubMenu
function toggleSubMenu(submenuId) {
  var submenu = document.getElementById(submenuId);
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    hideAllSubmenus();
    submenu.style.display = 'block';
  }
}
