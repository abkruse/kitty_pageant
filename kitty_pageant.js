
var images = [];
var votes = 0;

var showCat = function(){
  var idx = Math.floor(Math.random() * images.length);
  do {
    var idx2 = Math.floor(Math.random()* images.length);
    $('.pix-one').attr('src', images[idx].link);
    $('.pix-two').attr('src', images[idx2].link);}
  while(idx === idx2);
}

$.ajax ({
  url: 'https://api.imgur.com/3/album/Mdqtz/images.json',
  headers: {
    'Authorization' : 'Client-ID 59537354f1c2cb7'
    }
  })
  .done(function(res){
    images = res.data;
    showCat();
  })

$('img').on('click', function(e){
  e.preventDefault();
  $('img').removeClass('winner');
  $(this).addClass('winner');
  images.votes += 1;
  var idx3 = Math.floor(Math.random() * images.length);
  $('img').not('.winner').attr('src', images[idx3].link);
});

console.log(votes);
