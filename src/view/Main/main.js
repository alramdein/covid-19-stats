import '../../components/Header/Header'
import '../../components/TitleBar/TitleBar'
import '../../components/StatsData/StatsData'
import '../../components/CountryDetail/CountryDetail'
import '../../components/Footer/Footer'

import './main.css'

import Data from '../../data/DataSource'

const main = () => {
    const mainElement = document.querySelector("#main")
    const getData = async () => {
        try {
            const data = await Data.getGlobalData()
            return data
        }catch(err) {
            console.error(err.message)
        }
    }
    
    getData().then( data => {
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
                    data=${data.confirmed.value.toLocaleString()}>
                </stats-data>
                <stats-data
                    class="deaths" 
                    title="Deaths" 
                    data=${data.deaths.value.toLocaleString()}>
                </stats-data>
                <stats-data
                    class="recovered" 
                    title="Recovered" 
                    data=${data.recovered.value.toLocaleString()}>
                </stats-data>
            </div>
            <country-detail></country-detail>
            <footer-bar></footer-bar>
            
        `
    })
    // .catch(err) {
    //     console.error(err.message)
    // }
  
}

export default main
