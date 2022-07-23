import './App.css';
import NavBar from './view/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img src="https://unsplash.com/photos/L8tWZT4CcVQ?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" />
      <p>Photo by <a href="https://unsplash.com/@nci?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">National Cancer Institute</a> on <a href="https://unsplash.com/s/photos/doctor?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
    </div>
  );
}

export default App;
