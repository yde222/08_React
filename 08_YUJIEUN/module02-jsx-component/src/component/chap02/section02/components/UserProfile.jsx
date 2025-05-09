export default function UserProfile({ name,job,age }) {
  return (
    <div style ={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>{job}</p>
      <p>{age}</p>
    </div>
  );
}