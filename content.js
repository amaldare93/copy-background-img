// $('body').on('click', function(){
//
//   var url = $(event.target).css('background-image');
//   if (url != 'none') {
//     console.log(url.slice(5,-2));
//   }
//
// });
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){

    alert('recieving message');
    console.log(request.greeting);
    console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension');

    if (request.greeting == 'hello'){
      sendResponse({farewell: 'goodbye'});
    }
    return true;
  }
);
