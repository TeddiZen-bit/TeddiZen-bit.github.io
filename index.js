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
            this.classList.add('imgLisChange');
            var index = this.getAttribute('data-index');
            for (var i = 0; i < img.length; i++) {
                img[i].style.display = 'none';
            }
            img[index].style.display = 'block';
        };
    }
}
{
    let mousePoint = document.querySelector('.point');
    document.addEventListener('mousemove', function (e) {
        mousePoint.style.left = e.pageX + 20 + 'px';
        mousePoint.style.top = e.pageY + 20 + 'px';
    });
}
{
    function changeWidth() {
        if (window.innerWidth < 840) {
            document.querySelector('.imgBox').style.width = '420px';
            document.querySelector('.imgBox .tabCont').style.height = '280px';
            document.querySelector('h1').style.fontSize = '30px';
        } else {
            document.querySelector('.imgBox').style.width = '720px';
            document.querySelector('.imgBox .tabCont').style.height = '480px';
            document.querySelector('h1').style.fontSize = '60px';
        }
    }
    changeWidth();
    window.addEventListener('resize', changeWidth);
}
{
    let h = document.querySelector('.hour');
    let m = document.querySelector('.min');
    let s = document.querySelector('.sec');
    function fnTime() {
        let time = +Date.now() / 1000;
        s.innerHTML =
            parseInt(time % 60) < 10
                ? '0' + parseInt(time % 60)
                : parseInt(time % 60);
        m.innerHTML =
            parseInt(time / 60) % 60 < 10
                ? '0' + (parseInt(time / 60) % 60)
                : parseInt(time / 60) % 60;
        h.innerHTML =
            parseInt(((time / 60 / 60) % 24) + 8) < 10
                ? '0' + parseInt(((time / 60 / 60) % 24) + 8)
                : parseInt(((time / 60 / 60) % 24) + 8);
    }
    fnTime();
    setInterval(fnTime, 1000);
}
