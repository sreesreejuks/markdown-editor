
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Split from 'react-split';
import Prism from 'prismjs';

interface MarkdownEditorProps {
  markdown: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownEditor = ({ markdown, onChange }: MarkdownEditorProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [markdown]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Split 
        className="split-container"
        sizes={[50, 50]}
        minSize={300}
        gutterSize={8}
        snapOffset={30}
      >
        <div className="h-[calc(100vh-12rem)] p-4">
          <textarea
            className="w-full h-full resize-none bg-transparent outline-none font-mono text-gray-800"
            value={markdown}
            onChange={onChange}
            placeholder="Start typing your markdown here..."
          />
        </div>
        <div className="h-[calc(100vh-12rem)] p-6 bg-gray-50 overflow-auto prose max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </Split>
    </div>
  );
};

export default MarkdownEditor;
