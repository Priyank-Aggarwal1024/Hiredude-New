import { useState } from "react";
import { arrowDown, loader } from "../assets";
import { Button, InputField, Navbar } from "../components";
import "../styles/jdForm.css";
import EnterWhatsApp from "../components/EnterWhatsApp";
import VerifyNumber from "../components/VerifyNumber";
import Step3 from "../components/Step3";
import { useNavigate } from "react-router-dom";

function JDForm() {
  const verified = localStorage.getItem("phone-verified");
  const [step, setStep] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    resume: null,
    portfolio: "",
    phone: "",
  });
  const navigate = useNavigate();
  const toggleReadMore = () => setExpanded((prev) => !prev);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.resume) {
      alert("Please fill all required fields!");
      return;
    }

    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("email", formData.email);
    data.append("resume", formData.resume);
    data.append("portfolio", formData.portfolio);

    console.log("Form submitted:", formData);
    setStep(2);
  };

  const handleCancelWhatsApp = () => {
    setStep(1);
  };

  const handleContinueWhatsApp = (number) => {
    console.log("Continue with WhatsApp number:", number);
    alert(`WhatsApp login with: ${number}`);
    setFormData({ ...formData, phone: number });
    setStep(3);
  };

  return (
    <div className="jd-form">
      <Navbar step={step} onSkip={() => navigate("/profile")} />

      {step == 1 && !verified && !loading && (
        <div className="jd-form-main">
          <div className="jd-form-header-container">
            <div
              className={`jd-form-header-card ${
                expanded ? "expanded" : "collapsed"
              }`}
            >
              <div className="jd-form-header-title">
                Upskill Mafia - Full Stack Developer (Intern)
              </div>
              <div className="jd-form-header-content">
                <span>
                  <strong>HireDude</strong> is the official hiring partner of
                  UpskillMafia.
                </span>
                <span>
                  Upskill Mafia is a virtual campus where students learn coding,
                  design, and business skills through recorded courses, live
                  mentorship, and peer interaction. It offers a gamified
                  learning experience with challenges, projects, and hackathons.
                </span>
                <span>
                  <strong>Stipend:</strong> Rs 10,000 - 15,000/month
                </span>
                <span>
                  Website:
                  <a
                    href="https://upskillmafia.com/"
                    className="jd-form-header-link"
                  >
                    https://upskillmafia.com/
                  </a>
                </span>
                <span>
                  <strong>Location:</strong> Remote (Work from Home)
                </span>
                <span>
                  <strong>Experience:</strong> 0 to 3 Years
                </span>
                <span>
                  <strong>Responsibilities:</strong>
                </span>
                {expanded && (
                  <>
                    <span>
                      - Collaborate with our team to design and develop dynamic
                      and interactive websites and applications. <br /> -
                      Implement and maintain front-end and back-end
                      functionalities using the latest technologies. <br /> -
                      Integrate efficient database management and data handling.
                      <br /> - Assist in troubleshooting and debugging issues to
                      ensure smooth performance of the platform. <br /> - Stay
                      updated on the latest industry trends and technologies to
                      contribute innovative ideas. <br />- Conduct usability
                      testing and iterate on designs based on user feedback.
                    </span>
                    <span>
                      <strong>Requirements:</strong>
                    </span>
                    <span>
                      - Degree/diploma in Computer Science or related field
                      (freshers welcome!). <br /> - Basic skills in React.js,
                      Next.js, MongoDB, HTML, CSS, Javascript, MySQL, etc.
                      <br /> - Creative mindset and attention to detail. <br />
                      - Portfolio of college/personal projects. <br />- Good
                      communication and teamwork skills.
                    </span>
                    <span>
                      <strong>What We Offer:</strong>
                    </span>
                    <span>
                      - Learning and growth opportunities. <br /> - Diverse
                      projects and creative challenges. <br />- Friendly,
                      collaborative work environment.
                    </span>
                  </>
                )}
              </div>
              <div className="jd-form-header-readmore" onClick={toggleReadMore}>
                <div>{expanded ? "Read Less" : "Read More"}</div>
                <div
                  className={`jd-form-header-readmore-icon ${
                    expanded ? "rotated" : ""
                  }`}
                >
                  <img src={arrowDown} alt="Arrow Down" />
                </div>
              </div>
            </div>
          </div>
          <form className="jd-form-main-inputs" onSubmit={handleSubmit}>
            <div className="jd-form-main-inputs-inner">
              <InputField
                label={"First Name"}
                name={"firstName"}
                onChange={handleChange}
                required={true}
                placeholder="John Doe"
                type="text"
                value={formData.firstName}
              />
              <InputField
                label={"Email"}
                name={"email"}
                onChange={handleChange}
                required={true}
                placeholder="johndoe@mail.com"
                type="email"
                value={formData.email}
              />
              <InputField
                label={"Upload Resume"}
                name={"resume"}
                onChange={handleChange}
                required={true}
                placeholder="Upload Your Resume Here"
                type="file"
              />
              <InputField
                label={"Portfolio"}
                name={"portfolio"}
                onChange={handleChange}
                required={false}
                placeholder="www.yoursite.com"
                type="text"
                value={formData.portfolio}
              />
            </div>
            <Button type="submit">Continue</Button>
          </form>
        </div>
      )}

      {loading && (
        <div className="hiredude-loader-wrapper">
          <img src={loader} alt="Loading..." className="hiredude-loader-img" />
          <div className="hiredude-loader-text">
            Please wait... We’re Submitting
          </div>
        </div>
      )}

      {(step == 4 || verified) && !loading && (
        <Step3
          verified={verified}
          navigateProfile={() => navigate("/profile")}
        />
      )}
      {step === 2 && !loading && (
        <EnterWhatsApp
          onCancel={handleCancelWhatsApp}
          onContinue={handleContinueWhatsApp}
        />
      )}

      {step === 3 && !loading && (
        <VerifyNumber
          phoneNumber={formData.phone}
          onCancel={() => setStep(2)}
          onContinue={(otp) => {
            setFormData({ ...formData, otp });
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setStep(4);
              localStorage.setItem("phone-verified", "true");
            }, 2000);
          }}
          initialTimer={60}
          onEdit={() => setStep(2)}
        />
      )}
    </div>
  );
}

export default JDForm;
