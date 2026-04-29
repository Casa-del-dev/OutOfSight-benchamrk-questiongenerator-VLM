"use client";

import { useState } from "react";
import type { UserEntry } from "../../pages/QuestionView";

// ─── JsonViewer ───────────────────────────────────────────────────────────────

interface JsonViewerProps {
  data: Record<string, unknown> | null | undefined;
}

function JsonNode({ value, depth = 0 }: { value: unknown; depth?: number }) {
  const [collapsed, setCollapsed] = useState(depth > 1);

  const Toggle = ({ count, kind }: { count: number; kind: string }) => (
    <button
      onClick={() => setCollapsed((c) => !c)}
      className="inline-flex items-center gap-1 text-[10px] text-slate-500 hover:text-slate-300 transition-colors ml-1"
    >
      <span className="text-[8px]">{collapsed ? "▶" : "▼"}</span>
      {collapsed && (
        <span className="text-slate-600">
          {count} {kind}
        </span>
      )}
    </button>
  );

  if (value === null) return <span className="text-slate-500">null</span>;
  if (typeof value === "boolean")
    return <span className="text-amber-400">{String(value)}</span>;
  if (typeof value === "number")
    return <span className="text-emerald-400">{value}</span>;
  if (typeof value === "string")
    return <span className="text-pink-400">"{value}"</span>;

  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="text-slate-600">[]</span>;
    return (
      <span>
        <span className="text-slate-500">[</span>
        <Toggle count={value.length} kind="items" />
        {!collapsed && (
          <div className="pl-4 border-l border-slate-800 ml-1">
            {value.map((v, i) => (
              <div key={i} className="leading-relaxed">
                <JsonNode value={v} depth={depth + 1} />
                {i < value.length - 1 && (
                  <span className="text-slate-700">,</span>
                )}
              </div>
            ))}
          </div>
        )}
        {!collapsed && <span className="text-slate-500">]</span>}
      </span>
    );
  }

  if (typeof value === "object" && value !== null) {
    const keys = Object.keys(value as Record<string, unknown>);
    if (keys.length === 0)
      return <span className="text-slate-600">{"{}"}</span>;
    return (
      <span>
        <span className="text-slate-500">{"{"}</span>
        <Toggle count={keys.length} kind="keys" />
        {!collapsed && (
          <div className="pl-4 border-l border-slate-800 ml-1">
            {keys.map((k, i) => (
              <div key={k} className="leading-relaxed">
                <span className="text-blue-300">"{k}"</span>
                <span className="text-slate-600">: </span>
                <JsonNode
                  value={(value as Record<string, unknown>)[k]}
                  depth={depth + 1}
                />
                {i < keys.length - 1 && (
                  <span className="text-slate-700">,</span>
                )}
              </div>
            ))}
          </div>
        )}
        {!collapsed && <span className="text-slate-500">{"}"}</span>}
      </span>
    );
  }

  return <span className="text-slate-300">{String(value)}</span>;
}

export function JsonViewer({ data }: JsonViewerProps) {
  const [copied, setCopied] = useState(false);

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-slate-600">
        <span className="text-4xl">📄</span>
        <p className="text-sm">No JSON data available</p>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center px-4 py-2.5 border-b border-white/5 shrink-0">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 flex-1">
          Raw JSON
        </span>
        <button
          onClick={handleCopy}
          className={`text-[11px] font-medium px-2.5 py-1 rounded-md transition-all ${
            copied
              ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
              : "bg-slate-800 hover:bg-slate-700 text-slate-400 border border-white/[0.07]"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy JSON"}
        </button>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-auto p-4 font-mono text-[12px] leading-relaxed text-slate-300">
        <JsonNode value={data} depth={0} />
      </div>
    </div>
  );
}

// ─── UserVideoSelector ────────────────────────────────────────────────────────

interface UserVideoSelectorProps {
  users: UserEntry[];
  selectedUserId: string;
  selectedVideoId: string;
  onUserChange: (uid: string) => void;
  onVideoChange: (vid: string) => void;
}

export function UserVideoSelector({
  users,
  selectedUserId,
  selectedVideoId,
  onUserChange,
  onVideoChange,
}: UserVideoSelectorProps) {
  return (
    <div className="p-3">
      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-600 px-2 mb-3">
        Participants
      </p>

      <div className="flex flex-col gap-1">
        {users.map((user) => {
          const isUserSelected = user.userId === selectedUserId;

          return (
            <div key={user.userId}>
              {/* User row */}
              <button
                onClick={() => onUserChange(user.userId)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-[13px] font-medium transition-all ${
                  isUserSelected
                    ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                    : "text-slate-400 hover:bg-white/4 hover:text-slate-200 border border-transparent"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold shrink-0 ${
                    isUserSelected
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {user.userId.slice(0, 2)}
                </div>
                <span className="flex-1 truncate">{user.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-500">
                  {user.videos.length}
                </span>
              </button>

              {/* Videos */}
              {isUserSelected && (
                <div className="ml-3 mt-1 mb-2 flex flex-col gap-0.5 pl-3 border-l border-slate-800">
                  {user.videos.map((video) => {
                    const isSelected = video.id === selectedVideoId;
                    return (
                      <button
                        key={video.id}
                        onClick={() => onVideoChange(video.id)}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] text-left transition-all ${
                          isSelected
                            ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                            : "text-slate-500 hover:bg-white/3 hover:text-slate-300 border border-transparent"
                        }`}
                      >
                        <span className="text-[11px] shrink-0">
                          {video.trajectory ? "🎯" : "🎬"}
                        </span>
                        <span className="truncate">{video.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
