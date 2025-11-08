import { useState, useEffect } from "react";
//import "./css/Players.scss";
import {decryptData} from "./decrypt_json";

function BackgroundEntry({ title, character, attribute }) {
  return (
    <>
      <p><strong>{title}:</strong></p>
      <div className="story-block">
        {/* "appearance": {
            "age": 36,
            "gender": "Male",
            "height": "TEMPLATE: 0'0\"",
            "weight": "TEMPLATE: 0 lbs",
            "eyes": "Silver",
            "skin": "Olive",
            "hair": "Brown hair; fades blonde",
            "description": "TEMPLATE: Short summary of appearance"
        }, */}
        {
            Object.entries(character[attribute]).map(([key, val]) => (
                <p key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {val}</p>
            ))
            }
      </div>
      </>
  );
}

function BackgroundList({ title, character, attribute }) {
  return (
    <>
      <p><strong>{title}:</strong></p>
      <ul className="story-block">
        {character[attribute].split('\n').map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    </>
  );
}

export default function Characters({path, passkey}: {path: string, passkey: string}) {
  const [characters, setCharacters] = useState([]);
  const [activeCharacter, setActiveCharacter] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((encText) => decryptData(encText, passkey))
      .then((decryptedJsonStr) => JSON.parse(decryptedJsonStr))
      .then((data) => {
        setCharacters(data);
        setActiveCharacter(data[0]);
      })
      .catch((err) => console.error("Failed to load character data:", err));
  }, []);

  if (!activeCharacter) {
    return <p style={{ color: "white", padding: "1rem" }}>Loading characters...</p>;
  }

  const pb = activeCharacter.character.level ? 2 + Math.floor((activeCharacter.character.level - 1) / 4) : 2;

  return (
    <div className="characters-page">
      <section className="character-details">
        <h2>{activeCharacter.character.name}</h2>

        <div className="overview block">
          <h3>Overview</h3>
          <img
            src={activeCharacter.meta.image}
            alt={activeCharacter.character.name}
            className="character-image"
          />
          <p><strong>Race:</strong> {activeCharacter.character.race}</p>
          <p><strong>Gender:</strong> {activeCharacter.character.appearance.gender}</p>
          <p><strong>Age:</strong> {activeCharacter.character.appearance.age}</p>
        </div>

        <div className="combat block">
          <h3>Combat & Social</h3>
          <p><strong>AC:</strong> { 10 + Math.floor((activeCharacter.character.abs["dex"] - 10)/2) }</p>
          <p><strong>Level:</strong> {activeCharacter.character.level}</p>
          <p><strong>Classes:</strong> {activeCharacter.character.primaryClass.class}</p>
          <p><strong>Stats:</strong></p>
          <ul>
            {Object.entries(activeCharacter.character.abs).map(([key, val]) => (
              <li key={key}><strong>{key.toUpperCase()}:</strong> {val}   ({(val > 9 ? "+" : "") + Math.floor((val - 10)/2)})</li>
            ))}
          </ul>
          <p><strong>Feats:</strong> {Object.entries(activeCharacter.character.features_and_traits).map(([key, val]) => (
              <span key={key}>{val.name}; </span>
            ))}</p>
        </div>

        <div className="background block">
          <h3>Background</h3>
          <BackgroundEntry title="Appearance" character={activeCharacter.character} attribute="appearance" />
          {/* <BackgroundList title="Bonds" character={activeCharacter.character.background_details} attribute="bonds" />
          <BackgroundEntry title="Traits" character={activeCharacter.character.background_details} attribute="personality_traits" />
          <BackgroundEntry title="Ideals" character={activeCharacter.character.background_details} attribute="ideals" />
          <BackgroundEntry title="Flaws" character={activeCharacter.character.background_details} attribute="flaws" />
          <BackgroundEntry title="Backstory" character={activeCharacter.character} attribute="notes" /> */}
        </div>
      </section>
    </div>
  );
}