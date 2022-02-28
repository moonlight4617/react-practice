// import logo from './logo.svg';
import './App.css';
import { Card } from './components/Index';

function App() {
  return (
    <>
      <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr>
      <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr>
      <tr className="grid">
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
        <td>
          <Card />
        </td>
      </tr>
    </>
  );
}

export default App;
