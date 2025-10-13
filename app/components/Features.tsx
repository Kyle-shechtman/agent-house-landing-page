export default function Features() {
  const features = [
    {
      title: "Schedule & Follow Up",
      description: "Schedule your appointments and follow up with customers",
    },
    {
      title: "Talk to Your Data",
      description: "Get insights from your business data that reveal new opportunities",
    },
    {
      title: "Handle Admin",
      description: "Handle invoicing and track inventory",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Your Business Buddy Can</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
