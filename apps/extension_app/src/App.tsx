import "./App.css"
import { getAssets } from "./services/api";
import { wallet } from "./services/wallet";

function App() {
  return (
    <div className="App">
      <section>
        <div className="href-target" id="installation"></div>
        <h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-tool">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          Connect Wallet
        </h1>
        <div className="nice-form-group">
          <button id="connectbutton" className="button-13" role="button">Connect</button>
        </div>
      </section>
    </div>
  );
}

export default App;
