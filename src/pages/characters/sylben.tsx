import { useEffect, useState } from "react";
import { verifyToken, extractPassKey } from "../../components/encryption/getKey";
import Characters from "./Characters";

const PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAWKyB244foj1CxO6Xm2RLftMXbtcP+BGIGkFIma0FDfw=
-----END PUBLIC KEY-----`;

export default function SylbenPage() {
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

    verifyToken(PUBLIC_KEY_PEM, token, "sylben").then(payload => {
      setVerified(!!payload);
      setLoading(false);

      if (!!payload === true) {
        extractPassKey(PUBLIC_KEY_PEM, token).then(passkey => {
          setPasskey(passkey || "???");
        });
      }
    });



  }, []);

  if (loading) return <p>Verifying token...</p>;
  if (!verified)
    return (
    <main id="main_dnd">
      <div className="characters-page">
        <div className="overview block">
          <h3>Sheet: Sylben Tanner</h3>
          <p>Access denied.</p>
          <p>Invalid or missing token.</p>
        </div>
      </div>
    </main>);

  return <main id="main_dnd"><Characters path="/data/characters/sylben.json.enc" passkey={passkey} /></main>;
}