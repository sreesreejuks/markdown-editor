
import React, { useState } from 'react';
import { Check, Circle, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    // Add toast notification
    toast.success("Code copied to clipboard!", {
      duration: 2000,
      position: "bottom-right",
    });
    setTimeout(() => setCopied(false), 2000);
  }
  // Split the code by newlines to add line numbers
  const lines = value.split('\n');

  return (
    <div className="code-block-wrapper my-4 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
      <div className="code-header relative flex justify-between items-center px-4 py-2 bg-white !important border-b border-gray-200">
        <div className="circles-container flex items-center gap-1.5">
          <Circle size={12} fill="#ff5f56" stroke="#ff5f56" />
          <Circle size={12} fill="#ffbd2e" stroke="#ffbd2e" />
          <Circle size={12} fill="#27c93f" stroke="#27c93f" />
        </div>
        <div className="language-label absolute left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-600">
          {language}
        </div>
        <button
          onClick={handleCopy}
          className="copy-button text-gray-500 hover:text-gray-800 transition-colors z-10"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <div className="code-content flex">
        <div className="line-numbers py-4 pl-3 pr-2 text-right text-gray-400 bg-gray-50 select-none">
          {lines.map((_, i) => (
            <div key={i} className="line-number">
              {i + 1}
            </div>
          ))}
        </div>
        <pre className={`language-${language} flex-1 p-4 m-0 overflow-auto bg-white`}>
          <code className={`language-${language}`}>
            {value}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
