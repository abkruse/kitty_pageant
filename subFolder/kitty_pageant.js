
var showCat = function(){
  do {
    var idx = Math.floor(Math.random() * images.length);
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
    console.log(res.data[0].link);
    showCat();
  })

$('img').on('click', function(e){
  e.preventDefault();
  $('img').removeClass('winner');
  $(this).addClass('winner');
  votes += 1;
  var idx3 = Math.floor(Math.random() * images.length);
  $('img').not('.winner').attr('src', images[idx3].link);
});

console.log(votes);
