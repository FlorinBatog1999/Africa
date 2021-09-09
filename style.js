function bineaivenit(){
    alert("Bine ai venit! Ne bucuram ca ai accesat site-ul nostru!");
}
function revolutie(){
     document.getElementById("butonulalbastru").innerHTML='"Nu te duce în Africa pentru a vedea monştri; călătoreşte într-un ţinut în care poporul se răscoală."     Pitagora-Legile morale si politice'; 
}
document.getElementById("myfooter").onmouseover=function(){ footer()};
document.getElementById("myfooter").onmouseout=function(){ footernull()};
function footer(){
    document.getElementById("myfooter").style.opacity=1;//style acceseaza toate atributele din CSS
}
function footernull(){
    document.getElementById("myfooter").style.opacity=0.2;
}

