setTimeout(function() {
    console.log("shareVars calling");
    /* Example: Send data from the page to your Chrome extension */
    document.dispatchEvent(new CustomEvent('APPX_LISTING_INFO_connectExtension', {
        detail: window.stores // Some variable from Gmail.
    }));
}, 0);