import './App.css';
import NewForm from './components/NewForm';
import Calendar from './components/Calendar';
import Times from './components/Times';

function App() {
  return (
    <div className="App">
      <h1>Appointments</h1>
      <NewForm />
      {/* <Calendar /> */}
    </div>
  );
}

export default App;
