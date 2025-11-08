export async function decryptData(base64Payload: string, passphrase: string): Promise<string> {
  // Provided to decrypt enc files encrypted with encryptJSON.js
  base64Payload = base64Payload.replace(/\s+/g, '');
  const raw = Uint8Array.from(atob(base64Payload), c => c.charCodeAt(0));

  // Extract salt(16), iv(12), tag(16), encrypted(rest)
  const salt = raw.slice(0, 16);
  const iv = raw.slice(16, 28);
  const tag = raw.slice(28, 44);
  const data = raw.slice(44);

  // Derive key with PBKDF2
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );

  // AES-GCM decryption
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv, tagLength: 128 },
    key,
    concatUint8Arrays(data, tag)
  );

  return new TextDecoder().decode(decrypted);
}

// helper to combine data + tag (WebCrypto expects one buffer)
function concatUint8Arrays(a: Uint8Array, b: Uint8Array) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a);
  out.set(b, a.length);
  return out;
}