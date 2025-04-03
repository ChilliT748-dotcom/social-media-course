import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📊 Dashboard</h1>
      <p>Welcome back! Here’s what you can do:</p>
      <ul>
        <li><Link href="/">🏠 Go to Home</Link></li>
        <li><Link href="/modules/1">📘 Resume Module 1</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
}
// Dashboard page
