function onClickHandler(info, tab){
  console.log(tab.id);
  chrome.tabs.sendMessage(tab.id, {greeting: 'hello'}, function(response) {
    console.log(response);
  });
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
