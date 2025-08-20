import { logo, user } from "../assets";
import "../styles/navbar.css";
function Navbar({ step = 0, onSkip = () => {}, showUser = false }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar-main">
          <img src={logo} alt="Logo" className="navbar-logo" />
          {step != 4 && !showUser && (
            <div className="navbar-tag-badge">
              <span className="font-400">An &nbsp;</span>
              <span className="font-600">IIT Delhi &nbsp;</span>
              <span className="font-400">Alumni Initiative</span>
            </div>
          )}
          {showUser && <img src={user} alt="User Icon" />}
          {step == 4 && (
            <div className="hiredude-step4-skip" onClick={onSkip}>
              Skip
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
