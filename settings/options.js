function saveOptions(e) {
  e.preventDefault();
  let link = document.querySelector("#link").value;
  if (link) {
	  if (!link.startsWith('http://') && !link.startsWith('https://')) {
	      link = "https://" + link;
	  }
	  browser.storage.sync.set({
	    url: link
	  });
	   window.alert("Saved. You can clicking toolbar fb icon to open " + link);
  } else {
	window.alert("Link cannot be empty.");
  }
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#link").value = result.link || "";
  }

  function onError(error) {
    console.log(`My favour fb shortcut settings Error: ${error}`);
  }

  var getting = browser.storage.sync.get("url");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


