import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import FileSearch from "./components/fileSearch"

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={6} style={{ background: '#ccc' }}>
          <h1>left</h1>
          <FileSearch title="我的云文档" onFileSearch={(value) => {
            console.log(value)
          }} />
        </Col>
        <Col span={18}>
          <h2>right</h2>
        </Col>
      </Row>
    </div>
  );
}

export default App;
