export default function Problems() {
  const problems = [
    "Spending hours on data entry instead of growing your business",
    "Missing patterns in your customer data that could boost revenue",
    "Repetitive tasks eating up your team's valuable time",
    "Feeling behind on technology but not knowing where to start",
  ];

  return (
    <section className="problems">
      <div className="container">
        <h2>What&apos;s Slowing You Down?</h2>
        <ul className="problems-list">
          {problems.map((problem, index) => (
            <li key={index}>{problem}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
