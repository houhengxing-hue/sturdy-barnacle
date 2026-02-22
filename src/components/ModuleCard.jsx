import { useState } from 'react'

export default function ModuleCard({ module: mod, isExpanded, onToggle, isHighlight }) {
  const [openTopic, setOpenTopic] = useState(null)

  return (
    <article
      className={`rounded-2xl border-2 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 ${mod.borderColor} ${isHighlight ? 'ring-2 ring-amber-400/50' : ''}`}
    >
      <button
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
      >
        <div className={`flex items-center gap-3 bg-gradient-to-r ${mod.color} -mx-2 -mt-2 mb-4 rounded-t-xl px-4 py-3`}>
          <span className="text-2xl">{mod.icon}</span>
          <div>
            <h2 className="text-lg font-bold text-white">{mod.title}</h2>
            <p className="text-xs text-slate-400">{mod.analogy}</p>
          </div>
        </div>
        <span className="text-slate-400">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      {isExpanded && (
        <div className="space-y-4 opacity-100 transition-opacity duration-300">
          {mod.poetry && (
            <blockquote className="rounded-lg border-l-4 border-amber-500/50 bg-slate-700/30 px-4 py-2 italic text-amber-200/90">
              {mod.poetry}
            </blockquote>
          )}
          {mod.insight && (
            <p className="rounded-lg bg-rose-500/10 px-3 py-2 text-sm text-rose-300/90">
              💡 {mod.insight}
            </p>
          )}
          <div className="space-y-2">
            {mod.topics.map((topic) => (
              <div
                key={topic.id}
                className="rounded-xl border border-slate-600/50 bg-slate-700/30 overflow-hidden"
              >
                <button
                  onClick={() => setOpenTopic(openTopic === topic.id ? null : topic.id)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-slate-600/30 transition-colors"
                >
                  <span className="font-medium text-slate-200">{topic.title}</span>
                  <span className="text-slate-400 text-sm">{openTopic === topic.id ? '−' : '+'}</span>
                </button>
                {openTopic === topic.id && (
                  <div className="border-t border-slate-600/50 px-4 py-3 text-slate-300 text-sm leading-relaxed">
                    {topic.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
