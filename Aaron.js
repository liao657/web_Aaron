
$( ".animation" ).delay(800).fadeOut(300).fadeIn( 400 )    ;
$( "#s1" ).fadeOut(200)  .slideDown(1000);
// 透過 arr 陣列儲存要變化的文字內容
const arr = ['Full', 'Full Stack', 'Full Stack Development']
let count = 0;
setInterval( function() { 
  count += 1;
  const typewriteAni = document.getElementById('typewrite-animated');
  const typewriteText = document.getElementById('typewrite-text');
  if (typewriteAni.classList.contains('typewriter')) {
    typewriteAni.classList.remove('typewriter');
  } else {
    typewriteAni.classList.add('typewriter');
    typewriteAni.addEventListener('animationend', function() {
      setTimeout(function() {
        typewriteText.textContent = '';
        typewriteAni.classList.remove('typewriter');
      }, 800)
    })
  }
  typewriteText.textContent = arr[count%3];
}, 2000);

var scroller = $(window).smoothDivScroll({ 
    autoScrollingMode: "always", 
    setupComplete: function() { 
     scroller.smoothDivScroll("stopAutoScrolling"); 
    } 
}); 

setTimeout(function(){ 
    scroller.smoothDivScroll("startAutoScrolling"); 
},2000) //2000 is delay in milliseconds 