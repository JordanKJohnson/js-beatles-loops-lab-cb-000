function theBeatlesPlay(musicians, instruments){

  var sentences = new Array();
  for(var i = 0; i < musicians.length; i++){
    sentences.push(musicians[i]+" plays "+instruments[i]);
  }

  return sentences;
}
