"use client";

import { useState } from "react";

import Image from "next/image";
import { redirect } from "next/navigation";

import SubmitButton from "@/components/ui/submit-button";
import SelectButton from "@/components/ui/select-button";

import {
  baseButtonCSS,
  selectedButtonCSS,
} from "@/components/ui/util/button-css";

function SelectLevelPage() {
  const [selectedLevel, setSelectedLevel] = useState("none");

  function levelSelectHandler(levelName) {
    setSelectedLevel(levelName);
  }

  const linkText = "/game/" + selectedLevel.toLowerCase();

  // available game levels
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <>
      <Image
        src="/mamma-mia-singing.svg"
        width={200}
        height={400}
        alt="mamma mia logo"
      />
      {/* level selection container */}
      <div className="text-6xl text-center mt-8">
        <p>Select Your Level!</p>
      </div>
      <div className="flex space-x-4">
        {levels.map((level) => {
          return (
            <SelectButton
              key={level}
              buttonText={level}
              className={
                level === selectedLevel ? selectedButtonCSS : baseButtonCSS
              }
              onSelect={levelSelectHandler}
            >
              {level}
            </SelectButton>
          );
        })}
      </div>
      <SubmitButton
        disabled={selectedLevel === "none"}
        onClick={() => redirect(linkText)}
      >
        {selectedLevel === "none"
          ? "Pick a Level to Get Started!"
          : `${selectedLevel} Quiz - Click Here!`}
      </SubmitButton>
    </>
  );
}

export default SelectLevelPage;
