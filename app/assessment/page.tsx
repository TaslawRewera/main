"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const bodyZones = [
  "Head",
  "Neck",
  "Chest",
  "Upper abdomen",
  "Lower abdomen",
  "Lower back",
  "Knee"
];

export default function AssessmentPage() {
  const router = useRouter();
  const [zone, setZone] = useState(bodyZones[0]);
  const [intensity, setIntensity] = useState(5);

  const onShowResult = () => {
    const params = new URLSearchParams({ zone, intensity: String(intensity) });
    router.push(`/result?${params.toString()}`);
  };

  return (
    <section className="card">
      <h1>Assessment</h1>

      <label className="field">
        <span>Body area</span>
        <select value={zone} onChange={(e) => setZone(e.target.value)}>
          {bodyZones.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Pain intensity: {intensity}</span>
        <input
          type="range"
          min={0}
          max={10}
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
        />
      </label>

      <button type="button" className="button" onClick={onShowResult}>
        Show result
      </button>
    </section>
  );
}
