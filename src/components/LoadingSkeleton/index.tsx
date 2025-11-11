export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8 p-8">
      <div className="h-12 bg-white/5 rounded-lg w-3/4"></div>
      <div className="space-y-3">
        <div className="h-4 bg-white/5 rounded w-full"></div>
        <div className="h-4 bg-white/5 rounded w-5/6"></div>
        <div className="h-4 bg-white/5 rounded w-4/6"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-white/5 rounded-xl"></div>
        ))}
      </div>
    </div>
  );
}
