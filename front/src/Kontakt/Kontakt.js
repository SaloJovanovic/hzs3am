import "./Kontakt.css"
const Kontakt = ({navbarLightMode}) => {
  return (
    <>
      <div className={navbarLightMode ? "container lightMode" : "container"}>
        <div className={navbarLightMode ? "ab-container lightMode" : "ab-container"}>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Email:</h4>
            <p>matovicmihailo@gmial.com</p>
            <p>aleksandarjovanovic670@gmai.com</p>
            <p>aca.butulija@gmail.com</p>
            <p>andrej.tripkovic@gmail.com</p>
          </div>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Adresa</h4>
            <p>Njegoševa 15, 11000 Beograd</p>
            <p>Avalska 8, 11000 Beograd</p>
            <p>Dragoslava Srejovića 4, 21000 Novi Sad</p>
          </div>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Telefon:</h4>
            <p>0646546546</p>
            <p>0615858528</p>
            <p>0644986546</p>
            <p>0626789097</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Kontakt