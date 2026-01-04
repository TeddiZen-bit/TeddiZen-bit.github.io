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
    let tabLis = document.querySelector('.tabLis');
    let imgLis = tabLis.querySelectorAll('li');
    let img = document.querySelector('.tabCont').querySelectorAll('.img');
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
        s.innerHTML = parseInt(time % 60) < 10 ? '0' + parseInt(time % 60) : parseInt(time % 60);
        m.innerHTML = parseInt(time / 60) % 60 < 10 ? '0' + (parseInt(time / 60) % 60) : parseInt(time / 60) % 60;
        h.innerHTML = parseInt(((time / 60 / 60) % 24) + 8) < 10 ? '0' + parseInt(((time / 60 / 60) % 24) + 8) : parseInt(((time / 60 / 60) % 24) + 8);
    }
    fnTime();
    setInterval(fnTime, 1000);
}
{
    let backHead = document.querySelector('.backHead');
    let page2 = document.querySelector('.Page2');
    document.addEventListener('scroll', () => {
        if (pageYOffset > page2.offsetTop - 600) {
            backHead.style.display = 'block';
            if (pageYOffset < page2.offsetTop) {
                backHead.style.opacity = 1 - (page2.offsetTop - pageYOffset) / 600;
            }
        } else {
            backHead.style.display = 'none';
        }
    });
    backHead.addEventListener('mouseover', () => {
        backHead.style.backgroundColor = 'rgba(255, 255, 255, 50%)';
        backHead.children[0].style.color = 'white';
    });
    backHead.addEventListener('mouseout', () => {
        backHead.style.backgroundColor = 'rgba(255, 255, 255, 20%)';
        backHead.children[0].style.color = 'gray';
    });
    backHead.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
}
{
    let circleUl = document.querySelector('.circleUl');
    let div = document.querySelector('.scrollImg');
    let imgUl = document.querySelector('.imgUl');
    let img = imgUl.querySelector('.img');
    let left = document.querySelector('.buttL');
    let right = document.querySelector('.buttR');
    let Num = 0;
    let imgIndex = 0;
    function circleChange(circle, index) {
        circle.forEach((cir) => {
            cir.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        });
        circle[index].style.backgroundColor = 'rgba(255, 255, 255, 100)';
    }
    //初始化
    for (let i = 0; i < imgUl.children.length; i++) {
        let li = document.createElement('li');
        li.className = 'circle';
        circleUl.appendChild(li);
    }
    let circle = circleUl.querySelectorAll('.circle');
    let newClone = img.cloneNode(true);
    imgUl.appendChild(newClone);
    for (let i = 0; i < circle.length; i++) {
        circle[0].style.backgroundColor = 'rgba(255, 255, 255, 100)';
        circle[i].addEventListener('click', () => {
            Num = i;
            imgIndex = i;
            animation(imgUl, -i * 720);
            circleChange(circle, i);
        });
    }
    let flag = true;

    left.addEventListener('click', () => {
        if (flag) {
            flag = false;
            Num--;
            Num == -1 ? (Num = circle.length - 1) : Num;
            circleChange(circle, Num);
            if (imgIndex == 0) {
                imgUl.style.left = -720 * circle.length + 'px';
                imgIndex = circle.length;
            }
            imgIndex--;
            animation(imgUl, -imgIndex * 720, () => {
                flag = true;
            });
        }
    });
    right.addEventListener('click', () => {
        if (flag) {
            flag = false;
            Num++;
            Num == circle.length ? (Num = 0) : Num;
            circleChange(circle, Num);
            if (imgIndex == circle.length) {
                imgUl.style.left = '0px';
                imgIndex = 0;
            }
            imgIndex++;
            animation(imgUl, -imgIndex * 720, () => {
                flag = true;
            });
        }
    });

    var timer = setInterval(() => {
        right.click();
    }, 2000);
    div.addEventListener('mouseover', () => {
        left.style.display = 'block';
        right.style.display = 'block';
        clearInterval(timer);
    });
    div.addEventListener('mouseout', () => {
        left.style.display = 'none';
        right.style.display = 'none';
        timer = setInterval(() => {
            right.click();
        }, 2000);
    });
}
//渲染
{
    const project = [
        './example-practice/color-txst.html',
        './example-practice/Layout.html',
        './example-practice/table.html',
        './example-practice/窗口拖拽.html',
        './example-practice/放大镜.html',
        './example-practice/图书管理系统.html',
        './example-practice/select.html',
        './example-practice/newtable.html',
    ];
    document.querySelector('.project-ul').innerHTML = project
        .map((item) => {
            return `
        <li class="project-li">
            <a class="project-a" href=${item} target="_blank">${item.match(/\/([^\/]+)\.html$/)[1]}</a>
        </li>
        `;
        })
        .join('');
}
//个人B站展示
{
    async function MyBilibili() {
        const result = await axios({
            method: 'get',
            url: 'https://uapis.cn/api/v1/social/bilibili/archives',
            params: {
                mid: '398617955',
            },
        });
        console.log(result);
        document.querySelector('.bilibili-work').innerHTML = result.data.videos
            .map((item) => {
                return `
            <a href= "https://www.bilibili.com/video/${item.bvid}" target="_blank" class="A">
                <div class="inner">
                    <img src="${item.cover}" alt="这就是老二次元的实力吗" class="video-img" />
                    <samp class="video-title">${item.title}</samp>
                </div>
            </a>
            `;
            })
            .join('');
    }
    MyBilibili();
}
