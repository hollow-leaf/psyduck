import { Wallet, ethers } from "ethers";

export async function wallet(sk:string){
    
    const wallet = new Wallet(sk)

    console.log(wallet.address)
    
    const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/3db317632844470fa86a5a3a8cb7724d")

    const signer = wallet.connect(provider)

    /* const tx = await signer.sendTransaction({
        to: '0x3bcAbD66522534657BB86a18d3E550f3166755Fa',
        value: ethers.parseUnits('0.001', 'ether'),
    });
    console.log(tx);
    alert(tx.hash) */
}

