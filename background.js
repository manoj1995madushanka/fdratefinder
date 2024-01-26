chrome.action.onClicked.addListener((tab) => {
    var newURL = chrome.runtime.getURL("tab.html");
    chrome.tabs.create({ url: newURL + "?=" + tab.url });
});