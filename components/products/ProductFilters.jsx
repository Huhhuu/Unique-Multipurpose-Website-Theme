export default function ProductFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  filterSaleOnly,
  onToggleSaleOnly,
  totalResults,
  onResetFilters,
}) {
  return (
    <div className="mb-10 space-y-5">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            const count = categoryCounts[cat.id] || 0
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isSelected
                    ? 'bg-dark text-white shadow-md'
                    : 'bg-gray-100 text-dark/70 hover:bg-gray-200 hover:text-dark'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-dark/60'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by product, fabric..."
              className="w-full pl-9 pr-8 py-2.5 rounded-full border border-gray-200 text-xs text-dark focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-white"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-dark text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-auto">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="w-full sm:w-auto appearance-none pl-4 pr-9 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-dark bg-white focus:outline-none focus:border-primary cursor-pointer transition-all"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
            </select>
            <svg
              className="w-3.5 h-3.5 text-gray-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleSaleOnly}
            className={`px-3 py-1.5 rounded-full font-semibold transition-all ${
              filterSaleOnly
                ? 'bg-danger text-white shadow-sm'
                : 'bg-danger/10 text-danger hover:bg-danger/20'
            }`}
          >
            🔥 On Sale Deals Only
          </button>
          <span className="text-dark-muted hidden sm:inline">
            Showing <strong className="text-dark font-semibold">{totalResults}</strong> products
          </span>
        </div>

        {(selectedCategory !== 'all' || searchQuery || filterSaleOnly || sortBy !== 'featured') && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-primary hover:underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>
    </div>
  )
}
