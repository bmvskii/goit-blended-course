document.addEventListener('DOMContentLoaded', () => {
    const listRef = document.querySelector('.accordeon-list');

    const onItemClickHandler = (event) => {
        const { target, currentTarget } = event;
        const activeAccordeonClass = 'accordeon-list-item--open';
        const activeElement = currentTarget.querySelector(`.${activeAccordeonClass}`);
        const currentListItem = target.closest('.accordeon-list-item');

        if (activeElement && activeElement !== currentListItem) {
            activeElement.classList.remove(activeAccordeonClass)
        }

        if (currentListItem) {
            if (currentListItem.classList.contains(activeAccordeonClass)) {
                currentListItem.classList.remove(activeAccordeonClass);
            } else {
                currentListItem.classList.add(activeAccordeonClass); 
            }
        }
     };

     listRef.addEventListener('click', onItemClickHandler);
});