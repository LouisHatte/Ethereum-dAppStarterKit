import { Component } from 'react'
import './App.css'

import Web3 from 'web3'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '0x0',
        }
    }

    async componentDidMount() {
        window.ethereum.autoRefreshOnNetworkChange = false
        await this.loadWeb3()
        await this.loadAccount()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadAccount() {
        const accounts = await window.web3.eth.getAccounts()
        this.setState({account: accounts[0]})
    }

    render() {
        return (
            <div className="main-div">
                <h1>Decentralized Application Kit Starter</h1>
                <h2>Account address: {this.state.account}</h2>
            </div>
        );
    }
}

export default App;
