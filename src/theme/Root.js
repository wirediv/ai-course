import React, { useState } from "react";
import { signIn, auth } from "@site/src/pocketbase";

export default function Root({ children }) {
  const [userAuth, setUserAuth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    await signIn(email,password)
    setLoading(false)
  };

  auth.onChange(async function (user) {
    if (user !== null) {
      setUserAuth(user);
    }
  });

  return (
    <>
      {userAuth != "" ? (
        <>{children}</>
      ) : (
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            marginRight: "auto",
            marginLeft: "auto",
            flexDirection: 'column'
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              margin: "auto",
            }}
          >
            <img src="img/combination-icon.png"  />
            <h1 style={{marginLeft: 'auto', marginRight: 'auto'}}>Wirediv AI Course</h1>
            <label htmlFor="email" style={{ marginBottom: "10px" }}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <label htmlFor="password" style={{ marginBottom: "10px" }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                marginBottom: "10px",
                padding: "5px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "5px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#fd5367",
                color: "white",
                marginTop: '1rem'
              }}
              disabled={loading}
            >
              {loading ? 'Loading...':'Login'}
            </button>
          </form>
        </div>
      )}
    </>
  );
}