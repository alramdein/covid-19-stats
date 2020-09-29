import './titleBar.css'

class TitleBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = 
        `
            <div class="title-bar">
                <h1>COVID-19 Statistic</h1>
            </div>
        `
    }
 }

 customElements.define("title-bar", TitleBar)

 export default TitleBar 