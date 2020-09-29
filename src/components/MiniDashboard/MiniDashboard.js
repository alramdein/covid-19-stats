

class MiniDashboard extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = 
        `
            <div class="mini-dashboard">
                
            </div>
        `
    }
}

customElements.define("mini-dashboard", MiniDashboard)