function showMenu() {

    const toggleMenuNav = document.getElementById("toggleMenuNav");
    const itemsMenuNav = document.getElementById("itemsMenuNav");
    const itemMenu = itemsMenuNav.querySelectorAll(".itemMenu");

    toggleMenuNav.addEventListener("click", () => {
        const isMenuVisible = itemsMenuNav.style.display === "block";

        if (!isMenuVisible) {
            itemsMenuNav.style.display = "block";
        } else {
            itemsMenuNav.style.display = "none";
        }
    });
    
    itemMenu.forEach(item => {
        item.addEventListener("click", () => {
            itemsMenuNav.style.display = "none"; // Fecha o menu quando um item é clicado
        });
    });

}

function showItineraries() {
    
}

document.addEventListener("DOMContentLoaded", showMenu);