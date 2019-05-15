$(function() {
  
    $('header a').click(function(e) {
      e.preventDefault();
      
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
  
        $('ul').prepend('<li id="inputText"><input type="text" /></li>');
        $('input').focus();
  
        $('input').bind('keypress', function(e) {
          if(e.keyCode === 13) {
            var text = $('input').val();
                      
            if (text !== '') {
              $('input').hide(0, function() {
                $(this).parent().html(text + '<span>x</span>');
                $(this).remove();
                $('header a').removeClass('active');
              });
            }
          }
        });
      }
    });
    
    $(document).on('click', 'li span', function() {
      $(this).parent().hide(0, function() {
        $(this).remove();
      });
    });
  
  });