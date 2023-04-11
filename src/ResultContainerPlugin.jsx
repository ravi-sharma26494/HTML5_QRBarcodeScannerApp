import React from 'react';
import './App.css';

function filterResults (results) {
    let filteredResults = [];
    for (var i = 0; i < results.length; ++i) {
        if (i === 0) {
            filteredResults.push(results[i]);
            continue;
        }

        if (results[i].decodedText !== results[i - 1].decodedText) {
            filteredResults.push(results[i]);
        }
    }
    return filteredResults;
}

const ResultContainerTable = ({ data }) => {
    const results = filterResults(data);
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Decoded Text</th>
                    <th>Format</th>
                </tr>
            </thead>
            <tbody>
                {
                    results.map((result, i) => {
                        console.log(result);
                        return (<tr key={i}>
                            <td>{i}</td>
                            <td className="text-wrap">{result.decodedText}</td>
                            <td className="text-wrap">{result.result.format.formatName}</td>
                        </tr>);
                    })
                }
            </tbody>
        </table>
    );
};

const ResultContainerPlugin = (props) => {
    const results = filterResults(props.results);
    return (
        <div className="container-fluid mt-4">
            <div className="row">
                <div className="col">
                    <div className='Result-header'>Scanned results ({results.length})</div>
                    <div className='Result-section'>
                        <ResultContainerTable data={results} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultContainerPlugin;
