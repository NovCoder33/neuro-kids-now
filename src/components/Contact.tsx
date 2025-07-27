import { useState } from "react";
import "./Contact.css";
import logo from "../assets/aboutlogo.png";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formInfo = event.target as HTMLFormElement;
    const formData = new FormData(formInfo);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      formInfo.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-msg">
        <h1>Contact Us & Subscribe</h1>
        <p>
          If you're curious about the impact we're making or have questions on
          how you can be a part of us, fill out the form on this page to get in
          touch or subscribe to our free newsletter!
        </p>
        <img src={logo}></img>
      </div>
      <div className="contact-card">
        <form onSubmit={onSubmit}>
          <div className="element">
            <div className="elem-title">
              <p>Name</p>
              <p className="smaller">(required)</p>
            </div>
            <div className="name-content">
              <div className="name-box">
                <label>First Name</label>
                <input type="text"></input>
              </div>
              <div className="name-box">
                <label>Last Name</label>
                <input type="text"></input>
              </div>
            </div>
          </div>
          <div className="element">
            <div className="elem-title">
              <p>Email</p>
              <p className="smaller">(required)</p>
            </div>
            <div className="elem-msg">
              <p>
                Contact us and subscribe to our newsletter for more information
                and donation updates
              </p>
            </div>
            <div className="text-box">
              <label>Email</label>
              <input type="text"></input>
            </div>
            <div className="checkbox">
              <input type="checkbox"></input>
              <label> Sign up for news and updates</label>
            </div>
          </div>
          <div className="element">
            <div className="elem-title">
              <p>Subject</p>
              <p className="smaller">(required)</p>
            </div>
            <div className="text-box">
              <input type="text"></input>
            </div>
          </div>
          <div className="element">
            <div className="elem-title">
              <p>Message</p>
              <p className="smaller">(required)</p>
            </div>
            <div className="big-text-box">
              <input type="text"></input>
            </div>
          </div>
        </form>
        <button type="submit">Submit Form</button>
        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
