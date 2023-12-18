import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1 md:space-x-4">
        <Skeleton className="w-86 lg:w-[500px] h-[350px] md:h-[500px]" />
        <div className="space-y-6">
          <Skeleton className="w-86 h-4" />
          <Skeleton className="w-56 h-4" />
          <div className="space-y-3">
            <Skeleton className="w-66 h-4" />
            <Skeleton className="w-66 h-4" />
            <Skeleton className="w-66 h-4" />
            <Skeleton className="w-66 h-4" />
          </div>
          <div className="space-y-3">
            <Skeleton className="w-86 lg:w-[450px] h-72" />
          </div>
        </div>
      </div>
    </>
  );
}
