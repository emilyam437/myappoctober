import React from "react"
class BasicCalc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            finalAnswer: null,
            runningTotal: null,
            newInput: null,
            mathCommand: null,
            clickedDecimal: false
        }
        this.equals = this.equals.bind(this)
        this.clear = this.clear.bind(this)
        this.mathCommand = this.mathCommand.bind(this)
        this.toggleNegative = this.toggleNegative.bind(this)
        this.percentToggle = this.percentToggle.bind(this)
        this.decimal = this.decimal.bind(this)
        this.clickedNumber2 = this.clickedNumber2.bind(this)
    }
clickedNumber2(e) {
    let floatNumber = parseFloat(e.target.value)
    if (!this.state.clickedDecimal && !this.state.runningTotal) {
        this.setState({
            runningTotal: floatNumber
        })
    } else if (!this.state.clickedDecimal && this.state.runningTotal && !this.state.mathCommand) {
        let nextNum = this.state.runningTotal.toString() + e.target.value
        this.setState({
            runningTotal: parseFloat(nextNum)
        })
    } else if (this.state.clickedDecimal && this.state.runningTotal && !this.state.mathCommand) {
        let nextNum = this.state.runningTotal.toString() + '.'+ e.target.value
        this.setState({
            runningTotal: parseFloat(nextNum)
        })
    } else if (!this.state.clickedDecimal && this.state.runningTotal && this.state.mathCommand) {
        this.setState({
            newInput: floatNumber
        })
    } else if (!this.state.clickedDecimal && this.state.runningTotal && this.state.mathCommand && !this.state.newInput) {
        this.setState({
            newInput: floatNumber
        })
    } else if (!this.state.clickedDecimal && this.state.runningTotal && this.state.mathCommand && this.state.newInput) {
        let nextNum = this.state.newInput.toString() + e.target.value
        this.setState({
            newInput: parseFloat(nextNum)
        })
    } else if (this.state.clickedDecimal && this.state.mathCommand && this.state.newInput) {
        let nextNum = this.state.newInput.toString() + '.' + e.target.value
        this.setState({
            newInput: parseFloat(nextNum)
        })
    }
}
 mathCommand(e) {
    let val = e.target.value
    this.setState({
        mathCommand: val,
        clickedDecimal: false
    })
 }
    equals() {
        let almostFinal = parseFloat(this.state.runningTotal)
        let toAdd = parseFloat(this.state.newInput)
        let final;
    if (this.state.mathCommand === 'x') {
            final = almostFinal*toAdd
    } else if (this.state.mathCommand === '+'){
        final = almostFinal+toAdd
     } else if (this.state.mathCommand === '-'){
        final = almostFinal-toAdd
     } else if (this.state.mathCommand === '÷'){
        final = almostFinal / toAdd
     } else if (this.state.mathCommand === '%') {
        final = almostFinal
     } else if (!this.state.mathCommand) {
        final = almostFinal
     }
     this.setState({
        finalAnswer: null,
        runningTotal: final,
        newInput: null,
        mathCommand: null
    })
    }
    decimal() {
        this.setState({
            clickedDecimal: true
        })
    }
    clear() {
        this.setState({
            finalAnswer: null,
            runningTotal: null,
            newInput: null,
            mathCommand: null,
            clickedDecimal: false
        })
    }
    toggleNegative() {
        if (this.state.newInput){
            let newVal = 0-this.state.newInput
            this.setState({
                newInput: newVal
            })
        } else {
            let newVal = 0 - this.state.runningTotal
            this.setState({
                runningTotal: newVal
            })
        }

    }
    percentToggle() {
        if (this.state.newInput){
        let newVal = this.state.newInput/100
        this.setState({
            newInput: newVal
        })
    } else {
        let newVal = this.state.runningTotal/100
        this.setState({
            runningTotal: newVal
        })
    }
    }
render(){
    return (
        <div>
            <p>Basic Calculator</p>
            <div class = "container">
                <div class='showInput'>
                    <p>{this.state.runningTotal} {this.state.mathCommand} {this.state.newInput}</p> 
                 <p>{this.state.finalAnswer}</p>
                </div>
                <div class = "first-row">
            <button onClick={this.clear}>c</button>
            <button onClick={this.mathCommand} value="()">()</button>
            <button onClick={this.percentToggle} value="%">%</button>
            <button onClick={this.mathCommand} value="÷">÷</button>
            </div>
            <div class = "second-row">
            <button onClick={this.clickedNumber2} value="7">7</button>
            <button onClick={this.clickedNumber2} value="8">8</button>
            <button onClick={this.clickedNumber2} value="9">9</button>
            <button onClick={this.mathCommand} value="x">x</button>
            </div>
            <div class = "third-row">
            <button onClick={this.clickedNumber2} value="4">4</button>
            <button onClick={this.clickedNumber2} value="5">5</button>
            <button onClick={this.clickedNumber2} value="6">6</button>
            <button onClick={this.mathCommand} value="-">-</button>
            </div>
            <div class = "fourth-row">
            <button onClick={this.clickedNumber2} value="1">1</button>
            <button onClick={this.clickedNumber2} value="2">2</button>
            <button onClick={this.clickedNumber2} value="3">3</button>
            <button onClick={this.mathCommand} value = "+">+</button>
            </div>
            <div class = "fifth-row">
            <button onClick={this.toggleNegative}>+/-</button>
            <button onClick={this.clickedNumber2} value="0">0</button>
            <button onClick={this.decimal}>.</button>
            <button onClick={this.equals}>=</button>
            </div>
            </div>
        </div>
    )
    }
}

export default BasicCalc