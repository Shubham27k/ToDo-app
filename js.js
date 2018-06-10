$content =$('ol')
$items =$('li')

function additem(){
    $text =$('input[type="text"]').val()
    $toadd = '<li><input  type="checkbox"><div class="text">'+$text+'</div> <button class="delete">Delete</button></li>'
    $content.append($toadd)
}

$content.on('click','li button',function() {
    $(this).parent().remove()
})
$content.on('click','input[type="checkbox"]',function(){
    if($(this).val()=='on') $(this).parent().toggleClass('done')
    console.log(this)   
})
