import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorLogin from "./pages/Doctor/login/DoctorLogin";
import PatientLogin from "./pages/Patient/login/PatientLogin";
import DoctorSignup from "./pages/Doctor/signup/DoctorSignup";
import PatientSignup from "./pages/Patient/signup/PatientSignup";
import Welcome from "./pages/Welcome";
import DoctorCode from "./pages/Doctor/code/DoctorCode";
import PatientCode from "./pages/Patient/code/PatientCode";
import Doctor from "./pages/Doctor/Doctor";
import Patient from "./pages/Patient/Patient";
import DoctorReservation from "./pages/Doctor/Reservation/DoctorReservation";
import PatientReservation from "./pages/Patient/Reservation/PatientReservation";
import DoctorTreat from "./pages/Doctor/Treat/DoctorTreat";
import PatientTreat from "./pages/Patient/Treat/PatientTreat";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor/login" element={<DoctorLogin />} />
          <Route path="/patient/login" element={<PatientLogin />} />
          <Route path="/doctor/signup" element={<DoctorSignup />} />
          <Route path="/patient/signup" element={<PatientSignup />} />
          <Route path="/doctor/code" element={<DoctorCode />} />
          <Route path="/patient/code" element={<PatientCode />} />
          <Route path="/doctor/reservation" element={<DoctorReservation />} />
          <Route path="/patient/reservation" element={<PatientReservation /> } />
          <Route path="/doctor/treat" element={<DoctorTreat />} />
          <Route path="/patient/treat" element={<PatientTreat />} />
          <Route path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
