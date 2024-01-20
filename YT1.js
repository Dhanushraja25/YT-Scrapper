async function search(){
    const sou=document.getElementById("vid").value;
  const url = 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id=' + sou;
const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': '62721efba1msh8f8de2c0fc2d60ep1ad4ccjsn2150c7b2d862',
'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
}
};

try {
const response = await fetch(url, options);
const result = await response.json();
console.log(result);


document.getElementById("cn").innerHTML="Channel Name -   " + result.channelTitle;
document.getElementById("vt").innerHTML="Video Title -   " + result.title;

const Link1 = document.getElementById('urls');
Link1.href = result.formats[1].url;

const Link2 = document.getElementById('urlss');
Link2.href = result.formats[0].url;

Link1.style.display = 'inline';
Link2.style.display = 'inline';

Link1.style.color = 'blue';
Link2.style.color = 'blue';



} catch (error) {
console.error(error);
}
  }
/*
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;

if (prevScrollPos > currentScrollPos) {
document.getElementById('navbar').style.top = '0';
} else {
document.getElementById('navbar').style.top = '-500px';

prevScrollPos = currentScrollPos;
};

  }
  } */

function scrollToSection(sectionId) {

var section = document.getElementById(sectionId);
section.scrollIntoView({
behavior: 'smooth',
block:"start"

});
}

const main = document.getElementById('main');
const scroll = new LocomotiveScroll({
el: main,
smooth: true
});
/*
window.onload = function() {
    window.scrollTo({top:210,behavior:"smooth"});
}*/
