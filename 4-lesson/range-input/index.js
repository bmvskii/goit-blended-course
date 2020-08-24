document.addEventListener('DOMContentLoaded', () => {
    const borderRadiusRangeInput = document.querySelector('.form__input--borderRadius');
    const heightRangeInput = document.querySelector('.form__input--height');
    const widthRangeInput = document.querySelector('.form__input--width');
    const shape = document.querySelector('.shape');
    
    const oldHeight = Number.parseInt(getComputedStyle(shape).height);
    const oldWidth = Number.parseInt(getComputedStyle(shape).width);

    const changeBorderRadius = (event) => {
        const { target: { valueAsNumber } } = event;
        shape.style.borderRadius = `${valueAsNumber}%`;
    }

    borderRadiusRangeInput.addEventListener('input', changeBorderRadius);

    heightRangeInput.addEventListener('input', (event) => {
        const { target: { valueAsNumber } } = event;
        shape.style.height = `${oldHeight + valueAsNumber}px`;
    });

    widthRangeInput.addEventListener('input', (event) => {
        const { target: { valueAsNumber } } = event;
        shape.style.width = `${oldWidth + valueAsNumber}px`;
    });

    const ingredients = [
        "Картошка",
        "Грибы",
        "Чеснок",
        "Помидоры",
        "Зелень",
        "Приправы",
    ];
    
    const createListItem = (text) => {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }

    const list = document.querySelector('#ingredients');
    
    ingredients.forEach(ingredient => {
        const newIngredient = createListItem(ingredient);
        list.appendChild(newIngredient);
    });
});