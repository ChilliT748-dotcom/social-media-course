import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../lib/firebaseConfig';
import { useRouter } from 'next/router';

export default function Register() {
  const auth = getAuth(app);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>📝 Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Register</button>
      </form>
      {error && <p style={{ color: 'red' }}>🚫 {error}</p>}
    </div>
  );
}
// Register page
