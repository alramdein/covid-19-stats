class StatsData extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute("title") || null
        this.data = this.getAttribute("data") || null
        
        this.render()
    }

    render() {
        this.innerHTML = 
        `
        <div class="stats-data">
            <h2>${this.title}</h2>
            <h1>${this.data}</h1>
        </div>
        `
    }
}

customElements.define("stats-data", StatsData)