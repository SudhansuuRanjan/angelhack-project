import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// create wallet context

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const navigate = useNavigate();

    const [wallet, setWallet] = useState({
        address: '',
        isConnected: false,
        chainId: 0,
    })

    // async function connectWallet
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
                const address = accounts[0]
                setWallet(prevState => ({ ...prevState, address, isConnected: true, chainId: window.ethereum.chainId }));
                console.log({
                    address,
                    isConnected: true,
                    chainId: window.ethereum.chainId
                });
                navigate('/collection');
            } catch (err) {
                console.log(err);
            }
        } else {
            alert('Please install Metamask')
        }
    }

    // useEffect(() => {
    //     if (window.ethereum) {
    //         window.ethereum.on('accountsChanged', (accounts) => {
    //             if (accounts.length === 0) {
    //                 setWallet(prevState => ({ ...prevState, address: '', isConnected: false, chainId: 0, network: '' }))
    //             } else {
    //                 setWallet(prevState => ({ ...prevState, address: accounts[0], isConnected: true, chainId: window.ethereum.chainId}))
    //             }
    //         })
    //     }
    // }, []);

    return (
        <WalletContext.Provider
            value={{
                wallet,
                connectWallet
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export default WalletContext;