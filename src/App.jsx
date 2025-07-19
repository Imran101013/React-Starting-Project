import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>Please select a Topic.</p>;
if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

  return (
    <div>
      <Header />
      <main
        style={{
          width: "90%",
          maxWidth: "50rem",
          margin: "auto",
        }}
      >
        <section
          id="core-concept"
          style={{
            padding: "2rem",
            borderRadius: "6px",
            backgroundColor: "#140524",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontFamily: "Roboto Condensed, sans-serif",
              margin: "0 0 1.5rem 0",
              color: "#a18aba",
            }}
          >
            Core Concepts
          </h2>
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {CORE_CONCEPTS.map((conceptItem, index) => (
              <CoreConcept key={index} {...conceptItem}/>
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
        </section>
      </main>
      {tabContent}
    </div>
  );
}

export default App;
