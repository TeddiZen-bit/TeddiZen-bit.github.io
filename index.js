{
    var li = document.querySelector('.project-ul').querySelectorAll('li');
    for (var i = 0; i < li.length; i++) {
        li[i].onmouseover = function () {
            this.style.backgroundColor = 'rgba(255, 255, 255, 20%)';
        };
        li[i].onmouseout = function () {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0%)';
        };
    }
}
{
    var tabLis = document.querySelector('.tabLis');
    var imgLis = tabLis.querySelectorAll('li');
    var img = document.querySelectorAll('.img');
    for (var i = 0; i < imgLis.length; i++) {
        imgLis[i].setAttribute('data-index', i);
        imgLis[i].onclick = function () {
            for (var i = 0; i < imgLis.length; i++) {
                imgLis[i].className = 'imgLis';
            }
            this.className = 'imgLisChange';
            var index = this.getAttribute('data-index');
            for (var i = 0; i < img.length; i++) {
                img[i].style.display = 'none';
            }
            img[index].style.display = 'block';
        };
    }
}
