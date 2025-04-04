/**
 * Displays the top banner by removing the 'hide' class from it.
 * Uses a short delay to ensure the transition is triggered.
 */
function showTopBanner() {
    if (sessionStorage.getItem("topBannerClosed")|| navigator.doNotTrack === "1") return;
    var banner = document.getElementById("top-banner");
	banner.classList.remove("hide");
	setTimeout(function () {
		banner.classList.add("show");
	}, 50); // Delay to ensure the transition is triggered
    randomizePosition(banner);
}

/**
 * Displays the footer banner by removing the 'hide' class from it.
 */
function showFooterBanner() {
    if (document.cookie.includes("footerBannerClosed=true")|| navigator.doNotTrack === "1") return;
	document.getElementById("footer-banner").classList.remove("hide");
}

/**
 * Displays the modal by removing the 'hide' class from it.
 */
function showModal() {
    if (localStorage.getItem("modalClosed")|| navigator.doNotTrack === "1") return;
    document.getElementById("modal").classList.remove("hide");
}

/**
 * Hides the modal by adding the 'hide' class to it.
 */
function closeModal() {
	document.getElementById("modal").classList.add("hide");
    localStorage.setItem("modalClosed", "true");
}

/**
 * Hides the top banner by adding the 'hide' class to it.
 */
function closeTopBanner() {
	document.getElementById("top-banner").classList.add("hide");
    sessionStorage.setItem("topBannerClosed", "true");
}

/**
 * Hides the footer banner by adding the 'hide' class to it.
 */
function closeFooterBanner() {
	document.getElementById("footer-banner").classList.add("hide");
    document.cookie = "footerBannerClosed=true; path=/; max-age=86400";
}

/**
 * Clears all stored data.
 */
function clearData() {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = "footerBannerClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("All data cleared!");
    location.reload();
}

/**
 * Moves the close button around the banner to make it harder to click.
 */
function makeCloseButtonAnnoying(id) {
    let button = document.getElementById(id);
    button.addEventListener("mouseover", function () {
        button.style.position = "absolute";
        button.style.top = Math.random() * window.innerHeight + "px";
        button.style.left = Math.random() * window.innerWidth + "px";
    });
}

/**
 * Randomly positions an element on the screen.
 */
function randomizePosition(element) {
    element.style.position = "absolute";
    element.style.top = Math.random() * window.innerHeight + "px";
    element.style.left = Math.random() * window.innerWidth + "px";
}

// Attach event listeners
makeCloseButtonAnnoying("close-modal");
makeCloseButtonAnnoying("close-top-banner");
makeCloseButtonAnnoying("close-footer-banner");
document.getElementById("clear-data").addEventListener("click", clearData);
// Event listeners to close the modal, top banner, and footer banner when 'x' is clicked
document.getElementById("modal").addEventListener("click", closeModal);
document.getElementById("top-banner").addEventListener("click", closeTopBanner);
document
	.getElementById("footer-banner")
	.addEventListener("click", closeFooterBanner);

// Show the footer banner after a delay of 1 second
setTimeout(showFooterBanner, 1000);

// Show the top banner after a delay of 2 seconds
setTimeout(showTopBanner, 2000);

// Show the modal after a delay of 4 seconds
setTimeout(showModal, 4000);