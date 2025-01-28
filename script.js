var password = prompt("ادخل كلمة المرور 👇:");

if (password !== "Khalil") {
  window.location.replace("www.khalilfg4.duckdns.org");
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


