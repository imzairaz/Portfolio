import { motion } from 'framer-motion';

interface CodeBlockProps {
  className?: string;
}

const CodeBlock = ({ className = '' }: CodeBlockProps) => {
  const codeLines = [
    { lineNum: 1, content: 'const developer = {', color: 'text-secondary' },
    { lineNum: 2, content: '  name: "Zairaz",', color: 'text-foreground' },
    { lineNum: 3, content: '  role: "MERN Stack Developer",', color: 'text-foreground' },
    { lineNum: 4, content: '  skills: ["React", "Node", "MongoDB"],', color: 'text-foreground' },
    { lineNum: 5, content: '  passion: "Building clean UIs",', color: 'text-foreground' },
    { lineNum: 6, content: '  available: true,', color: 'text-green-400' },
    { lineNum: 7, content: '};', color: 'text-secondary' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`glass-card p-4 font-mono text-sm overflow-hidden ${className}`}
    >
      {/* Window Controls */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-muted-foreground">profile.ts</span>
      </div>

      {/* Code Lines */}
      <div className="space-y-1">
        {codeLines.map((line, index) => (
          <motion.div
            key={line.lineNum}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            className="flex items-center gap-4"
          >
            <span className="text-muted-foreground/50 w-4 text-right select-none">
              {line.lineNum}
            </span>
            <span className={line.color}>{line.content}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CodeBlock;
