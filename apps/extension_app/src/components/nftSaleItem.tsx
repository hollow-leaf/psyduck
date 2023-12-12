import { buyNftByNftId } from "../services/contract";
import { NftType } from "../type";
import { formatAddress } from "../utils/stingify";
import { useAccount } from "wagmi"


export function NftSaleItem(props:NftType){
    const { address, isConnected } = useAccount()

    return (
        <div>
            <div className="card" onClick={() => {
                if(isConnected){
                    if(address){
                        buyNftByNftId(address, props.eventId, props.nftId, 1, props.price)
                    }
                }
            }}>
                <span className="icon">
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z"
                    />
                    </svg>
                </span>
                <h4>ID: {props.nftId}</h4>
                <h4>Price: {props.price}</h4>
                <h4>Creator: {formatAddress(props.creator)}</h4>
                <div className="shine"></div>
                <div className="background">
                    <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                    </div>

                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
            </div>
            <div>
                <dialog id={`my_modal_${props.nftId}`} className="modal">
                    <form method="dialog" className="modal-box bg-white py-10">
                    <h3 className="font-bold text-lg" style={{textAlign:"center"}}>DETAIL</h3>
                    <div className="px-16 mt-8 flex flex-col space-y-3">
                        <div className="flex">
                        <p>Provider</p>
                        <p className="ml-auto">{}</p>
                        </div>
                        <div className="flex ">
                        <p>Power Type</p>
                        <p className="ml-auto">
                            
                        </p>
                        </div>
                        <div className="flex ">
                        <p>CO2 CID</p>
                        <p className="ml-auto">{}</p>
                        </div>
                        <div className="flex ">
                        <p>NFT Address</p>
                        <p className="ml-auto">{}</p>
                        </div>
                    </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    )
}