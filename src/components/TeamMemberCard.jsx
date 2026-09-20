function TeamMemberCard({ name, role, department, isAvailable = true }) {
  return (
    <article className="memeber-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>Department: {department}</p>
      <p>Status: {isAvailable ? "Available" : "Busy"}</p>
    </article>
  );
}

export default TeamMemberCard;
