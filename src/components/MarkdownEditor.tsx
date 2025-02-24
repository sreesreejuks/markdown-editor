
import { useEffect } from 'react';
import Split from 'react-split';
import MarkdownPreview from './MarkdownPreview';

interface MarkdownEditorProps {
  markdown: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isPreviewMode: boolean;
}

const MarkdownEditor = ({ markdown, onChange, isPreviewMode }: MarkdownEditorProps) => {
  if (isPreviewMode) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-[calc(100vh-12rem)] bg-gray-50 overflow-auto">
          <MarkdownPreview markdown={markdown} fullScreen />
        </div>
      </div>
    );
  }

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
        <div className="h-[calc(100vh-12rem)] bg-gray-50 overflow-auto">
          <MarkdownPreview markdown={markdown} />
        </div>
      </Split>
    </div>
  );
};

export default MarkdownEditor;
