document.getElementById('openApp').addEventListener('click', function() {
    chrome.tabs.create({ url: './index.html' });
});
