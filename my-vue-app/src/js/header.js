export class Header {
    selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-overlay]',
        burgerButton: '[data-js-header-burger-button]', // уменьшаем риски ошибок
    }

    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    }
    
    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
        this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
        this.bindEvents()
    }
    
    handleClickBurgerButton = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive) // toggle() — это метод у classList, который переключает класс у элемента
        this.overlayElement.classList.toggle(this.stateClasses.isActive)
        document.documentElement.classList.toggle(this.stateClasses.isLock)
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.handleClickBurgerButton)
    }
}

