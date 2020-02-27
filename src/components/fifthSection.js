import React from "react";
import icon from "../images/right-icon.png"
import addToMailchimp from 'gatsby-plugin-mailchimp'
const FirstSection = () => {
  const [email, setEmail] = React.useState('');
  const [checkEmail, setCheckEmail] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(false);
  function setemail(e){
    if (e === "") {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    setEmail(e);
  }
  function handleSubmit(e){
    e.preventDefault();
    if(email == ''){
      setCheckEmail(true);
      return false
    }
    addToMailchimp(email) 
    .then(data => {
      setErrorMessage('')
      setSuccessMessage(data.msg)
    })
    .catch((error) => {
      setSuccessMessage('')
      setErrorMessage(error.msg)
    })
  }
  return (
    <section className="fifth-section">
      <div className="container">
        <h2>Coming soon</h2>
        <span className="sub-heading">Sign up for exclusive early access</span>
        <form>
          <div className="newsletter"><input value={email} onChange={e => setemail(e.currentTarget.value)}  placeholder="Enter your email address" type="text" />
            <button className="submit-btn" type="submit" onClick={handleSubmit}><img alt="Submit" src={icon} /></button>
          </div>
          <span className="error-message"> {checkEmail  ? '*Enter valid email' : ''} </span>
          <span className="successmessage"> {successMessage} </span>
          <span className="error-message"> {errorMessage} </span>
        </form>
      </div>
    </section>
  )
}
export default FirstSection;