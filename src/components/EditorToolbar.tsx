
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Upload, Maximize2, Minimize2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import MarkdownHelp from "./MarkdownHelp";

interface EditorToolbarProps {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExport: () => void;
  isPreviewMode: boolean;
  onTogglePreview: () => void;
}

const EditorToolbar = ({ onUpload, onExport, isPreviewMode, onTogglePreview }: EditorToolbarProps) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-semibold text-gray-800">
        <span className="text-gray-400 font-normal">Markdown</span> Editor
      </h1>
      <div className="flex gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <input
                  type="file"
                  accept=".md,.markdown"
                  onChange={onUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Button variant="outline" size="icon" onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Upload .md file</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={onExport}>
                <Download className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Export as .md</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={onTogglePreview}>
                {isPreviewMode ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isPreviewMode ? 'Exit Preview' : 'Full Preview'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <MarkdownHelp />
      </div>
    </div>
  );
};

export default EditorToolbar;
