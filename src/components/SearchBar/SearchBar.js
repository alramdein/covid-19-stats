import './searchBar.css';

class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set clickEvent(event) {
        this._clickEvent = event
        this.render()
    }

    get value() {
        const searchValue = this.querySelector("#country").value
        return searchValue
    }

    render() { 
        this.innerHTML =
        `
            <div class="search-container">
                <input type="text" id="country" placeholder="Search country.." name="country">
                <button type="submit" id="searchBtn">Search</button>
            </div>
            <p class="search-example"><i>ex: Indonesia</i></p>
        `

        const buttonSearch = this.querySelector("#searchBtn")
        buttonSearch.addEventListener("click", this._clickEvent)
    }

    
}

customElements.define("search-bar", SearchBar)

export default SearchBar