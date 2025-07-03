import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CalculatorSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Lost Revenue Card Skeleton */}
      <Card className="border-red-200 bg-red-50">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-32 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>

      {/* Potential Benefits Card Skeleton */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-40 mb-2" />
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-4 w-full" />
        </CardContent>
      </Card>

      {/* Performance Impact Card Skeleton */}
      <Card className="border-blue-200 bg-blue-50">
        <CardHeader>
          <Skeleton className="h-6 w-1/2" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-20" />
          </div>
        </CardContent>
      </Card>

      {/* CTA Card Skeleton */}
      <Card>
        <CardContent className="p-8 text-center">
          <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-full mb-6" />
          <Skeleton className="h-12 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-2/3 mx-auto" />
        </CardContent>
      </Card>
    </div>
  );
};