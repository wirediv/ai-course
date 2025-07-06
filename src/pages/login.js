import React, { useState } from "react";
import Head from "@docusaurus/Head"; 
import { signIn } from "@site/src/pocketbase";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    await signIn(email, password)
    setLoading(false)
  };
  return (
    <>
    <Head>
      <title>Login | Wirediv AI Course</title>
    </Head>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
          flexDirection: 'column',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin: "auto",
            padding: '32px',
            borderRadius: '12px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <img src="img/logo.jpg" width={'100px'} style={{ margin: "auto" }} />
          <h1 style={{ marginLeft: 'auto', marginRight: 'auto' }}>Wirediv</h1>
          <h2 style={{ marginLeft: 'auto', marginRight: 'auto' }}>AI Course</h2>
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
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "18px"
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
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "18px"
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "var(--ifm-color-primary)",
              color: "white",
              marginTop: '1rem'
            }}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
      </>
  )
}