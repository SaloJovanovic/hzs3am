import "./Register.css"
import {Link} from "react-router-dom";
import {useState} from "react";
import onUserCreated  from "../App"
import userVerification  from "../App"
import Modal from 'react-modal';

const Register = ({navbarLightMode, verifyUser, createUser}) => {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [adresa, setAdresa] = useState("");
  const [grad, setGrad] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState(new Date(0, 0, 0));

  const [imeInp, setImeInp] = useState("");
  const [prezimeInp, setPrezimeInp] = useState("");
  const [usernameInp, setUsernameInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  const [emailInp, setEmailInp] = useState("");
  const [adresaInp, setAdresaInp] = useState("");
  const [gradInp, setGradInp] = useState("");
  const [datumRodjenjaInp, setDatumRodjenjaInp] = useState("");

  const [imeSelected, setImeSelected] = useState("");
  const [prezimeSelected, setPrezimeSelected] = useState("");
  const [usernameSelected, setUsernameSelected] = useState(false);
  const [passwordSelected, setPasswordSelected] = useState(false);
  const [emailSelected, setEmailSelected] = useState("");
  const [adresaSelected, setAdresaSelected] = useState("");
  const [gradSelected, setGradSelected] = useState("");
  const [datumRodjenjaSelected, setDatumRodjenjaSelected] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const [moze, setMoze] = useState(false);

  const VerifyUser = () => {

    setMoze(true)

    if (ime.length > 20 || ime.length == "") {
      setMoze(false)
      setImeInp("error");
    }
    if (prezime.length > 20 || prezime.length == "") {
      setMoze(false)
      setPrezimeInp("error");
    }
    if (username.length > 20 || username.length == "") {
      setMoze(false)
      setUsernameInp("error");
    }
    if (email.length > 64 || email.length == "") {
      setMoze(false)
      setEmailInp("error");
    }
    if (password.length < 8 || password.length == "") {
      setMoze(false)
      setPasswordInp("error");
    }
    if (grad.length > 64 || grad.length == "") {
      setMoze(false)
      setGradInp("error");
    }
    if (adresa.length > 64 || adresa.length == "") {
      setMoze(false)
      setAdresaInp("error");
    }
    const Pre18god = new Date();
    Pre18god.setFullYear(Pre18god.getFullYear() - 18);
    if (datumRodjenja > Pre18god) {
      setMoze(false)
      setDatumRodjenjaInp("error");
    }
    if (moze) {
      verifyUser(email);
      setShowModal(true);
    }
  }

  const CreateNewUser = () => {
    setIme("");
    setPrezime("");
    setUsername("");
    setEmail("");
    setPassword("");
    setAdresa("");
    setGrad("");
    setDatumRodjenja(new Date(0, 0, 0));
    setVerificationCode("");

    setImeInp("");
    setPrezimeInp("");
    setUsernameInp("");
    setEmailInp("");
    setPasswordInp("");
    setAdresaInp("");
    setGradInp("");
    setDatumRodjenjaInp("");

    createUser({
      ime: ime,
      prezime: prezime,
      username: username,
      email: email,
      password: password,
      datumRodjenja: datumRodjenja,
      adresa: adresa,
      grad: grad,
      code: verificationCode
    })

  }

  return (
    <>
      <div
        className={navbarLightMode ? 'register-container login-container lightMode form' : 'register-container login-container form'}>
        <div className={'container'}>
          {/*<div className={'brand-logo'}></div>*/}
          <div className={'brand-title'}>REGISTER</div>
          <div className={'inputs'}>
            <label className={imeSelected ? 'selected' : ''}>Ime:</label>
            <input className={imeInp == 'error' ? 'form input ime-input error' : 'form input ime-input'} type={'text'}
                   placeholder={imeInp == 'error' ? 'Must have less than 20 characters' : 'First name'} value={ime}
                   onChange={(event) => {
                     setIme(event.target.value)
                   }}
                   onFocus={(event) => {
                     setImeSelected(true);
                   }}
                   onBlur={(event) => {
                     setImeSelected(false);
                   }}/>
            <label className={prezimeSelected ? 'selected' : ''}>Prezime:</label>
            <input className={prezimeInp == 'error' ? 'form input prezime-input error' : 'form input prezime-input'}
                   type={'text'} placeholder={prezimeInp == 'error' ? 'Must have less than 20 characters' : 'Last name'}
                   value={prezime}
                   onChange={(event) => {
                     setPrezime(event.target.value)
                   }}
                   onFocus={(event) => {
                     setPrezimeSelected(true);
                   }}
                   onBlur={(event) => {
                     setPrezimeSelected(false);
                   }}/>
            <label className={usernameSelected ? 'selected' : ''}>Username:</label>
            <input className={usernameInp == 'error' ? 'form input username-input error' : 'form input username-input'}
                   type={'text'} placeholder={usernameInp == 'error' ? 'Must have less than 20 characters' : 'Username'}
                   value={username}
                   onChange={(event) => {
                     setUsername(event.target.value)
                   }}
                   onFocus={(event) => {
                     setUsernameSelected(true);
                   }}
                   onBlur={(event) => {
                     setUsernameSelected(false);
                   }}/>
            <label className={emailSelected ? 'selected' : ''}>Email:</label>
            <input className={emailInp == 'error' ? 'form input email-input error' : 'form input email-input'}
                   type={'text'} placeholder={emailInp == 'error' ? 'Must have less than 64 characters' : 'Email'}
                   value={email}
                   onChange={(event) => {
                     setEmail(event.target.value)
                   }}
                   onFocus={(event) => {
                     setEmailSelected(true);
                   }}
                   onBlur={(event) => {
                     setEmailSelected(false);
                   }}/>
            <label className={passwordSelected ? 'selected' : ''}>Password:</label>
            <input className={passwordInp == 'error' ? 'form input password-input error' : 'form input passord-input'}
                   type={'password'}
                   placeholder={passwordInp == 'error' ? 'Must have less than 20 characters' : 'Password'}
                   value={password}
                   onChange={(event) => {
                     setPassword(event.target.value)
                   }}
                   onFocus={(event) => {
                     setPasswordSelected(true);
                   }}
                   onBlur={(event) => {
                     setPasswordSelected(false);
                   }}/>
            <label className={adresaSelected ? 'selected' : ''}>Adresa:</label>
            <input className={adresaInp == 'error' ? 'form input adresa-input error' : 'form input adresa-input'}
                   type={'text'} placeholder={adresaInp == 'error' ? 'Los format' : 'Adresa'} value={adresa}
                   onChange={(event) => {
                     setAdresa(event.target.value)
                   }}
                   onFocus={(event) => {
                     setAdresaSelected(true);
                   }}
                   onBlur={(event) => {
                     setAdresaSelected(false);
                   }}/>
            <label className={gradSelected ? 'selected' : ''}>Grad:</label>
            <input className={gradInp == 'error' ? 'form input grad-input error' : 'form input grad-input'}
                   type={'text'} placeholder={gradInp == 'error' ? 'Must have less than 20 characters' : 'Grad'}
                   value={grad}
                   onChange={(event) => {
                     setGrad(event.target.value)
                   }}
                   onFocus={(event) => {
                     setGradSelected(true);
                   }}
                   onBlur={(event) => {
                     setGradSelected(false);
                   }}/>
            <label className={datumRodjenjaSelected ? 'selected' : ''}>Datum rodjenja:</label>
            <input
              className={datumRodjenjaInp == 'error' ? 'form input datumRodjenja-input error' : 'form input datumRodjenja-input'}
              type={'date'}
              placeholder={datumRodjenjaInp == 'error' ? 'Must have less than 20 characters' : 'Datum Rodjenja'}
              value={datumRodjenja}
              onChange={(event) => {
                setDatumRodjenja(event.target.value)
              }}
              onFocus={(event) => {
                setDatumRodjenjaSelected(true);
              }}
              onBlur={(event) => {
                setDatumRodjenjaSelected(false);
              }}/>
            <button className={'btn'} type={'submit'} onClick={e => {
              e.preventDefault();
              VerifyUser();
            }}>
              Register
            </button>
            <p>Dont have an account? <Link className={'link'} to={'/new-user'}>Sign up</Link></p>
            <p>Want to create restaurant? <Link className={'link'} to={'/new-restaurant'}>Sign up as restaurant</Link>
            </p>
            <p>Have a restaurant on this website? <Link className={'link'} to={'/login-restaurant'}>Log in as
              restaurant</Link></p>
            {/*<p className={canLogInError ? 'error' : 'error active'}>False informations.</p>*/}
          </div>
          <Modal isOpen={showModal} className={'modal'}>
            <input type="text" onChange={e => {
              setVerificationCode(e.target.value)
            }} value={verificationCode}/>
            <button onClick={() => {
              //Slanje POST zahtjeva
              CreateNewUser();
              //Provjera status koda i odgovora
              //Rutiranje na drugu stranicu
              setShowModal(false);
            }
            }>Send code
            </button>
          </Modal>
        </div>
      </div>
    </>
  )
}
export default Register;