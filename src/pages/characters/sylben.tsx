import { useEffect, useState } from "react";
import { verifyToken, extractPassKey } from "../_components/encryption/getKey";
import Characters from "../_components/characters";

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

  const run_decrypt = async () => {
    try {
      const payload = await verifyToken(PUBLIC_KEY_PEM, token, "sylben");
      if (!payload) {
        setVerified(false);
        return;
      }

      setVerified(true);
      const extractedKey = await extractPassKey(PUBLIC_KEY_PEM, token);
      setPasskey(extractedKey || "???");
    } catch (err) {
      console.error("Verification failed:", err);
      setVerified(false);
    } finally {
      setLoading(false);
    }
  };

  run_decrypt();

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