import React from 'react'
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

const TradingViewChart = () => {
    return (
        <a
            href="https://dexscreener.com/avalanche/0xa1e15a9215675052022749297dcbe2e8b7726d1f"
            className="cardwrap trading_link"
            target="_blank"
            rel="noreferrer"
        >
            <h3>$YOLK</h3>
            <h1>YOLK/USDC</h1>
            <div className="chartt">
                <TradingViewWidget
                    autosize={true}
                    symbol="YOLKUSDC"
                    interval={15}
                    timezone="Etc/UTC"
                    theme={Themes.DARK}
                    locale="en"
                    toolbar_bg="rgba(0, 0, 0, 1)"
                    hide_top_toolbar={true}
                    save_image={false}
                    hideideas={true}
                />
            </div>
        </a>
    )
}


export default TradingViewChart
