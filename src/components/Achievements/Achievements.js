import "./Achievements.css";

const achievements = [
  {
    title: "Academic Excellence Award",
    description: "Awarded for being in the Top 5% for two consecutive years 2023-24 and 2024-25.",
  },
  {
    title: "Paper Presentation - First Prize",
    description:
      "Bagged First Prize at RVS Technical Campus, Coimbatore (2024-25).",
  },
  {
    title: "Coding Contest - Third Prize",
    description:
      "Won Third Prize in a Coding Contest at Kongu Engineering College (2023-24).",
  },
  {
    title: "Technical Quiz - Third Prize",
    description:
      "Won Third Prize in a Technical Quiz at Kongu Engineering College (2024-25).",
  },
  {
    title: "SIH Internal Hackathon - Top 50",
    description: "Got selected in the Top 50 Teams in SIH Internal Hackathon 2024.",
  },
  {
    title: "Solo Singing - Second Prize",
    description: "Won Second Prize in a Solo Singing Event at Kongu Engineering College (2024-25).",
  },
  {
    title: "Solo Instrumental (Flute) - Third Prize",
    description:
      "Won Third Prize in Solo Instrumental (Flute) at Kongu Engineering College (2023-24).",
  },
];

const Achievements = () => {
  return (
    <section className="achievements">
      <h2 className="achievements-title">🏆 Achievements🏆</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
