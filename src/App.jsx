import "./App.css";
import TeamMemberCard from "./components/TeamMemberCard";

function App() {
  return (
    <main>
      <h1>Our Team</h1>

      <TeamMemberCard
        name="Damith"
        role="Frontend Developer"
        department="Engineering"
        isAvailable={true}
      />

      <TeamMemberCard
        name="John"
        role="Backend Developer"
        department="Engineering"
        isAvailable={false}
      />

      <TeamMemberCard
        name="Jane"
        role="UI/UX Designer"
        department="Design"
        isAvailable={true}
      />
    </main>
  );
}
export default App;
