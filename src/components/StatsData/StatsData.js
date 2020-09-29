import './statsData.css'

class StatsData extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute("title") || null
        this.data = this.getAttribute("data") || null
        this.class = this.getAttribute("class") || null
        
        this.render()
    }

    render() {
        this.innerHTML = 
        `
        <div class="stats-data ${this.class}">
            <h3 id="title">${this.title}</h3>
            <h1 id="data">${this.data}</h1>
        </div>
        `
    }
}

customElements.define("stats-data", StatsData)

export default StatsData 