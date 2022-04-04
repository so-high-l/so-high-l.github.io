import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { all_wallets } from '../../all_wallets'


export default function Connect({ price }) {

    const [desktop, setDesktop] = useState(false)
    const [open, setOpen] = useState(false)
    const [wallets, setWallets] = useState(all_wallets)


    const handleFilter = (search) => {

        if (search === '') return setWallets(all_wallets)

        let filtredWallets = wallets.filter(wallet => wallet.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        setWallets(filtredWallets)
    }

    const metamaskConnect = () => {
        console.log('metamaskConnect')

    }

    const walletConnect = () => {
        setOpen(true)
        console.log('walletconnect')
        //...
    }

    return (
        <>
            <div className="containerheader">
                <span className='connect'>{price} $YOLK</span>
                <div className="walletbtn">
                    <span className='connect' onClick={metamaskConnect} >
                        <img src="./img/metamask.svg" alt="walletmask" />
                        Metamask
                    </span>
                    <span className='connect' onClick={walletConnect} >
                        <img src="./img/walletmask.svg" alt="walletmask" />
                        WalletConnect
                    </span>
                </div>
            </div>
            {
                <div className={`modal_container ${open ? 'open_wallets' : ''}`}>
                    <div className='modal_close_header' >
                        <div className='walletmask'>
                            <img src='/img/walletmask.svg' alt='walletmask' />
                            <p>WalletConnect</p>
                        </div>
                        <div onClick={() => setOpen(false)} className='close_modal'>
                            <GrClose />
                        </div>
                    </div>
                    <div className='modal'>
                        <div className='switch'>
                            <button onClick={() => setDesktop(false)} >QR Code</button>
                            <button onClick={() => setDesktop(true)} >Desktop</button>
                            <span className={`switch_scale ${desktop ? 'switch_translate' : ''}`}></span>
                        </div>
                        {
                            desktop
                                ? <div className='desktop'>
                                    <p className='title' >Choose your preferred wallet</p>
                                    <input
                                        placeholder='Search'
                                        onChange={({ target }) => handleFilter(target.value)}
                                    />
                                    {
                                        wallets.length
                                            ? <div className='wallets_grid'>
                                                {
                                                    wallets.map((wallet, key) => (
                                                        <a key={key} href={wallet.to} target='_blank' rel="noreferrer">
                                                            <div
                                                                style={{ background: `url("${wallet.img}") 0% 0% / 100% rgb(255, 255, 255)` }}
                                                                className='wallet_icon'
                                                            >
                                                            </div>
                                                            <div className='wallet_name'> {wallet.name} </div>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                            : <div className='no_wallets'>
                                                <p>No wallets found</p>
                                            </div>
                                    }
                                </div>
                                : <div className='qr_code'>
                                    <p>Scan QR code with a WalletConnect-compatible wallet</p>
                                    <img src='/img/qr_code.svg' alt='qr_code' />
                                    <span className='to_clipboard'>Copy to clipboard</span>
                                </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}
