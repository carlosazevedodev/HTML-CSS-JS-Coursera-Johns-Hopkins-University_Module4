var byeSpeaker= {};


(function (window){
  var speakWord="GoodBye";
byeSpeaker.speak = function (name){
  console.log(speakWord+" "+name);
}
window.byeSpeaker=byeSpeaker;
})(window);