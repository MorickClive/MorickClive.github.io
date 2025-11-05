import React, { useEffect, useState } from "react";
import { verifyToken } from "../components/encryption/getKey";

const PUBLIC_KEY_PEM = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoN8qTijELBaujWLjUVEq
u0RFOEDI8PByaA9lc5P4TsdS0N01UtkWtFDio7Bm71BoUb6ihY06zT39gQC7n1vA
d2lqNFA9fJNfwFxjwtpLxKcfEPZ8G5F9tlWSz4Rt5+xbBi7EWAg1oJUGJpzVoSkz
GfK5REy19k3/NHSp6m+XRG+7HMv22umWXPE2u7l4oeleVplX0594BJ/n79rH5lTe
hsxZm4ddOSIQyNd1iS2Fx01Yehy2qSraxqU+a/e9yQDBLCI6YS8B7hejVIhHhLMn
CzRrfmXryqChdUtE0dUFDaXpVmkxUcshx3oYlY/i/p4w5J3rbLJgQkAOlrLC1EH2
SQIDAQAB
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