import { useEffect, useState } from "react";

async function decryptImage(fileUrl: string, keyBase64: string): Promise<Blob> {
  const res = await fetch(fileUrl);
  const keyBuffer = (await fetch(keyBase64)).text();
  const encBuffer = new Uint8Array(await res.arrayBuffer());

  const iv = encBuffer.slice(0, 12);
  const tag = encBuffer.slice(12, 28);
  const ciphertext = encBuffer.slice(28);

  // AES-GCM in WebCrypto automatically expects the tag at the end of ciphertext,
  // so combine ciphertext + tag
  const combined = new Uint8Array(ciphertext.length + tag.length);
  combined.set(ciphertext);
  combined.set(tag, ciphertext.length);

  const key = await crypto.subtle.importKey(
    "raw",
    Uint8Array.from(atob(await keyBuffer), c => c.charCodeAt(0)),
    "AES-GCM",
    false,
    ["decrypt"]
  );

  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, combined);

  // Return as Blob for display
  return new Blob([decrypted], { type: "image/png" });
}

export default function EncryptedImage({character, keyBase64} : {character: any, keyBase64: string}) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    decryptImage(character.meta.image, keyBase64).then(blob => {
      setUrl(URL.createObjectURL(blob));
    });
  }, []);

  if (!url) return <p>Decrypting image...</p>;

  return <img src={url} alt={character.character.name} className="character-image" />;
}