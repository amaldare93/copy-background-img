var copyBackgroundImage = (function() {
  'use strict';

  // Variable to store the URL to be copied
  var backgroundImageURL = null;

  // On right-click, get item that was clicked, and get its backgound image URL
  // if there isnt one, keep backgroundImageURL as null
  document.addEventListener('contextmenu', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    backgroundImageURL = window
                .getComputedStyle(target, null)
                .getPropertyValue("background-image")
                .slice(5,-2) || null;
    console.log(backgroundImageURL);
  }, false);

  // When a user clicks the "Get Background Image" context menu button
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){

      // check if last item clicked has a background image, then copy it to clipboard
      // if there is no bg image, dont copy to clipboard
      if(backgroundImageURL != null){
        copyToClipboard(backgroundImageURL);
      }
      sendResponse({backgroundImageURL: backgroundImageURL});

      return true;
    }
  );

// Copied from dannyid
// https://gist.github.com/dannyid
  function copyToClipboard(text) {
    var input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  };


  // Attempt to copy background image AS an image (not url)
  function copyImageToClipboard(url) {
    console.log("alpha1");
    var img = document.createElement('img');
    img.style.position = 'fixed';
    img.style.opacity = 0;
    img.src = url;
    document.body.appendChild(img);

    var range = document.createRange();
    range.setStartBefore(img);
    range.setEndAfter(img);
    range.selectNode(img);
    window.getSelection().addRange(range);

    try {
      // Now that we've selected the anchor text, execute the copy command
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copy command was ' + msg);
    } catch(err) {
      console.log('Oops, unable to copy');
    }
    window.getSelection().removeAllRanges();
    document.body.removeChild(img);
  };
}());
