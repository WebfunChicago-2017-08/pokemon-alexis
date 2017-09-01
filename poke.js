
// for(var i = 1; i <= 151; i++){
//     $('#bodyContent').append("<img src='http://pokeapi.co/media/img/"+i +".png'>");
//     }
var images = "";   
    
for(var i = 1; i <= 151; i++){
    images += "<img src='http://pokeapi.co/media/img/"+ i +".png'>";
}

print(images);

$('img').hover(
    function(){
        $(this).css('width', '150px');
    }, function(){
        $(this).css('width', '');
    }
)
$('h1').click(function(){
    $(this).hide();
})

function print(message) {
    var outputDiv = document.getElementById('bodyContent');
    outputDiv.innerHTML = message;
}

