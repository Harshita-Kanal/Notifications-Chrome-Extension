var options = {
type: "basic",
title: "Notification from opengenus foundation",
message: "https://iq.opengenus.org",
iconUrl: "icon128.png"
};


chrome.notifications.create(options, callback);

function callback(){
    console.log('Popup done!')
}