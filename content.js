$("body").on("click", function(event){
  var url = $(event.target).css("background-image");
  if (url != "none") {
    console.log(url.slice(5,-2));
  }
});
console.log('hello');
