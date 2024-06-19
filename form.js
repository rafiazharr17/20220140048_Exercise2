function show() {
  var name = document.getElementById("fullName").value;
  var asal = document.getElementById("address").value;

  alert(
    "Hai " +
      name +
      " asal " +
      asal +
      ", Selamat anda telah menjadi member SZA🔥"
  );

  // Pindah ke index.html setelah alert ditutup
  setTimeout(function () {
    window.location.href = "index.html";
  }, 0);
}

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    show();
  });
});
