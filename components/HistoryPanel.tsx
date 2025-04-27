'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface HistoryPanelProps {
  history: string[];
  onClose: () => void;
}

export default function HistoryPanel({ history, onClose }: HistoryPanelProps) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="fixed left-0 top-[64px] h-[calc(100vh-64px)] w-80 bg-black/40 backdrop-blur-sm border-r border-[var(--purple)] p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-[var(--yellow)]">History</h2>
        <button
          onClick={onClose}
          className="p-1 hover:text-[var(--yellow)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-2">
        {history.map((item, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-black/20 border border-[var(--purple)] text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}