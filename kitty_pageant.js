var Cat = function(img, votes) {
  this.img = img;
  this.votes = Math.floor(Math.random()*5000);
}

var kittyPics = [];
  kittyPics.push('kitty_pics/0.jpg');
  kittyPics.push('kitty_pics/1.jpg');
  kittyPics.push('kitty_pics/2.jpg');
  kittyPics.push('kitty_pics/3.jpg');
  kittyPics.push('kitty_pics/4.jpg');
  kittyPics.push('kitty_pics/5.jpg');
  kittyPics.push('kitty_pics/6.jpg');
  kittyPics.push('kitty_pics/7.jpg');
  kittyPics.push('kitty_pics/8.jpg');
  kittyPics.push('kitty_pics/9.jpg');
  kittyPics.push('kitty_pics/10.jpg');
  kittyPics.push('kitty_pics/11.jpg');
  kittyPics.push('kitty_pics/12.jpg');
  kittyPics.push('kitty_pics/13.jpg');

var showCat = function(){
  var idx = Math.floor(Math.random() * 14);
  var idx2 = Math.floor(Math.random()*14);
  $('.cat-picone').prepend('<img src = \" ' + kittyPics[idx] + '\">');
  $('.cat-pictwo').prepend('<img src = \" ' + kittyPics[idx2] + '\">');
  var votes1 = Math.floor(Math.random()*5000);
  var votes2 = Math.floor(Math.random()*5000);
  $('#cat-totalone').append(votes1);
  $('#cat-totaltwo').append(votes2);
}

showCat();

$('p').hide()

$('img').on('click', function(){
  $('p').show();
  $(this).addClass('winner');
  $('.winner').append('<p><strong>Thanks for giving me one more vote!</strong></p>')
});


