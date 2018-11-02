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
addLoadEvent(prepareGallery);