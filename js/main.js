function showMore() {
    var more = document.getElementById('more');
    var btn = document.getElementById("showMore");

    if(more.style.display === "block"){
        more.style.display = "none";
        btn.innerHTML = "view all latest posts";
        btn.style.marginTop = "79px";
    }
    else{
        more.style.display = "block";
        btn.style.marginTop = "500px";
        btn.innerHTML = "hide";
    }
}