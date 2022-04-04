import React, { useEffect, useState } from 'react'
import Connect from '../components/dashboard/Connect';
import TradingViewChart from '../components/dashboard/TradingViewChart';
import '../styles/Dashboard.css'


export default function Dashboard() {

    const [token, setToken] = useState({})

    const TOKEN = '0xeF6044646e2927303f3D407b6b18371A9E82C891'
    const API = `https://api.dexscreener.io/latest/dex/tokens/${TOKEN}`


    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setToken(data.pairs[0]))
    }, [])


    if (!token?.priceChange) return <></>

    return (
        <div className="mainsection">
            <Connect price={token.priceUsd} />
            <div className="cardsection">
                <div className="cardwrap">
                    <h3><span>$YOLK</span> Price</h3>
                    <h1>${token.priceUsd}</h1>
                    <p><span style={{ color: token.priceChange.h24 < 0 ? 'red' : 'green' }} >{token.priceChange.h24}</span> Last 24 Hours</p>
                </div>
                <div className="cardwrap">
                    <h3>Market Cap</h3>
                    <h1>${Number(token.fdv / 1000000).toFixed(2)}M</h1>
                    <p><span style={{ color: token.priceChange.h24 < 0 ? 'red' : 'green' }} >{token.priceChange.h24}</span> Last 24 Hours</p>
                </div>
                <div className="cardwrap">
                    <h3>24h Volume</h3>
                    <h1>${token.volume.h24}</h1>
                    <p><span style={{ color: token.priceChange.h24 < 0 ? 'red' : 'green' }} >{token.priceChange.h24}</span> Last 24 Hours</p>
                </div>
                <div className="cardwrap">
                    <h3>Minted NFTs</h3>
                    <h1>0</h1>
                </div>
                <div className="cardwrap">
                    <h3>My NFTs</h3>
                    <h1>.</h1>
                </div>
                <div className="cardwrap">
                    <h3>My Rewards</h3>
                    <h1>$YOLK</h1>
                </div>
            </div>
            <TradingViewChart />
        </div>
    )
}