var password = prompt("ادخل كلمة المرور 👇:");

if (password !== "Khalil") {
  window.location.replace("https://240aa944-03ff-4e38-902e-3e14b435bea9-00-if0y6xki3bho.janeway.replit.dev/");
}
var videos = document.getElementsByTagName('video');
for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener('play', function() {
    for (var j = 0; j < videos.length; j++) {
      if (videos[j] !== this) {
        videos[j].pause();
      }
    }
  });
}


