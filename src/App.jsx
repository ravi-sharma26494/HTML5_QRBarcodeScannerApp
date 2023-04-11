import React, { useState } from "react";
import ResultContainerPlugin from "./ResultContainerPlugin";
import Html5QrcodePlugin from "./Html5QrCodePlugin";
import './App.css'
const App = (props) => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-center">Html5-qrcode React demo</h3>
            </div>
            <div className="card-body">
              <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
              />
            </div>
            <div className="card-footer">
              <ResultContainerPlugin results={decodedResults} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
