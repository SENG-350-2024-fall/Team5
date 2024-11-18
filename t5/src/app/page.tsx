"use client";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginController from "./controllers/LoginController";
import RegistrationController from "./controllers/RegistrationController";

export default function Page() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // New state variables for registration
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>(""); // Use string for input
  const [phn, setPhn] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);

  const router = useRouter();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //const endpoint = isRegistering ? '/api/home/registration' : '/api/home/login';
    const endpoint = "/api";

    // Create the body based on whether registering or logging in
    // const body = isRegistering
    //   ? { first_name: firstName, last_name: lastName, DOB: new Date(dob), password, PHN: phn, address }
    //   : { username, password };

    // const response = await fetch(endpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(body),
    // });

    // const data = await response.json();
    if (!isRegistering) {
      const response = await LoginController.validateUser(username, password);
      if (response) {
        console.log("Redirecting...");
        router.push("/home");
      } else {
        alert("Invalid username or password");
        setPassword("");
        setUsername("");
      }
    } else {
      const response = await RegistrationController.registerUser(
        firstName,
        lastName,
        new Date(dob),
        password,
        phn,
        address,
      );
      if (response.status) {
        console.log("Redirecting...");
        router.push("/home");
      } else {
        alert(response.message);
        setPassword("");
        setFirstName("");
        setLastName("");
        setDob("");
        setPhn("");
        setAddress(null);
      }
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        {isRegistering ? "Register" : "Login"}
      </h2>
      <form
        className="flex flex-col gap-4 w-full max-w-sm"
        onSubmit={handleFormSubmit}
      >
        {isRegistering && (
          <>
            <div>
              <Label htmlFor="first-name" value="First Name" />
              <TextInput
                id="first-name"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <Label htmlFor="last-name" value="Last Name" />
              <TextInput
                id="last-name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="Your last name"
                required
              />
            </div>
            <div>
              <Label htmlFor="dob" value="Date of Birth" />
              <TextInput
                id="dob"
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                type="date"
                required
              />
            </div>
            <div>
              <Label htmlFor="phn" value="Personal Health Number" />
              <TextInput
                id="phn"
                onChange={(e) => setPhn(e.target.value)}
                value={phn}
                placeholder="Your PHN"
                required
              />
            </div>
            <div>
              <Label htmlFor="address" value="Address" />
              <TextInput
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                value={address || ""}
                placeholder="Your address"
                required
              />
            </div>
          </>
        )}
        {!isRegistering && (
          <div>
            <Label htmlFor="username" value="Username" />
            <TextInput
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              maxLength={10}
              placeholder="Your username"
              required={!isRegistering}
            />
          </div>
        )}
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
*/
