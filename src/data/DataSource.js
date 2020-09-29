import axios from 'axios'

class DataSource {
    static async getGlobalData() {
        this.baseUrl = 'https://covid19.mathdro.id'
        try {
            const response = await axios.get(`${this.baseUrl}/api`)
            const data = response.data
            return data
        } catch (err) {
            console.error(`Error message: ${err.message}`)
        }
        
    }
}

export default DataSource