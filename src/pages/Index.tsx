
import { useState } from 'react';
import 'prismjs/themes/prism.css';
import '../styles/editor.css';
import EditorToolbar from '@/components/EditorToolbar';
import MarkdownEditor from '@/components/MarkdownEditor';

const Index = () => {
  const [markdown, setMarkdown] = useState<string>('# Welcome to the Markdown Editor\n\nStart typing in markdown format to see the preview update in real-time!\n\n## Features\n\n- Split pane view\n- Live preview\n- Syntax highlighting\n- Clean design');
  const [fileName, setFileName] = useState<string>('document.md');
  const [isPreviewMode, setIsPreviewMode] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        if (typeof content === 'string') {
          setMarkdown(content);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleExport = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleTogglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <EditorToolbar 
          onUpload={handleUpload} 
          onExport={handleExport} 
          isPreviewMode={isPreviewMode}
          onTogglePreview={handleTogglePreview}
        />
        <MarkdownEditor 
          markdown={markdown} 
          onChange={handleChange}
          isPreviewMode={isPreviewMode}
        />
      </div>
    </div>
  );
};

export default Index;
