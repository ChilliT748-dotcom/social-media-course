import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '../../lib/firebaseConfig';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const db = getFirestore(app);

export default function ModulePage() {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchContent = async () => {
      try {
        const docRef = doc(db, 'modules', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContent(docSnap.data().content);
        } else {
          setContent('❌ Module not found.');
        }
      } catch (err) {
        setContent('⚠️ Error loading module.');
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [id]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Link href="/">⬅️ Back to Home</Link>
      <h1>📘 Module {id}</h1>
      {loading ? <p>Loading...</p> : <ReactMarkdown>{content}</ReactMarkdown>}
    </div>
  );
}
// Module viewer page
