import './countryDetail.css'

class CountryDetail extends HTMLElement {
    connectedCallback() {
        this.countriesDetailElement = 
        this.render()
    }

    render() {
        this.innerHTML = 
        `
            <div class="country-detail">
                <table>
                    <tr>
                        <th>No</th>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>
                    // ${this.countriesDetailElement}
                    <tr>
                        <td>Yeaa</td>
                    </tr>
                </table>
            </div>
        `
    }
}

customElements.define("country-detail", CountryDetail)

export default CountryDetail