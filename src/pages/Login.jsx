import React, { useEffect, useState } from "react";
import { auth, provider, signInWithPopup, db, doc, setDoc, getDoc } from "../firebase";

function Login() {
  const [discordId, setDiscordId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("discordId");
    if (!id) return alert("ID do Discord não encontrado na URL.");
    setDiscordId(id);
  }, []);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const u = result.user;
      setUser(u);
      const existing = await getDoc(ref);
      if (!existing.exists()) {
        await setDoc(ref, {
          uid: u.uid,
          email: u.email,
          displayName: u.displayName,
          discordId: discordId,
          createdAt: new Date(),
        });
        alert("✅ Registro completo! Pode voltar ao Discord.");
      } else {
        alert("⚠️ Você já está registrado.");
      }
      const ref = doc(db, "users", discordId); // salva com ID do Discord
      await setDoc(ref, {
        uid: u.uid,
        email: u.email,
        displayName: u.displayName,
        discordId: discordId,
        createdAt: new Date(),
      });

      alert("✅ Registro completo! Pode voltar ao Discord.");
    } catch (err) {
      console.error(err);
      alert("Erro ao fazer login. Tente novamente.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Registro RPG Master</h1>
      <p>Bem-vindo! Clique abaixo para se registrar com sua conta Google.</p>
      {!user ? (
        <button onClick={login}>Login com Google</button>
      ) : (
        <p>✅ Você está logado como {user.displayName}</p>
      )}
    </div>
  );
}

export default Login;
