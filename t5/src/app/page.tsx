"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { loginData } from "../mockedData/loginData";
import { useRouter } from "next/navigation";


export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const tryLogin = () => {
    //CHECK DATABASE IF PASSWORD AND PHN MATCH UP
    //RN mocking database
    const attemptedLogin = {username: username, password: password};
    if (
      loginData.map((obj) => JSON.stringify(obj)).includes(JSON.stringify(attemptedLogin)
      )
    ) {
      console.log("redirecting");
      router.push("/home");
    } else {
      alert("Invalid username or password");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className = "container flex items-center justify-center mx-auto ">
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
        <Button onClick={tryLogin}>
          Submit
        </Button>
      </form>
    </div>
  );
}
