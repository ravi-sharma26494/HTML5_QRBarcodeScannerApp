import React, { useState, useEffect } from "react";
import Quagga from "quagga";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

const BarcodeScanner = () => {
const [scannedItems, setScannedItems] = useState([]);

useEffect(() => {
Quagga.init({
inputStream: {
name: "Live",
type: "LiveStream",
target: document.querySelector("#scanner-container"),
},
decoder: {
readers: ["ean_reader", "code_128_reader"],
},
}, (err) => {
if (err) {
console.error(err);
return;
}
Quagga.start();
});

Quagga.onDetected((data) => {
const barcodeData = {
code: data.codeResult.code,
format: data.codeResult.format,
timestamp: Date.now(),
};
setScannedItems((prevItems) => [...prevItems, barcodeData]);
});

return () => {
Quagga.stop();
};
}, []);

const startScanner = () => {
Quagga.start();
};

const stopScanner = () => {
Quagga.stop();
};

return (
<Container>
<Row>
<Col>
<Button onClick={startScanner}>Scan</Button>
<Button onClick={stopScanner}>Stop</Button>
</Col>
</Row>
<Row>
<Col>
<div id="scanner-container"></div>
</Col>
</Row>
<Row>
<Col>
<Table striped bordered hover>
<thead>
<tr>
<th>Code</th>
<th>Format</th>
<th>Timestamp</th>
</tr>
</thead>
<tbody>
{scannedItems.map((item, index) => (
<tr key={index}>
<td>{item.code}</td>
<td>{item.format}</td>
<td>{item.timestamp}</td>
</tr>
))}
</tbody>
</Table>
</Col>
</Row>
</Container>
);
};

export default BarcodeScanner;