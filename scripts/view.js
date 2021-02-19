MOBILE_WIDTH = 700;

function resizeSearchInput(evt) {
    let input = document.getElementById('searchInput');
    let clientWidth = document.documentElement.clientWidth;
    if (input.style.width === "0px" || input.style.width === "" && clientWidth <= MOBILE_WIDTH) {
        evt.preventDefault();
        setSearchWidth("100%", "calc(100% - 42px*2)");
    }
}

document.getElementById('submitButton').addEventListener(
    'click', resizeSearchInput, false
);

document.addEventListener('click', function(event) {
    let search = document.getElementById('main-navigation__search');
    let clientWidth = document.documentElement.clientWidth;
    if (!search.contains(event.target) && clientWidth <= MOBILE_WIDTH) {
        setSearchWidth("82px", "0");
    }
});

setSearchWidth = (searchWidth, inputWidth) => {
    document.getElementById('main-navigation__search').style.width = searchWidth;
    document.getElementById('searchInput').style.width = inputWidth;
}
