import '../SearchBar/SearchBar'
import './countryDetail.css'

class CountryDetail extends HTMLElement {
    connectedCallback() {
        this.firstRender()
    }

    set setCountryData(data) {
        this._countryName = data.countryName
        this._confirmed = data.confirmed.value
        this._deaths = data.deaths.value
        this._recovered = data.recovered.value
        this.render()
    }

    set setErrorMessage(message) {
        this._errorMessage = message
        this.renderError()
    }

    firstRender() {
        this.innerHTML = 
        `
            <p class="first-render">Search country to see its COVID-19 detail</p>
        `
    }

    render() { 
        this.innerHTML = 
        `
            <div class="country-detail">
                <h1>${this._countryName}</h1>
                <div class="detail">
                    <stats-data
                        class="confirmed" 
                        title="Confirmed" 
                        data=${this._confirmed.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="deaths" 
                        title="Deaths" 
                        data=${this._deaths.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="recovered" 
                        title="Recovered" 
                        data=${this._recovered.toLocaleString()}>
                    </stats-data>
                </div>
            </div>
        `
    }

    renderError() {
        this.innerHTML = 
        `
            <p class="error-render">${this._errorMessage}</p>
        `
    }

    
}

customElements.define("country-detail", CountryDetail)

export default CountryDetail