// function addCss() {
// 	let divs = document.body.querySelectorAll('div');
// 	console.log(divs);
// 	divs.forEach(function(div) {
// 		div.classList.add('m-1 p-1');
// 	});
// 	let serverTime = document.getElementById('serverTime');
// 	serverTime.classList.add('text-base');
// }
chrome.runtime.onInstalled.addListener(() => {
  // chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  // 	if (changeInfo.status == "complete" && tab.url.startsWith('http://www.jjwxc.net/')) {
  // 		console.log(tab.url);
  // 		chrome.scripting.executeScript({
	 //    	target: {tabId: tabId},
	 //    	function: addCss
  // 		});
  // 	}
  // });
});
