export default function BookSidebar({ modules, activeModule, onSelect, searchQuery, onSearch }) {
  return (
    <aside className="w-64 shrink-0 space-y-4">
      <div className="rounded-xl bg-slate-800/60 p-4">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          快速导航
        </h3>
        <nav className="space-y-1">
          {modules.map((mod) => (
            <button
              key={mod.id}
              onClick={() => onSelect(mod.id)}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeModule === mod.id
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
              }`}
            >
              <span>{mod.icon}</span>
              {mod.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="rounded-xl bg-slate-800/60 p-4">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          知识点搜索
        </h3>
        <input
          type="search"
          placeholder="搜索声学、光学、热学..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-amber-500/50 focus:outline-none focus:ring-1 focus:ring-amber-500/30"
        />
      </div>
      <div className="rounded-xl bg-slate-800/60 p-4">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          教学特色
        </h3>
        <ul className="space-y-2 text-xs text-slate-400">
          <li>• 趣味比喻：物理 ≈ 西游记</li>
          <li>• 实际案例引出知识点</li>
          <li>• 物理诗句 & 人文哲理</li>
        </ul>
      </div>
    </aside>
  )
}
