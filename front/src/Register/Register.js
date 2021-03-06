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
    const Pre18god = new Date(2021-18, 12, 12);
    // console.log("Pre " + Pre18god);
    // console.log("Dr " + datumRodjenja);
    if (Date.parse(datumRodjenja) > Pre18god) {
      setMoze(false)
      console.log("MALI SI ALO")
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
        <div className={`container ${showModal ? 'overlay' : ''}`}>
          {/*<div className={'brand-logo'}></div>*/}
          <div className={'brand-title'}>REGISTER</div>
          <div className={'inputs'}>
            <label className={imeSelected ? 'selected' : ''}>Ime:</label>
            <input className={imeInp == 'error' ? 'form input ime-input errorr' : 'form input ime-input'} type={'text'}
                   placeholder={imeInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Ime'} value={ime}
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
            <input className={prezimeInp == 'error' ? 'form input prezime-input errorr' : 'form input prezime-input'}
                   type={'text'} placeholder={prezimeInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Prezime'}
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
            <input className={usernameInp == 'error' ? 'form input username-input errorr' : 'form input username-input'}
                   type={'text'} placeholder={usernameInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Korisni??ko ime'}
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
            <input className={emailInp == 'error' ? 'form input email-input errorr' : 'form input email-input'}
                   type={'text'} placeholder={emailInp == 'error' ? 'Unesi manje od 64 karaktera' : 'Mejl'}
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
            <input className={passwordInp == 'error' ? 'form input password-input errorr' : 'form input passord-input'}
                   type={'password'}
                   placeholder={passwordInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Sifra'}
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
            <input className={adresaInp == 'error' ? 'form input adresa-input errorr' : 'form input adresa-input'}
                   type={'text'} placeholder={adresaInp == 'error' ? 'Lo?? format' : 'Adresa'} value={adresa}
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
            <input className={gradInp == 'error' ? 'form input grad-input errorr' : 'form input grad-input'}
                   type={'text'} placeholder={gradInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Grad'}
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
              className={datumRodjenjaInp == 'error' ? 'form input datumRodjenja-input errorr' : 'form input datumRodjenja-input'}
              type={'date'}
              placeholder={datumRodjenjaInp == 'error' ? 'Unesi manje od 20 karaktera' : 'Datum rodjenja'}
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
            <p className={datumRodjenjaInp == 'error' ? 'datumError active' : 'datumError'}>Morate biti stariji od 18 godina!</p>
            <button className={'btn'} type={'submit'} onClick={e => {
              e.preventDefault();
              VerifyUser();
            }}>
              Register
            </button>
            <p>Imate nalog? <Link className={'link'} to={'/login'}>Ulogujte se</Link></p>
            {/*<p className={canLogInError ? 'error' : 'error active'}>False informations.</p>*/}
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} className={'modal'}>
        <p>Unesite verifikacioni kod.</p>
        <input type="text" onChange={e => {
          setVerificationCode(e.target.value)
        }} value={verificationCode}/>
        <button className={'btn'} onClick={() => {
          //Slanje POST zahtjeva
          CreateNewUser();
          //Provjera status koda i odgovora
          //Rutiranje na drugu stranicu
          setShowModal(false);
        }
        }>Send code
        </button>
      </Modal>
    </>
  )
}
export default Register;