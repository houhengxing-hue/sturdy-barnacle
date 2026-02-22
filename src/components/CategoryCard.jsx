function CategoryCard({ category }) {
  const { title, icon, color, borderColor, items } = category

  return (
    <section
      className={`rounded-2xl border ${borderColor} bg-gradient-to-br ${color} p-6 backdrop-blur-sm transition-all hover:shadow-xl hover:shadow-slate-900/20`}
    >
      <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-100">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className="group block rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 transition-all hover:border-slate-600 hover:bg-slate-800/60"
            >
              <h3 className="mb-2 font-medium text-slate-100 group-hover:text-primary-300 transition-colors">
                {item.title}
              </h3>
              <p className="mb-2 text-sm text-slate-400 line-clamp-2">
                {item.summary}
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span>{item.source}</span>
                <span>·</span>
                <span>{item.time}</span>
                {item.sentiment && (
                  <>
                    <span>·</span>
                    <span
                      className={
                        item.sentiment === 'positive'
                          ? 'text-emerald-400'
                          : item.sentiment === 'negative'
                          ? 'text-rose-400'
                          : 'text-amber-400'
                      }
                    >
                      {item.sentiment === 'positive'
                        ? '正面'
                        : item.sentiment === 'negative'
                        ? '负面'
                        : '中性'}
                    </span>
                  </>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CategoryCard
