// src/utils/verifyToken.js
import * as jose from "jose";

export async function verifyToken(PUBLIC_KEY_PEM: string, token: string, expectedCharacter: string) {
  try {
    const publicKey = await jose.importSPKI(PUBLIC_KEY_PEM, "EdDSA");
    const { payload } = await jose.jwtVerify(token, publicKey);

    if ((String)(payload.character).toLowerCase() !== expectedCharacter.toLowerCase()) {
      throw new Error("Token does not match this character");
    }

    return payload;
  } catch (err) {
    console.error("JWT verification failed:", err);
    return null;
  }
}