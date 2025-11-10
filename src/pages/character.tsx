import { useEffect, useState } from "react";
import { verifyEncryptedResource } from "./_components/encryption/decrypt_json";
import CharacterData from "./_components/characterData";

const common_path = `/data/characters`;

function checkKey(file_path: string, setVerified: (v: boolean) => void, setPasskey: (k: string) => void, setLoading: (l: boolean) => void) {
  const params = new URLSearchParams(window.location.search);
  const passkey = params.get("token")!

  if (!passkey) {
    setLoading(false);
    return;
  }

  fetch(file_path, { cache: "no-store" })
      .then((res) => res.text())
      .then((encText) => verifyEncryptedResource(encText, passkey))
      .then((check) => {
        if (!check) throw new Error("Incorrect verification failed");
        setVerified(true);
        setPasskey(passkey);
      })
    .catch((err) => { 
      console.error("Failed to load character data:", err);
      setVerified(false);
    }).finally(() => {
        setLoading(false);
    });
}

function DenyAccess({characterName}: {characterName: string}) {
  return (
      <div className="characters-page">
        <div className="overview block">
          <h3>Sheet: {characterName}</h3>
          <p>Access denied.</p>
          <p>Invalid or missing token.</p>
        </div>
      </div>);
  }

function DecryptCharacter({characterName}: {characterName: string}) {
  const forename = characterName.toLowerCase().split(' ')[0];
  const filePath = `${common_path}/${forename}/${forename}.json.enc`;
  const imageKey = `${common_path}/${forename}/img/${forename}.key`;

  const [verified, setVerified] = useState(false);
  const [passkey, setPasskey] = useState<string>("???");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkKey(filePath, setVerified, setPasskey, setLoading);
  }, []);

  if (loading) return <p>Verifying token...</p>;
  if (!verified)
    return DenyAccess({characterName: characterName});

  return <CharacterData path={filePath} passkey={passkey} imageKey={imageKey} />;
}

export default function Character({name: characterName}: {name: string}) {
  return <main id="main_dnd"><DecryptCharacter characterName={characterName} /></main>;
}