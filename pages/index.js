import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Welcome to the Social Media Course</h1>
      <p>Select a module to begin:</p>
      <ul>
        {[...Array(10)].map((_, i) => (
          <li key={i}>
            <Link href={`/modules/${i + 1}`}>Go to Module {i + 1}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
// Home page
