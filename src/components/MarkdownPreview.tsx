
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import { useEffect } from 'react';

interface MarkdownPreviewProps {
  markdown: string;
  fullScreen?: boolean;
}

const MarkdownPreview = ({ markdown, fullScreen }: MarkdownPreviewProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [markdown]);

  return (
    <div className={`prose prose-slate max-w-none p-4`}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
