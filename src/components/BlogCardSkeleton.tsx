import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function BlogCardSkeleton() {
  return (
    <Card className="overflow-hidden border border-gray-200">
      <Skeleton className="h-48 w-full" />
      <CardHeader>
        <div className="flex items-center space-x-4 mb-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <Skeleton className="h-5 w-20 mb-2" />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <CardDescription>
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-5/6" />
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-4 w-20" />
      </CardFooter>
    </Card>
  )
}

