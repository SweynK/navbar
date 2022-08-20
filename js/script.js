
const nav=["home","about", "gallery", "contact"];
const links = ["index.html", "about.html", "gallery.html", "contact.html"];
let navtext = '<ul class="flex">';

for(let i=0; i<nav.length; i++){
    
    navtext +='<li><a href=' +links[i]+'>'+ nav[i]+"</a></li>";
    
}

navtext +="</ul>";
console.log(navtext);

document.getElementById("navbar").innerHTML=navtext;
 