import { edit2, mail, location } from "../assets";
import "../styles/profile.css";
import Navbar from "./Navbar";
function Profile() {
  return (
    <div className="hiredude-profile">
      <Navbar showUser={true} />
      <div className="hiredude-profile-container">
        <div className="hiredude-profile-wrapper">
          <div className="hiredude-profile-card">
            <div className="hiredude-profile-header">
              <div className="hiredude-profile-info">
                <div className="hiredude-profile-name">Salmaan Ahmed</div>
                <div className="hiredude-profile-phone">+91 96000 16417</div>
              </div>
              <img src={edit2} alt="Edit" />
            </div>

            <div className="hiredude-profile-divider"></div>

            <div className="hiredude-profile-details">
              <div className="hiredude-profile-detail">
                <img src={mail} alt="Mail" />
                <span className="hiredude-profile-text">
                  imsalmaanahmed@gmail.com
                </span>
              </div>
              <div className="hiredude-profile-detail">
                <img src={location} alt="Location" />
                <span className="hiredude-profile-text">Chennai, India</span>
              </div>
            </div>
          </div>

          {/* Applications Section */}
          <div className="hiredude-profile-applications">
            <h2 className="hiredude-profile-title">Your Applications</h2>

            <div className="hiredude-profile-applications-grid">
              {/* Application Card */}
              <div className="hiredude-profile-application-card">
                <div className="hiredude-profile-application-body">
                  <div className="hiredude-profile-application-job">
                    <div className="hiredude-profile-job-title">
                      Full Stack Developer (Intern)
                    </div>
                    <div className="hiredude-profile-company">UpskillMafia</div>
                  </div>
                  <div className="hiredude-profile-divider"></div>
                  <div className="hiredude-profile-meta">
                    <div className="hiredude-profile-applied">
                      <div className="hiredude-profile-applied-label">
                        Applied on
                      </div>
                      <div className="hiredude-profile-applied-date">
                        24 Aug 2025
                      </div>
                    </div>
                    <div className="hiredude-profile-view">View details</div>
                  </div>
                </div>
                <div className="hiredude-profile-footer">
                  You’ll get assignment link via WhatsApp
                </div>
              </div>

              {/* Duplicate Example Card */}
              <div className="hiredude-profile-application-card">
                <div className="hiredude-profile-application-body">
                  <div className="hiredude-profile-application-job">
                    <div className="hiredude-profile-job-title">
                      Full Stack Developer (Intern)
                    </div>
                    <div className="hiredude-profile-company">UpskillMafia</div>
                  </div>
                  <div className="hiredude-profile-divider"></div>
                  <div className="hiredude-profile-meta">
                    <div className="hiredude-profile-applied">
                      <div className="hiredude-profile-applied-label">
                        Applied on
                      </div>
                      <div className="hiredude-profile-applied-date">
                        24 Aug 2025
                      </div>
                    </div>
                    <div className="hiredude-profile-view">View details</div>
                  </div>
                </div>
                <div className="hiredude-profile-footer">
                  You’ll get assignment link via WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
