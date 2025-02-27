
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import CodeBlock from './CodeBlock';
import { Components } from 'react-markdown';

interface MarkdownPreviewProps {
  markdown: string;
  fullScreen?: boolean;
}

const MarkdownPreview = ({ markdown, fullScreen }: MarkdownPreviewProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [markdown]);

  // Handle anchor link clicks
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.href.includes(window.location.pathname)) {
        e.preventDefault();
        const targetElement = document.getElementById(anchor.hash.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const customComponents: Components = {
    code({ className, children, node, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'text';
      
      if (className && match) {
        return (
          <CodeBlock
            language={language}
            value={String(children).replace(/\n$/, '')}
          />
        );
      }
      
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
  };

  return (
    <div className={`prose prose-slate max-w-none p-4`}>
      <ReactMarkdown
        rehypePlugins={[
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }]
        ]}
        components={customComponents}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;
