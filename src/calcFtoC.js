import React from 'react'

class TemperatureCalculator extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            toConvert: null,
            finalTemp: null,
            unit: null
        }
this.FtoC=this.FtoC.bind(this)
this.CtoF=this.CtoF.bind(this)
this.inputTemp=this.inputTemp.bind(this)
    }

    FtoC(e) {
        let f = parseInt(e.target.value)
        let c = (f-32)/1.8
        this.setState({
            finalTemp: Math.round(c, 2),
            unit: "c"
        })
    }
    CtoF(e) {
        let c = parseInt(e.target.value)
        let f = 1.8*c+32
        this.setState({
            finalTemp: Math.round(f, 2),
            unit: "f"
        })
    }
    inputTemp(e) {
        let num = parseFloat(e.target.value)
        this.setState({
            toConvert: num
        })
    }
    render() {
        return (
    <div>
        <h3>Convert Temperature between Fahrenheit and Celcius</h3>
        <form class = "box2">
            <input type='text' onChange={this.inputTemp}></input>
            <br/>
            <br/>
            <p>Convert to:</p>
            <p class="addTab">Celcius &emsp; &emsp; Fahrenheit</p>
            <div class="two-buttons">
            <input class="temp-button" type="button" value={this.state.toConvert} onClick={this.FtoC}/>
            {/* <p>Convert to Celcius</p> */}
            <input class="temp-button" type="button" value={this.state.toConvert} onClick={this.CtoF} label="Convert to Fahrenheit"/>
            {/* <p>Convert to Fahrenheit</p> */}
            </div>
            <br/>
            {/* <button value={this.state.toConvert} onClick={this.CtoF}>C to F</button> */}
            <p>{this.state.finalTemp} degrees {(this.state.unit==="c") ? "celcius" : "fahrenheit"}</p>
        </form>

    </div>
    )
    }
    }

    export default TemperatureCalculator;