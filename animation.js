function animation(obj, target, callback) {
    clearInterval(obj.times);
    let flag = true;
    obj.times = setInterval(() => {
        let step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? (step = Math.ceil(step)) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.times);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
