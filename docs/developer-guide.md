
# Markdown Editor - Developer Documentation

## Technical Overview

### Architecture
The application is built using modern web technologies:
- **React**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/UI**: React component library
- **React Split**: Split pane functionality
- **React Markdown**: Markdown parsing and rendering
- **Prism.js**: Syntax highlighting

### Project Structure
```
src/
├── components/
│   ├── EditorToolbar.tsx    # Top toolbar with actions
│   ├── MarkdownEditor.tsx   # Main editor component
│   ├── MarkdownHelp.tsx     # Help dialog component
│   └── ui/                  # Shadcn UI components
├── pages/
│   └── Index.tsx            # Main page component
├── styles/
│   └── editor.css          # Editor-specific styles
└── main.tsx                # Application entry point
```

## Core Components

### 1. EditorToolbar (`components/EditorToolbar.tsx`)
```typescript
interface EditorToolbarProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExport: () => void;
}
```
Manages the top toolbar with file operations and help button:
- File upload handling
- File export functionality
- Help dialog trigger
- Tooltips for all actions

### 2. MarkdownEditor (`components/MarkdownEditor.tsx`)
```typescript
interface MarkdownEditorProps {
  markdown: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
```
Core editing component featuring:
- Split pane view using `react-split`
- Real-time markdown preview
- Syntax highlighting with Prism.js
- Responsive layout handling

### 3. MarkdownHelp (`components/MarkdownHelp.tsx`)
Dialog component displaying markdown syntax guide:
- Uses Shadcn UI Dialog component
- Organized sections for different markdown features
- Code examples with syntax highlighting
- Responsive dialog design

### 4. Index Page (`pages/Index.tsx`)
Main page component managing:
- Application state
- File operations
- Component composition
- Event handling

## State Management

### File Handling
```typescript
const [markdown, setMarkdown] = useState<string>('...');
const [fileName, setFileName] = useState<string>('document.md');
```
- Manages current markdown content
- Tracks active file name
- Handles file upload/download operations

## Key Features Implementation

### 1. File Upload
```typescript
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
```

### 2. File Export
```typescript
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
```

### 3. Real-time Preview
Uses `ReactMarkdown` component with real-time updates:
```typescript
<ReactMarkdown>{markdown}</ReactMarkdown>
```

### 4. Syntax Highlighting
Implemented using Prism.js:
```typescript
useEffect(() => {
  Prism.highlightAll();
}, [markdown]);
```

## Styling

### Tailwind CSS Configuration
- Custom typography configuration for markdown preview
- Responsive design utilities
- Custom component themes

### Editor-specific Styles (`editor.css`)
- Split pane styling
- Gutter customization
- Typography adjustments

## Development Guidelines

### 1. Component Creation
- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error handling
- Follow React best practices

### 2. State Management
- Use React hooks for state
- Keep state at appropriate levels
- Implement proper type safety

### 3. Styling
- Use Tailwind CSS utilities
- Follow design system guidelines
- Maintain responsive design

### 4. Testing
Recommended testing approach:
- Unit tests for utility functions
- Component testing with React Testing Library
- Integration tests for file operations
- E2E testing for critical user flows

## Performance Considerations

### Optimization Techniques
1. **Markdown Rendering**
   - Debounce preview updates for large documents
   - Lazy load syntax highlighting

2. **File Operations**
   - Handle large files appropriately
   - Implement proper cleanup for file operations

3. **Component Updates**
   - Use proper memoization where needed
   - Implement proper cleanup in effects

## Deployment

### Build Process
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

### Production Considerations
- Implement proper error boundaries
- Add analytics if needed
- Configure proper caching
- Implement proper security measures

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Troubleshooting

### Common Issues
1. **File Upload Issues**
   - Check file type restrictions
   - Verify file size limits
   - Check browser compatibility

2. **Preview Issues**
   - Verify markdown syntax
   - Check console for errors
   - Verify Prism.js initialization

3. **Performance Issues**
   - Monitor large file handling
   - Check for memory leaks
   - Verify proper cleanup
