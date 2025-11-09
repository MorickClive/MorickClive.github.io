import { useEffect, useState } from "react";
import { verifyEncryptedResource } from "../_components/encryption/decrypt_json";
import Characters from "../_components/characters";

export default function ZonePage() {
  const common_path = "/data/characters/zone/";
  const file_path = `${common_path}/zone.json.enc`;
  const image_key = `${common_path}/img/zone.key`;
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [passkey, setPasskey] = useState<string>("???");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (!token) {
      setLoading(false);
      return;
    }

    const run_decrypt = async () => {

      fetch(`${file_path}?cb=${encodeURIComponent(token)}`, { cache: "no-store" })
        .then((res) => res.text())
        .then((encText) => verifyEncryptedResource(encText, token))
        .then((check) => {
          if (!check) throw new Error("Incorrect verification failed");
          setVerified(true);
          setPasskey(token);
        })
      .catch((err) => { 
        console.error("Failed to load character data:", err);
        setVerified(false);
      })
      .finally(() => {
          setLoading(false);
      });

    };

    run_decrypt();

  }, []);

  if (loading) return <p>Verifying token...</p>;
  if (!verified)
    return (
    <main id="main_dnd">
      <div className="characters-page">
        <div className="overview block">
          <h3>Sheet: Zone of the Lost</h3>
          <p>Access denied.</p>
          <p>Invalid or missing token.</p>
        </div>
      </div>
    </main>);

  return <main id="main_dnd"><Characters path={`${file_path}?cb=${encodeURIComponent(passkey)}`} passkey={passkey} imageKey={image_key} /></main>;
}