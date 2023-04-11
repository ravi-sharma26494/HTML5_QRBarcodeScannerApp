import React, { useState } from 'react';
import './App.css';

import ResultContainerPlugin from './ResultContainerPlugin.jsx';
import Html5QrcodePlugin from './Html5QrCodePlugin';

const App = (props) => {
    const [decodedResults, setDecodedResults] = useState([]);
    const onNewScanResult = (decodedText, decodedResult) => {
        console.log("App [result]", decodedResult);
        setDecodedResults(prev => [...prev, decodedResult]);
    };

    return (
        <div className="App">
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={250}
                    disableFlip={false}
                    qrCodeSuccessCallback={onNewScanResult}
                />
                <ResultContainerPlugin results={decodedResults} />
               
            
        </div>
    );
};

export default App;
