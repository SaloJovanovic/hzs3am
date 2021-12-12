import "./About.css"
const About = ({navbarLightMode}) => {
  return (
    <>
      <div className={navbarLightMode ? "container lightMode" : "container"}>
        <div className={navbarLightMode ? "ab-container lightMode" : "ab-container"}>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Ko smo mi?</h4>
            <p>
              Mi smo grupa od 4
              srednjoškolca iz
              Beograda kojima
              je hobi da prave
              projekte kao što
              je ovaj u pokušaju
              da rešimo svakodnevne
              probleme prosečnog
              čoveka.
            </p>
          </div>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Naš motiv?</h4>
            <p>
              Želimo da ljudima
              olakšamo i da ih
              motivišemo da izađu
              iz svojih domova kako
              bi se socijalizovali
              i družili ili
              učestvovali u društveno
              korisnim aktivnostima.
            </p>
          </div>
          <div className={navbarLightMode ? "info lightMode" : "info"}>
            <h4>Naša priča</h4>
            <p>
              Upoznali smo se u
              u gimnaziji i postali
              bliski takmičeći se
              u timskim programerskim
              takmičenjima i tako
              počeli i sami da pravimo
              aplikacije u slobodno
              vreme.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default About