import axios from 'axios'

class DataSource {
    constructor() {
        this.baseUrl = 'https://covid19.mathdro.id'
    }
    
    async getGlobalData() {
        try {
            const response = await axios.get(`${this.baseUrl}/api`)
            const data = response.data
            return data
        } catch (err) {
            return err
        }
    }

    async searchCountry(country) {
        try {
            const response = await axios.get(`${this.baseUrl}/api/countries/${country}`)
            const data = response.data
            return data
        } catch (err) {
            return err
        }
    }
}

export default DataSource