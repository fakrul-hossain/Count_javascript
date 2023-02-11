// count js function
let count = 0;
document.getElementById('increase-btn').addEventListener('click', function(){
    
    count++
    
document.getElementById('counter').innerText = count;

});

document.getElementById('decrease-btn').addEventListener('click', function(){
    count--
    document.getElementById('counter').innerText = count;
});
