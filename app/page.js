"use client";

import Image from "next/image";

import { redirect } from "next/navigation";

import SubmitButton from "@/components/ui/submit-button";

function HomePage() {
  return (
    <>
      <Image
        src="/mamma-mia-singing.svg"
        width={200}
        height={400}
        alt="mamma mia logo"
      />
      <div className="text-6xl space-y-4 text-nowrap mt-8">
        <p>Welcome To...</p>
        <p className="text-4xl">The Mamma Mia Musical Quiz Game!!!</p>
      </div>
      <SubmitButton onClick={() => redirect("/select-level")}>
        Click Here To Play!
      </SubmitButton>
    </>
  );
}

export default HomePage;
