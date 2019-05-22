
function onError(error) {
  console.log(`My favour fb shortcut Error: ${error}`);
}

function onGot(item) {
  if (item.url) {
    //console.log("url: " + item.url);
    var url = item.url;

    browser.tabs.create({
      url: url
     });

  } else {
    //console.log("open settings");
    var settings_page = browser.runtime.openOptionsPage();
  }

}

function openPage() {
  var getting = browser.storage.sync.get("url");
  getting.then(onGot, onError);
}

browser.browserAction.onClicked.addListener(openPage);

