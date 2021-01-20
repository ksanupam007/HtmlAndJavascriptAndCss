function changeColor(colour) {
    document.getElementById("salutation").style.color = colour;
}

setTimeout(function() {
    changeColor("green")
}, 5000)


setTimeout(function(){
    changeColor("red")
}, 10000)

setTimeout(function(){
    changeColor("blue")
}, 15000)

function hideImage(){
    alert("Hide Image");
    document.getElementsByTagName("img")[0].style.display="none"
    document.getElementsByTagName("img")[1].style.display="none"
    document.getElementsByTagName("img")[2].style.display="none"
    document.getElementsByTagName("img")[3].style.display="none"
    document.getElementsByTagName("img")[4].style.display="none"
}

function hideContainer() {
    document.getElementsByClassName("emp_container")[0].style.display="none"
    document.getElementsByClassName("emp_container")[1].style.display="none"
    document.getElementsByClassName("emp_container")[2].style.display="none"
    document.getElementsByClassName("emp_container")[3].style.display="none"
}

function showContainer() {
    document.getElementsByClassName("emp_container")[0].style.display="inline-block"
    document.getElementsByClassName("emp_container")[1].style.display="inline-block"
    document.getElementsByClassName("emp_container")[2].style.display="inline-block"
    document.getElementsByClassName("emp_container")[3].style.display="inline-block"
}