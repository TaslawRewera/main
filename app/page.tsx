import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card">
      <h1>Interactive Pain Assessment</h1>
      <p className="muted">
        A minimal production-ready prototype for collecting symptoms and suggesting next medical steps.
      </p>
      <Link href="/assessment" className="button">
        Start assessment
      </Link>
    </section>
  );
}
