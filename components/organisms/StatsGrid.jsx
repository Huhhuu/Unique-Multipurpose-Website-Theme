import StatItem from '@/components/molecules/StatItem'

export default function StatsGrid({ stats = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0 items-center max-w-md md:max-w-none mx-auto">
      {stats.map((stat, idx) => (
        <StatItem
          key={stat.id}
          value={stat.value}
          label={stat.label}
          color={stat.color}
          hasDivider={idx < stats.length - 1}
          index={idx}
        />
      ))}
    </div>
  )
}
