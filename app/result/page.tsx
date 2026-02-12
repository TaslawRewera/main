import Link from "next/link";

type ResultPageProps = {
  searchParams?: {
    zone?: string;
    intensity?: string;
  };
};

const mockCauses = [
  "Muscle strain",
  "Joint inflammation",
  "Nerve irritation"
];

export default function ResultPage({ searchParams }: ResultPageProps) {
  const zone = searchParams?.zone ?? "Unknown zone";
  const intensity = searchParams?.intensity ?? "N/A";

  return (
    <section className="stack">
      <div className="banner warning">
        <strong>Red flags:</strong> severe sudden pain, fainting, breathing difficulty, or chest pain with sweating requires urgent care.
      </div>

      <article className="card">
        <h1>Result</h1>
        <p className="muted">
          Selected zone: <strong>{zone}</strong> · Intensity: <strong>{intensity}/10</strong>
        </p>

        <h2>Probable causes (mock data)</h2>
        <ul>
          {mockCauses.map((cause) => (
            <li key={cause}>{cause}</li>
          ))}
        </ul>
      </article>

      <div className="banner info">
        Medical disclaimer: this service provides informational guidance only and is not a diagnosis.
      </div>

      <Link href="/assessment" className="button secondary">
        Back to assessment
      </Link>
    </section>
  );
}
