//import './App.css';
import NavBar from './view/NavBar';
import './css/style.css'

function App() {
  async function fetchData() {
    const response = await fetch(`http://localhost:4000/`, {
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      }
    })
    const res = response.json()
    console.log(res)
  }
  fetchData()

  return (
    <div className="App">
      <NavBar />
      <h1>HouseCalls</h1>
      <img src="https://walkingmobilityclinics.com/wp-content/uploads/2019/01/group-of-doctors-1.jpg" alt="A team of doctors" />
      <p>Photo by walkingmobilityclinics.com</p>
    </div>
  );
}

export default App;