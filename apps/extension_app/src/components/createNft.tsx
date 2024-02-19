import { useAccount } from "wagmi"

export default function CreateNft(){

    const { address } = useAccount()


    return (
        <section>
            <h6>Create NFT</h6>
            <div className="nice-form-group">
                <label>Name</label>
                <input id="name" type="text" placeholder=""  />
            </div>
            <div className="nice-form-group">
                <label>Price</label>
                <input id="price" type="number" placeholder=""  />
            </div>
            <div className="nice-form-group">
                <label>Supply</label>
                <input id="supply" type="number" placeholder=""  />
            </div>
            <div className="nice-form-group">
                <button id="createbutton" className="button-13" role="button" onClick={()=>{if(address){createHandler(address)}}}>Create</button>
            </div>
        </section>
    )
}

async function createHandler(address:string){
    var name = (document.getElementById("name") as HTMLInputElement)?.value;
    var price = (document.getElementById("price") as HTMLInputElement)?.value;
    var supply = (document.getElementById("supply") as HTMLInputElement)?.value;
    console.log(name, price, supply)
    if(name&&price&&supply){
        //await createNewNft(address, name, Number(supply), Number(price))
    }
}