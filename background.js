(function() {

  // Create item in the context menu
  chrome.runtime.onInstalled.addListener(function(){
    chrome.contextMenus.create({
      'title': 'Copy Background Image',
      'id': 'contextButton',
      'contexts': ['all']
    });
  });

  // Attach onClickHandler function to menu item
  chrome.contextMenus.onClicked.addListener(onClickHandler);

  // Sends a message to the content script
  // tell it to do something
  function onClickHandler(info, tab){
    chrome.tabs.sendMessage(tab.id, {greeting: 'hello'}, function(response) {

    });
  }

})();
