function Dropbox() {
  document.getElementById("Box").classList.toggle("show");
  if (document.getElementById("Cog").style.rotate==("90deg")) {
    document.getElementById("Cog").style.rotate=("0deg");
  }
  else {
    document.getElementById("Cog").style.rotate=("90deg");
  }
}
  window.onclick = function(event) {
  if (!event.target.matches('.sett, .Eng img')) {
    var dropdowns = document.getElementsByClassName("drop");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementById("Cog").style.rotate=("0deg");
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
function verify() {
if (document.getElementById("str1").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str2").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str3").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str4").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str5").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png') {
  const str12345 = 5;
}
else if (document.getElementById("str1").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str2").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str3").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str4").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png') {
  const str1234 = 4;
}
else if (document.getElementById("str1").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str2").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str3").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png') {
  const str123 = 3;
}
else if (document.getElementById("str1").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png' && document.getElementById("str2").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png') {
  const str12 = 2;
}
else if (document.getElementById("str1").src=='https://cdn-icons-png.flaticon.com/512/1828/1828614.png') {
  const str1 = 1;
}
}
function feedbrd() {
document.getElementById("feed").style.borderColor = "#a115f1";
}
function feedbrdback() {
document.getElementById("feed").style.borderColor = "#5016f1";
}
function formback() {
document.getElementById("cdsform").style.borderColor = "#a115f1";
}
function formbdr() {
document.getElementById("cdsform").style.borderColor = "#5016f1";
}
function formevr() {
document.getElementById("evrform").style.borderColor = "#a115f1";
}
function formevrbdr() {
document.getElementById("evrform").style.borderColor = "#5016f1";
}