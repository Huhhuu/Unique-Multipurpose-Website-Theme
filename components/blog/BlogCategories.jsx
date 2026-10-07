export default function BlogCategories({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
        <button
          onClick={() => onSelectCategory('all')}
          className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-dark text-white shadow-sm'
              : 'bg-gray-100 text-dark-muted hover:bg-gray-200'
          }`}
        >
          Tất Cả Bài Viết
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-primary text-white shadow-sm'
                : 'bg-gray-100 text-dark-muted hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative min-w-[260px]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Tìm kiếm bài viết..."
          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 text-xs text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
        />
        <svg
          className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  )
}
