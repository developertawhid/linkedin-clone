import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'

function Widgets() {

    const newsArticale = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticale("PAPA React is back", "Top news - 9099 readiers")}
            {newsArticale("Coronavirus: UK", "Top news - 886 readiers")}
            {newsArticale("Tesla hits new", "Cars & Auto readiers")}
            {newsArticale("Bitcoin Breaks $222k", "Crypto - 8000 readers")}
            {newsArticale("Is Redux too good?", "Cars & Auto readiers")}
        </div>
    )
}

export default Widgets
