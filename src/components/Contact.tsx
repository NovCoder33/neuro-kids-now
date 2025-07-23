import { useState } from "react";
import "./Contact.css";
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
      <div className="contact-card">
        <h1>Contact</h1>

        <form onSubmit={onSubmit}>
          <div className="box">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="box">
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>
        </form>
        <button type="submit">Submit Form</button>

        <span>{result}</span>
      </div>
    </div>
  );
};
export default Contact;
