'use client';

import { useState, useRef } from 'react';
import { Send, Loader2, Upload, Image, Search, X, RefreshCw, RotateCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateResponse } from '@/lib/gemini';

interface ChatBoxProps {
  onQuestionSubmit: (question: string) => void;
}

export default function ChatBox({ onQuestionSubmit }: ChatBoxProps) {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [lastQuestion, setLastQuestion] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setError(null);
    setLastQuestion(question);
    onQuestionSubmit(question);
    
    try {
      const answer = await generateResponse(question);
      setResponse(answer);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response');
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setQuestion(`Analyze this file: ${file.name}`);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleImageCreation = () => {
    setError("The free tier of the Gemini API currently does not offer image generation capabilities.");
    setResponse('');
  };

  const handleDeepResearch = () => {
    setQuestion('Deep research on: ');
  };

  const handleRefresh = async () => {
    if (!lastQuestion) return;
    setLoading(true);
    setError(null);
    
    try {
      const answer = await generateResponse(lastQuestion);
      setResponse(answer);
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response');
      setResponse('');
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (lastQuestion) {
      setQuestion(lastQuestion);
      handleSubmit(new Event('submit') as any);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto p-6 rounded-lg glow bg-black/40 backdrop-blur-sm"
    >
      <h1 className="text-4xl font-bold mb-8 text-center text-white">
        Jupiter<span className="text-[var(--yellow)]">AI</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything..."
            className="w-full p-4 pr-12 rounded-lg bg-black/20 border border-[var(--purple)] text-white placeholder-white/50 focus:outline-none focus:border-[var(--yellow)] transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[var(--yellow)] hover:text-white transition-colors disabled:opacity-50"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Send className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-[var(--purple)] text-white hover:border-[var(--yellow)] transition-colors text-sm"
            >
              <Upload className="w-4 h-4" />
              Upload
            </button>
          </div>
          <button
            type="button"
            onClick={handleImageCreation}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-[var(--purple)] text-white hover:border-[var(--yellow)] transition-colors text-sm"
          >
            <Image className="w-4 h-4" />
            Create Image
          </button>
          <button
            type="button"
            onClick={handleDeepResearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-[var(--purple)] text-white hover:border-[var(--yellow)] transition-colors text-sm"
          >
            <Search className="w-4 h-4" />
            Deep Research
          </button>
          {response && (
            <>
              <button
                type="button"
                onClick={handleRefresh}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-[var(--purple)] text-white hover:border-[var(--yellow)] transition-colors text-sm ml-auto"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <button
                type="button"
                onClick={handleRegenerate}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/20 border border-[var(--purple)] text-white hover:border-[var(--yellow)] transition-colors text-sm"
              >
                <RotateCw className="w-4 h-4" />
                Regenerate
              </button>
            </>
          )}
        </div>

        {selectedFile && (
          <div className="flex items-center justify-between p-2 mt-2 rounded-lg bg-black/20 border border-[var(--purple)]">
            <span className="text-sm text-white truncate">{selectedFile.name}</span>
            <button
              type="button"
              onClick={clearFile}
              className="p-1 text-white hover:text-[var(--yellow)] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="loading-orbit" />
        </div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 rounded-lg bg-black/40 border border-destructive text-destructive mono"
        >
          {error}
        </motion.div>
      )}

      {response && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 p-4 rounded-lg bg-black/40 border border-[var(--purple)] text-white mono"
        >
          {response}
        </motion.div>
      )}
    </motion.div>
  );
}