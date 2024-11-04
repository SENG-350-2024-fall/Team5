"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isRegistering ? '/api/register' : '/api/home/login';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
      console.log("Redirecting...");
      router.push("/home");
    } else {
      alert(data.message);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        {isRegistering ? "Register" : "Login"}
      </h2>
      <form className="flex flex-col gap-4 w-full max-w-sm" onSubmit={handleFormSubmit}>
        <div>
          <Label htmlFor="username" value="Username" />
          <TextInput
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            maxLength={10}
            placeholder="Your username"
            required
          />
        </div>
        <div>
          <Label htmlFor="password" value="Password" />
          <TextInput
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </div>
        <Button type="submit" color="primary" className="mt-4">
          {isRegistering ? "Register" : "Login"}
        </Button>
      </form>
      <Button
        type="button"
        color="secondary"
        className="mt-2"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        {isRegistering ? "Switch to Login" : "Switch to Register"}
      </Button>
    </div>
  );
}

/*
"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";

import { useRouter } from "next/navigation";



export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

console.log("hi");
  const tryLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    const response = await fetch('/api/home/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Redirecting...");
      router.push("/home"); // Redirect to the home page on successful login
    } else {
      alert(data.message); // Show error message from the API
      setPassword(""); // Clear the password field
      setUsername(""); // Clear the username field
    }
  };

  
  return (
    <div className="container flex items-center justify-center mx-auto ">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            maxLength={10}
            placeholder="0123 456 789"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
        </div>
        <Button onClick={tryLogin}>Submit</Button>
      </form>
    </div>
  );
}


*/