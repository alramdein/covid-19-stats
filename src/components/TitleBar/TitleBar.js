import './titleBar.css'

class TitleBar extends HTMLElement {
    connectedCallback() {
        this.text = this.getAttribute("text")
        this.render()
    }

    render() {
        this.innerHTML = 
        `
            <div class="title-bar">
                <h1>${this.text}</h1>
            </div>
        `
    }
 }

 customElements.define("title-bar", TitleBar)

 export default TitleBar 