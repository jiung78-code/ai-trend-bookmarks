"use client";

import { Calendar, ExternalLink, Globe, Trash2, Youtube } from "lucide-react";
import { Bookmark } from "@/types/bookmark";

interface BookmarkCardProps {
  bookmark: Bookmark;
  onDelete: (id: string) => void;
  onTagClick: (tag: string) => void;
}

export default function BookmarkCard({
  bookmark,
  onDelete,
  onTagClick,
}: BookmarkCardProps) {
  const isYoutube = bookmark.sourceType === "youtube";

  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-200 hover:shadow-md">
      <div>
        <div className="mb-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isYoutube
                ? "bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-200/70"
                : "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-200/70"
            }`}
          >
            {isYoutube ? (
              <Youtube className="h-3.5 w-3.5" />
            ) : (
              <Globe className="h-3.5 w-3.5" />
            )}
            {isYoutube ? "YouTube" : "Community"}
          </span>

          <span className="inline-flex items-center gap-1 text-xs text-slate-400">
            <Calendar className="h-3.5 w-3.5" />
            {bookmark.createdAt}
          </span>
        </div>

        <h2 className="mb-3 line-clamp-2 text-base font-semibold leading-snug text-slate-900">
          {bookmark.title}
        </h2>

        <ul className="mb-4 space-y-2 text-sm leading-relaxed text-slate-600">
          {bookmark.summary.map((line, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 border-t border-slate-100 pt-3.5">
        <div className="flex flex-wrap gap-1.5">
          {bookmark.tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick(tag)}
              className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              #{tag}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2">
          <a
            href={bookmark.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-indigo-50 hover:text-indigo-700 hover:ring-indigo-200"
          >
            <span>원본 링크</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => onDelete(bookmark.id)}
            aria-label="북마크 삭제"
            className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span>삭제</span>
          </button>
        </div>
      </div>
    </article>
  );
}
