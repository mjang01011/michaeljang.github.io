import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownRenderer.css';

// eslint-disable-next-line react/prop-types
const MarkdownRenderer = ({ fileName }) => {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`./public/blogs/markdowns/${fileName}`);
        if (response.ok) {
          const text = await response.text();
          setMarkdown(text);
        } else {
          console.error('Failed to fetch markdown file:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching markdown file:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [fileName]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
