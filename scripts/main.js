console.log("main.js");
var s = document.createElement('script');
s.src = chrome.runtime.getURL('/scripts/shareVars.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.remove();
};

console.log("Script added");
var listingDetail;

// Event listener
document.addEventListener('APPX_LISTING_INFO_connectExtension', function(storesEvent) {
    console.log(storesEvent.detail);
    listingDetail = storesEvent.detail;
    console.log(storesEvent.detail.LISTING_STORE.listing.solution.solution.version.packageVersionId);

});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log("Request info from extension");
      if (request.event === "REQUEST_LISTING_INFO")
        sendResponse({details: listingDetail});
    }
  );