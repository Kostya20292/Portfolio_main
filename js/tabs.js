const tabButtons = document.querySelectorAll('.design-list__item');
const tabDescriptions = document.querySelectorAll('.design__descr');
const tabMainImages = document.querySelectorAll('.feature__img');
const tabImages = document.querySelectorAll('.design-images');
const tabTitles = document.querySelectorAll('.design__title');

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden');
            document.title = elem.textContent;
        } else {
            elem.classList.add('hidden');
        }
    });
};

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabImages, dataValue);
        changeContent(tabDescriptions, dataValue);
        changeContent(tabMainImages, dataValue);
        changeContent(tabTitles, dataValue);

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active');
            } else {
                btn.classList.remove('design-list__item_active');
            }
        });
    });
});
