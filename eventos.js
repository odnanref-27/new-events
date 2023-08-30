document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('div');
    element.addEventListener('click', function () {
        alert(this.innerText + " Hola soy el div!");
    });
});