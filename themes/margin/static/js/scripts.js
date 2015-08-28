function toggleMenu(){
    document.getElementById("container").classList.toggle("slide");
    document.getElementById("sidebar").classList.toggle("slide");
//    document.getElementById("menuBtn").classList.toggle("slide, rotate");
    document.getElementById("menuBtn").classList.toggle("rotate");
    document.getElementById("menuBtn").classList.toggle("slide");
}

document.getElementById("menuBtn").addEventListener("click", toggleMenu);

