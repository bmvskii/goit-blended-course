document.addEventListener('DOMContentLoaded', () => {
    const modalWindow = document.querySelector('.modal');

    const hideModal = () => {
        modalWindow.classList.remove('modal--visible');
    }

    const showModal = () => {
        modalWindow.classList.add('modal--visible');
    }

    document.body.addEventListener('click', (e) => {
        const { target } = e;

        if (target.classList.contains('modal-trigger')) {
            showModal();
            return;
        }

        if (target.classList.contains('modal__button--close') || target.classList.contains('modal')) {
            hideModal();
            return;
        }


    });
});

