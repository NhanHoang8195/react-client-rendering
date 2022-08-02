
import './App.css';
import ReactIframeResizer from 'iframe-resizer-react';

const options = {
  heightCalculationMethod: "taggedElement",
  log: true,
  checkOrigin: false,
  minHeight: 1000,
};

function App() {
  return (
    <div className="App">
      <ReactIframeResizer
        src="https://bnpl-dev.homecredit.vn/bod-form"
        width={"100%"}
        {...options}
         />
    </div>
  );
}

export default App;
