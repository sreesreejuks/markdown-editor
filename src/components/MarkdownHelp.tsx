
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MarkdownHelp = () => {
  return (
    <Dialog>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>Markdown Help</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Markdown Syntax Guide</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Headers</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"# Header 1\n## Header 2\n### Header 3"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Emphasis</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"*italic* or _italic_\n**bold** or __bold__\n***bold italic*** or ___bold italic___"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Lists</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"- Unordered list item\n* Another unordered list item\n1. Ordered list item\n2. Another ordered list item"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Links & Images</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"[Link text](URL)\n![Image alt text](Image URL)"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Code</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"`inline code`\n```\ncode block\n```"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Blockquotes</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"> This is a blockquote\n>> Nested blockquote"}
            </pre>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tables</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {"| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |"}
            </pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarkdownHelp;
