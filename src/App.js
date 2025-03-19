import Form from "./components/Form";

function App() {
  return (
    <>
      <h1>Patient Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Create Appointment</h2>
            <Form />
          </div>
          <div className="one-half column">
            <h2>Scheduler</h2>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
