// function smp(a, b) {
//   return b - a;
// }
// var arr = [1, 2, 5, 23, 12, 7, 1, 2, 3, 12, 7, 1, 3, 5];
// arr.sort(smp);
// console.log(arr);
// function myInfo(name, hight, age) {
//   this.Name = name;
//   this.Hight = hight;
//   this.Age = age;
// }
// var tdz = new myInfo("que", "ga", "as");
// for (var k in tdz) {
//   console.log(tdz[k]);
// }

// function cutTime(time) {
//   var nowtime = new Date();
//   var inputtime = new Date(time);
//   console.log(inputtime);
//   console.log(nowtime);
//   var times = (inputtime - nowtime) / 1000;
//   var s = parseInt(times % 60);
//   var m = parseInt((times / 60) % 60);
//   var h = parseInt((times / 60 / 60) % 24);
//   var d = parseInt(times / 60 / 60 / 24);
//   return d + "天" + h + "小时" + m + "分" + s + "秒";
// }
// var inputtimes = "2025-12-8 01:00:00";
// alert(cutTime(inputtimes));
// var testText = document.getElementById("text1");
// testText.innerHTML = "修改后文字";

// var arr = new Array();
// arr = [1, 3, 2, 4, 5, 5, 9, 4, 6, 3, 6];
// var len = arr.length;
// for (var i = len; i >= 0; i--) {
//   if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
//     arr.splice(i, 1);
//   }
// }
// console.log(arr);
// var arr = new Array();
// arr = [1, 5, 2, 7, 3];
// console.log(arr.splice(1, 3));
// console.log(arr);
// var str = "oii&aiio&iiiaii11451&41919810";
// var o = {};
// for (var i = 0; i < str.length; i++) {
//   if (o[str[i]]) {
//     o[str[i]]++;
//   } else {
//     o[str[i]] = 1;
//   }
// }
// console.log(o);
// var max = 0;
// for (var k in o) {
//   if (o[k] > max) {
//     max = o[k];
//   }
// }
// console.log(max);
// str = str.split("&");
// console.log(str);
var ele = document.getElementsByClassName('text1');
var but = document.querySelector('.testB');
but.onclick = function () {
    alert('yes');
};

const Info = '[{"uName": "张三", "age": 30}, {"uName": "李四", "age": 25}]';
document.querySelector('.list').innerHTML = JSON.parse(Info)
    .map(({ uName, age }) => `<li><p>${uName}</p><p>${age}</p></li></br>`)
    .join('');
console.log(Object.values(JSON.parse(Info)[0]).join(''));
