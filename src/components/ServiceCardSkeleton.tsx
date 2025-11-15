import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function ServiceCardSkeleton() {
  return (
    <Card className="h-full flex flex-col border border-gray-200">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <Skeleton className="w-16 h-16 rounded-xl" />
        </div>
        <Skeleton className="h-7 w-3/4 mb-2" />
        <CardDescription>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-4">
        <ul className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Skeleton className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" />
              <Skeleton className="h-4 flex-1" />
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 border-t border-gray-100">
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}

