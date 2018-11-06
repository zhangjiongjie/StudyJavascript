function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    if(!document.getElementById("placeholder")) return false;
    var gallery = document.getElementById("imagegallery");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    var links = gallery.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++){
       links [i].onclick = function(){
            return !showPic(this, placeholder);
        }
    }
}
function showPic(whichPic, placeholder){
    var source = whichPic.getAttribute("href");
    placeholder.setAttribute("src", source);
    
    if(document.getElementById("description")){
        var description = document.getElementById("description");
        var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : "";
        if(description.firstChild.nodeType == 3){
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof oldonload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
//Dynamically create tags

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.gif");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var destext = document.createTextNode("Choose an image");
    description.appendChild(destext);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);
} 

function insertAfter(newElement, targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
addLoadEvent(preparePlaceholder);
//Dynamically create tags 
addLoadEvent(prepareGallery);