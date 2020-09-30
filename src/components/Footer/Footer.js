import './footer.css'

class Footer extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
        `
            <div class="footer">
                <p class="copyright">Alif Ramdani &copy; 2020</p></br>
                <a href='https://github.com/mathdroid/covid-19-api'>Data consumed from mathdroid/covid-19-api</a></br>
                <a href='https://pngtree.com/so/attention'>favicon png from pngtree.com</a>
            </div>
        `
    }
}

customElements.define("footer-bar", Footer)

export default Footer 