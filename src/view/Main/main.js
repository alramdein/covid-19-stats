import '../../components/Header/Header'
import '../../components/TitleBar/TitleBar'
import '../../components/StatsData/StatsData'
import '../../components/CountryDetail/CountryDetail'
import '../../components/Footer/Footer'

import './main.css'

import Data from '../../data/DataSource'

const main = async () => {
    const mainElement = document.querySelector("#main")
    const dataSource = new Data()

    const renderMainErrorMsg = () => {
        mainElement.innerHTML = 
        `
            <div class="error-message">
                <h3>Request failed. Please check your internet connection.</h3>
                <h3>If the error still occurs, it may be the problem in the API provider used in this project.</h3>
                <p>This project used an API from https://github.com/mathdroid/covid-19-api. 
                Please check browser's DevTool for more information.</p>
            </div>
        `
    }

    /* main html start here */
    try {
        const data = await dataSource.getGlobalData()

        const renderResult = data => {
            mainElement.innerHTML = 
            `
                <header-bar></header-bar>
                <title-bar 
                    text="COVID-19 Global Statistic">
                </title-bar>
                <div class="mini-dashboard">
                    <stats-data
                        class="confirmed" 
                        title="Confirmed" 
                        icon="<i class='fa fa-clipboard-check fa-lg'></i>"
                        data=${data.confirmed.value.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="deaths" 
                        title="Deaths"
                        icon="<i class='fa fa-skull fa-lg'></i>" 
                        data=${data.deaths.value.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="recovered" 
                        title="Recovered"
                        icon="<i class='fa fa-user-plus fa-lg'></i>" 
                        data=${data.recovered.value.toLocaleString()}>
                    </stats-data>
                </div>
                <div class="country-detail-container">
                    <h2>Detail Per Country</h2>
                    <search-bar></search-bar>
                    <country-detail></country-detail>
                </div>

                <div class="more-info-covid">
                    <p><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
                        More information about COVID-19 
                        <i class='fa fa-arrow-right fa-sm'></i>    
                        </a></p>
                </div>
                <footer-bar></footer-bar>
            `
        }
        
        renderResult(data)

        const countryDetail = document.querySelector("country-detail")
        const searchButton = document.querySelector("search-bar")

        const onClickSearch = async () => {
            const searchedCountry = searchButton.value
            try {
                const countryData = await dataSource.searchCountry(searchedCountry)
                countryData.countryName = searchedCountry
                countryDetail.setCountryData = countryData
            } catch(err) {
                if(!searchedCountry) {
                    countryDetail.setErrorMessage = `Search input can't be empty.`
                    console.error(`Error message: ${err.message}`)
                } else {
                    countryDetail.setErrorMessage = `Invalid search keyword or data not available.`
                    console.error(`Error message: ${err.message}`)
                }
            }
        }

        searchButton.clickEvent = onClickSearch

    } catch(err) {
        renderMainErrorMsg()
        console.error(`Error message: ${err.message}`)
    }
}

export default main
