import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="test-xl font-semibold pb-5">
        <h2>Loading Results from Google...</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, i: number) => (
          <div key={i} className="border rounded-2xl flex flex-col hover:shadow-lg transition duration-200 ease-in-out italic">
            <div className="p-3 sm:p-4 space-y-3">
              <Skeleton className="w-[160px] md:w-[180px] h-4" />
              <Skeleton className="w-[140px] md:w-[160px] h-4" />
              <Skeleton className="w-[100px] md:w-[120px] h-4" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
