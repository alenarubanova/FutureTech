const rootSelector = '[data-js-tabs]'

class Tabs {
    selectors = {
        root: rootSelector,
        button: ['data-js-tabs-button'],
        button: ['data-js-tabs-content']
    }

    stateClasses = {
        isActive: 'is-active',

    }

    stateAttributes = {
        ariaSelected: 'aria-selected',
        tabIndex: 'tabindex',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.buttonsElements = this.rootElement.querySelectorAll(this.selectors.button)
        this.contentElements = this.rootElement.querySelectorAll(this.selectors.content)
        this.state = {
            activeTabIndex: [...this.buttonsElements]
            .findIndex((buttonElement) => buttonElement.classList.contains(this.stateClasses.isActive))
        }
        this.limitTabsIndex = this.buttonsElements.length - 1
        this.bindEvents()
    }

    updateUI() {
        const { activeTabIndex } = this.state
        this.buttonsElements.forEach((buttonElement, index) => {
            const isActive = index === activeTabIndex
            buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
        })

        this.contentElements.forEach((contentElement, index) => {
            const isActive = index === activeTabIndex
            contentElement.classList.toggle(this.stateClasses.isActive, isActive)
        }) 
    }

    onButtonClick(buttonIndex) {
        this.state.activeTabIndex = buttonIndex
        this.updateUI()
    }

    bindEvents() {
        this.buttonsElements.forEach((buttonElement, index) => {
            buttonElement.addEventListener('click', () => this.onButtonClick(index))
        })
    }
}

export class TabsCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll(rootSelector).forEach((element) => {
            new Tabs(element)
        })
    }
}
