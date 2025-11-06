import React, { useEffect, useState } from "react";
import { verifyToken } from "../components/encryption/getKey";

const PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEAWKyB244foj1CxO6Xm2RLftMXbtcP+BGIGkFIma0FDfw=
-----END PUBLIC KEY-----`;

export default function SylbenPage() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

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
    });
  }, []);

  if (loading) return <p>Verifying token...</p>;
  if (!verified)
    return <p>Access denied. Invalid or missing token.</p>;

  return (
    <div>
      <h1>Sylben's Character Sheet</h1>
      <p>✨ This content is protected by a signed token.</p>
    </div>
  );
}