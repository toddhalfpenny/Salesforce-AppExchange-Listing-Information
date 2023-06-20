// popup.js


document.querySelector("#copy").addEventListener("click", copy);
// REQUEST DETAILS
(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    try {
        const listingDetail = await chrome.tabs.sendMessage(tab.id, {event: "REQUEST_LISTING_INFO"});
    
        console.log(listingDetail);
        updatePopup(listingDetail.details.LISTING_STORE);
    } catch(e) {
        console.error(e)
        // TODO UPDATE UI 
    }
  })();


function updatePopup(listingDetail){
    const title = document.getElementById("title");
    title.textContent = listingDetail.listing.name;

    const relLink = document.getElementById("rel-link");
    relLink.textContent = 'packaging/installPackage.apexp?p0=' + listingDetail.listing.solution.solution.version.packageVersionId;

    const shortDesc = document.getElementById("short-description");
    shortDesc.textContent = listingDetail.listing.description;
}

function copy() {
    let copyText = document.getElementById("rel-link").innerText;
    console.log("copyText", copyText);
    navigator.clipboard.writeText(copyText).then(() => {
        console.log("copied");
        /* clipboard successfully set */
      }, () => {
        console.log("failed");
        /* clipboard write failed */
      });
  }
  