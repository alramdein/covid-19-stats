import './statsData.css'

class StatsData extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute("title") || null
        this.data = this.getAttribute("data") || null
        this.class = this.getAttribute("class") || null
        this.icon = this.getAttribute("icon") || ''
        
        this.render()
    }

    render() {
        this.innerHTML = 
        `
        <div class="stats-data ${this.class}">
            <p id="title">${this.title}</p>
            <div id="icon">${this.icon}</div>
            <h3 id="data">${this.data}</h3>
        </div>
        `
    }
}

customElements.define("stats-data", StatsData)

export default StatsData 