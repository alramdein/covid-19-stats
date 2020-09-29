import './components/MiniDashboard/MiniDashboard'
import './components/TitleBar/TitleBar'
import './style.css'

const main = document.querySelector("#main")

main.innerHTML = 
`
    <title-bar></title-bar>
    <mini-dashboard></mini-dashboard>
`