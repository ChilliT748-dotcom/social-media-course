import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function ModulePage({ content, id }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <Link href="/">⬅️ Back to Home</Link>
      <h1>📘 Module {id}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export async function getStaticPaths() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);

  const paths = files.map((file) => {
    const id = file.match(/module_(\d+)_content\.md/)[1];
    return { params: { id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const filePath = path.join(process.cwd(), 'content', `module_${id}_content.md`);
  const content = fs.readFileSync(filePath, 'utf-8');

  return {
    props: {
      content,
      id,
    },
  };
}
