$(document).ready(function(){
    
    var $form = $('#hidden-form');
    var $button = $('#form-button');
    
    $button.on('click', function() {
        $form.toggle();
        $(this).text('Hide Form');
    });
    
});