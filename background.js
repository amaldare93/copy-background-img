function onClickHandler(info, tab){

  console.log(info);
  //
  // var url = $(event.target).css('background-image');
  // if (url != 'none') {
  //   console.log(url.slice(5,-2));
  // }
}

// attach function to menu button
chrome.contextMenus.onClicked.addListener(onClickHandler);

// create context menu button
chrome.runtime.onInstalled.addListener(function(){

  chrome.contextMenus.create({
    'title': 'Copy Background Image',
    'id': 'contextButton',
    'contexts': ['all']
  });

});
