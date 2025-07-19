import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
  <header style={{ textAlign: "center", margin: "3rem 0" }}>
  <img style={{
    height: "5rem",
    width: "10rem",
    objectFit: "cover"
  }} src={reactImg} alt="Stylized atom" />
  <h1
    style={{
      margin: "0",
      fontFamily: "Roboto Condensed, sans-serif",
      fontSize: "5rem",
      background: "linear-gradient(40deg, #ea00ff, #ea00ff, #03d5ff, #03d5ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))"
    }}
  >
    React Essentials
  </h1>
      <p style={{margin: "0",
  fontSize: "1.25rem",
  color: "#8964b0",
  fontFamily: "Roboto Condensed, sans-serif"}}>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li style={{width: "10rem",
  textAlign: "center"}}>
      <img style={{height: "4rem",
  width: "6rem",
  objectFit: "cover"}} src={props.img} alt={props.title} />
      <h3 style={{margin: "0.5rem 0"}}>{props.title}</h3>
      <p style={{fontSize: "0.9rem"}}>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main style={{
width: "90%",
  maxWidth: "50rem",
  margin: "auto"}}>
        <section
          id="core-concept"
          style={{
            padding: "2rem",
            borderRadius: "6px",
            backgroundColor: "#140524",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h2 style={{textAlign: "center",
  fontFamily: "Roboto Condensed, sans-serif",
  margin: "0 0 1.5rem 0",
  color: "#a18aba"}}>Core Concepts</h2>
          <ul style={{listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap",
  justifyContent: "center"}}>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              img={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
            title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image}/>
          <CoreConcept title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              img={CORE_CONCEPTS[2].image}/>
          <CoreConcept
         title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              img={CORE_CONCEPTS[3].image}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
