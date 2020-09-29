import '../StatsData/StatsData'
import Data from '../../data/DataSource'

import './miniDashboard.css'

class MiniDashboard extends HTMLElement {
    // connectedCallback() {
    //     Data.getGlobalData()
    //         .then((res) => {
    //             const data = res
    //             console.log(data)
    //             this.render()
    //         })
    //         .catch(err => {
    //             console.error(err.message)
    //         })
    // }
    async connectedCallback() {
        this.data = await Data.getGlobalData()
            .then((res) => {
                return res
            })
            .catch(err => {
                console.error(err.message)
            })
        this.render()
    }

    render() {
        console.log(this.data)
        this.innerHTML = 
        `
            <div class="mini-dashboard">
                <stats-data
                    class="daily"  
                    title="Daily Cases" 
                    data="123">
                </stats-data>
                <div class="detail">
                    <stats-data
                        class="confirmed" 
                        title="Confirmed" 
                        data=${this.data.confirmed.value.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="death" 
                        title="Death" 
                        data=${this.data.deaths.value.toLocaleString()}>
                    </stats-data>
                    <stats-data
                        class="recovered" 
                        title="Recovered" 
                        data=${this.data.recovered.value.toLocaleString()}>
                    </stats-data>
                </div>
            </div>
        `
    }
}

customElements.define("mini-dashboard", MiniDashboard)

export default MiniDashboard 