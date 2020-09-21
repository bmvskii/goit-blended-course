document.addEventListener('DOMContentLoaded', () => {
    const tabsContentRef = document.querySelector('.tabs-content');
    
    const tabsRef = document.querySelector('.tabs');
    const secondTabsRef = document.querySelector('.second-tabs');

    const onTabClickHandler = (event) => {
        const { target, currentTarget } = event;

        if (target === currentTarget) {
            return;
        }

        const currentTab = target.closest('.tab');
        const activeTab = currentTarget.querySelector('.tab--active');

        const { actionIndex: activeTabIndex } = activeTab.dataset;
        const { actionIndex: currentTabIndex } = currentTab.dataset;

        // const activeTabContent = tabsContentRef.querySelector('.tab-content--active');
        // const currentTabIndex = [...currentTarget.children].findIndex(tab => tab === currentTab);

        activeTab.classList.remove('tab--active');
        currentTab.classList.add('tab--active');

        tabsContentRef.children[activeTabIndex].classList.remove('tab-content--active');
        tabsContentRef.children[currentTabIndex].classList.add('tab-content--active');
    };

    tabsRef.addEventListener('click', onTabClickHandler);
    secondTabsRef.addEventListener('click', onTabClickHandler);
});