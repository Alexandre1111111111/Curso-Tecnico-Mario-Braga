function Dropbox() {
  document.getElementById("Box").classList.toggle("show");
  document.getElementById("Cog").classList.toggle("rotate");
}
  window.onclick = function(event) {
  if (!event.target.matches('.sett, .Eng img')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("Cog").classList.toggle("rback");
      }
    }
  }
}
function actstr1() {
    document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
    document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
    document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
    document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
    document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  }
function actstr12() {
    document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
    document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
    document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
    document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
    document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  }
function actstr123() {
  document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
 }
function actstr1234() {
  document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
 }
function actstr12345() {
  document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
  document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828614.png';
}
function redef() {
  document.getElementById("str1").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  document.getElementById("str2").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  document.getElementById("str3").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  document.getElementById("str4").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
  document.getElementById("str5").src='https://cdn-icons-png.flaticon.com/512/1828/1828970.png';
}