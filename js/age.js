function age() {
  let num = prompt("At what year did you discover Avicii's music?");

  if (num <= 2010) {
    alert('Wow! you lived on the golden era of avicii and you probably enjoyed the best music out there. Congrats!');

  }else if (num <= 2017) {
    alert('That is awesome!! you can listen the legacy of avicii give us on your favourite streaming platform. That is a lot of good music')
  }
  else if (num >= 2018){
    alert("Im sorry you couldn't see it on his glorious moments at tomorroland shows. but you can always can watch him in his Youtube channel. Im sure you could have been a gold fan")
  }
  else if (num < 2005){
    alert('That is almost impossible. But if it is true, you are unique!')
  }
  else if (num = isNaN || null){
    alert('Please, enter a year from 2005 onwards only using numbers please.');
}
}
age();