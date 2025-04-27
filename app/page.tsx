'use client';

import { useState } from 'react';
import Background from '@/components/Background';
import ChatBox from '@/components/ChatBox';
import Navbar from '@/components/Navbar';
import HistoryPanel from '@/components/HistoryPanel';

export default function Home() {
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const addToHistory = (question: string) => {
    setHistory(prev => {
      const newHistory = [question, ...prev];
      if (newHistory.length > 5) {
        newHistory.pop();
      }
      return newHistory;
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar onHistoryClick={() => setShowHistory(!showHistory)} />
      <div className="pt-28 px-4 flex items-center justify-center">
        <ChatBox onQuestionSubmit={addToHistory} />
        {showHistory && (
          <HistoryPanel
            history={history}
            onClose={() => setShowHistory(false)}
          />
        )}
      </div>
      <Background />
    </main>
  );
}