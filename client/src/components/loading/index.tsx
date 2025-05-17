import { Card, CardBody, Skeleton } from "@heroui/react"

export const LoadingSkeleton = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-6">
    <Card>
      <CardBody className="space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-8 w-3/4 rounded-lg" />
          <Skeleton className="h-6 w-1/4 rounded-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="h-6 w-6 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-1/4 rounded" />
                  <Skeleton className="h-5 w-3/4 rounded" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <Skeleton className="h-6 w-1/3 rounded" />
            <Skeleton className="aspect-video rounded-lg" />
          </div>
        </div>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <Skeleton className="h-6 w-1/4 mb-4 rounded" />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="mb-4 space-y-2">
            <Skeleton className="h-5 w-1/3 rounded" />
            <Skeleton className="h-16 w-full rounded" />
            <Skeleton className="h-4 w-1/4 rounded" />
          </div>
        ))}
      </CardBody>
    </Card>
  </div>
)
