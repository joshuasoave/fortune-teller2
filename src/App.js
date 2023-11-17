import "./App.css";

function App() {
  fetch("https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=3")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-text">Fortune Teller</h1>
      </header>
    </div>
  );
}

export default App;
