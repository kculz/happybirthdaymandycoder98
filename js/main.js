function bubbles(){
    var count = 200;
    var section = document.querySelector('section');
    var i = 0;
    while (i < count){
        var bubbles = document.createElement('i');
        var x = Math.floor(Math.random() * window.innerWidth);
        var y = Math.floor(Math.random() * window.innerWidth);
        var size = Math.random() * 10;
        bubbles.style.left= x +'px';
        bubbles.style.top = y + 'px';
        bubbles.style.width = 1 + size + 'px';
        bubbles.style.height = 1 + size + 'px';
        bubbles.style.animationDuration = 5 + size + 's'
        bubbles.style.animationDelay = - size + 's'
        section.appendChild(bubbles);
        i++;
    }
}
bubbles()