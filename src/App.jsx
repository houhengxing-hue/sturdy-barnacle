import { useState, useMemo } from 'react'
import ModuleCard from './components/ModuleCard'
import BookSidebar from './components/BookSidebar'
import { bookMeta, modules } from './data/physicsBookData'

function App() {
  const [activeModule, setActiveModule] = useState(null)
  const [expandedModules, setExpandedModules] = useState(new Set([modules[0]?.id]))
  const [searchQuery, setSearchQuery] = useState('')

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return modules
    const q = searchQuery.toLowerCase().trim()
    return modules.filter((mod) => {
      const matchTitle = mod.title.toLowerCase().includes(q)
      const matchTopics = mod.topics.some(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.content.toLowerCase().includes(q)
      )
      const matchPoetry = mod.poetry?.toLowerCase().includes(q)
      return matchTitle || matchTopics || matchPoetry
    })
  }, [searchQuery])

  const toggleModule = (id) => {
    setExpandedModules((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">
                ⚡
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">{bookMeta.title}</h1>
                <p className="text-sm text-slate-400">
                  {bookMeta.author} · {bookMeta.authorIntro}
                </p>
                <p className="text-xs text-amber-400/80">{bookMeta.style.writing}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          <BookSidebar
            modules={modules}
            activeModule={activeModule}
            onSelect={(id) => {
              setActiveModule(id)
              setExpandedModules((prev) => new Set([...prev, id]))
            }}
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
          />
          <div className="min-w-0 flex-1 space-y-6">
            {filteredModules.length === 0 ? (
              <div className="rounded-2xl border border-slate-600/50 bg-slate-800/50 p-8 text-center text-slate-400">
                未找到与「{searchQuery}」相关的内容，试试别的关键词？
              </div>
            ) : (
              filteredModules.map((mod) => (
                <div
                  key={mod.id}
                  id={mod.id}
                  ref={(el) => {
                    if (el && activeModule === mod.id) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  <ModuleCard
                    module={mod}
                    isExpanded={expandedModules.has(mod.id)}
                    onToggle={() => toggleModule(mod.id)}
                    isHighlight={activeModule === mod.id}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <footer className="mt-12 border-t border-slate-700/50 pt-6 text-center text-sm text-slate-500">
          《{bookMeta.title}》互动版 · 核心知识模块：声与光 · 热学 · 力与运动 · 电与磁
        </footer>
      </main>
    </div>
  )
}

export default App
