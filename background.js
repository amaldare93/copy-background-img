chrome.runtime.onInstalled.addListener(function(){

  chrome.contextMenus.create({
    "title": "Copy Background Image"
  });
  
});
