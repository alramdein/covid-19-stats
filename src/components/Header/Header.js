import './header.css'

class Header extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
        `
            <div class="header">
                <h2 class="logo">COVID-19 Stats</h2>
            </div>
        `
    }
}

customElements.define("header-bar", Header)

export default Header 