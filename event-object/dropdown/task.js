const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.body.querySelectorAll(".dropdown__item");

function onClick() {
    if (dropdownList.classList == 'dropdown__list dropdown__list_active') {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    };
};

dropdownValue.addEventListener('click', onClick);

for (let i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].addEventListener("click", function (event) {
        event.preventDefault();
        dropdownValue.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
};
