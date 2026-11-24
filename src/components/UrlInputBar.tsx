"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, Link2, Loader2, Sparkles } from "lucide-react";

interface UrlInputBarProps {
  onAddUrl: (url: string) => void;
  isLoading: boolean;
}

export default function UrlInputBar({ onAddUrl, isLoading }: UrlInputBarProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = url.trim();

    if (!trimmed) {
      setError("요약할 유튜브 또는 커뮤니티 URL을 입력해 주세요.");
      return;
    }

    if (!trimmed.toLowerCase().startsWith("http")) {
      setError("올바른 URL 형식이 아닙니다. http:// 또는 https://로 시작해야 합니다.");
      return;
    }

    setError(null);
    onAddUrl(trimmed);
    setUrl("");
  };

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Link2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (error) setError(null);
            }}
            placeholder="유튜브 또는 개발 커뮤니티 URL을 붙여넣으세요 (http 또는 https로 시작)"
            disabled={isLoading}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100 disabled:opacity-60"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-indigo-400"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>AI 분석 중...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              <span>요약하기</span>
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="mt-2.5 flex items-center gap-1.5 text-xs font-medium text-rose-600">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </section>
  );
}
