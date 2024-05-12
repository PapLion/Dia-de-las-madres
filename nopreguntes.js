$(function(){
  $('.one').on('click', function() { 
    var $two = $('.two');
    $two.css('display', 'block'); 

    setTimeout(function() {
      $two.css({
        'opacity': '1',
        'transform': 'translateY(0)' 
      });
    }, 10); 
  });

  $('.close').on('click', function() {
    var $two = $(this).parent();
    $two.css({
      'opacity': '0',
      'transform': 'translateY(100vh)' 
    });

    setTimeout(function() {
      $two.hide(); 
      $two.css({
        'transform': 'translateY(0)' 
      });
    }, 500);
  });
});

function mostrarExplosion() {
  const intervalo = setInterval(() => { 
    const globo = document.createElement('div');
    globo.classList.add('globo');
    globo.style.top = `${Math.random() * window.innerHeight}px`;
    globo.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(globo);
  }, 25);

  setTimeout(() => {
    clearInterval(intervalo); 

    setTimeout(() => {
      document.querySelectorAll('.globo').forEach(globo => globo.remove());
    }, 5000); 
  }, 10000);
}
