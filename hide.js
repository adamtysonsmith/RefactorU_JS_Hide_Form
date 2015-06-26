$(document).ready(function(){
    
    var $form = $('#hidden-form');
    var $button = $('#form-button');
    
    $button.on('click', function() {
        // Toggle the form visibility
        $form.toggle();
        
        // Based on current display property, change the button text
        if ($form.css('display') === 'block') {
            $(this).text('Hide Form'); 
        } else {
            $(this).text('Show Form'); 
        }
    });
    
    // When input blurs, set the paragraph element value to the input value
    $('#input-bio').on('blur', function() {
        var inputValue = $(this).val();
        $('.bio-content').text(inputValue);
    });
    
    $('#input-books').on('blur', function() {
        var inputValue = $(this).val();
        $('.books-content').text(inputValue);
    });
    
    $('#input-libraries').on('blur', function() {
        var inputValue = $(this).val();
        $('.fav-libraries-content').text(inputValue);
    });
    
});