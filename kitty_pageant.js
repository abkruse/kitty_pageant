var Cat = function(img, votes) {
  this.img = img;
  this.votes = 0;
}

var kittyPics = [];

for (var i=0; i<14; i++){
  kittyPics.push('kitty_pics/'+[i]+'.jpg');
}

var showCat = function(){
  var idx = Math.floor(Math.random() * kittyPics.length);
  var idx2 = Math.floor(Math.random()* kittyPics.length);
  $('.pix-one').attr('src', kittyPics[idx]);
  $('.pix-two').attr('src', kittyPics[idx2]);
}

showCat();

$('img').on('click', function(e){
  e.preventDefault();
  $('img').removeClass('winner');
  $(this).addClass('winner');
  this.votes =+ 1;
  var idx3 = Math.floor(Math.random() * kittyPics.length);
  $('img').not('.winner').attr('src', kittyPics[idx3]);
});
