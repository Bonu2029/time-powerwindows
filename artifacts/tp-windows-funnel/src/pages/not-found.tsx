import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="text-center">
          <CardContent className="pt-8 pb-8 px-6">
            <h1 className="font-serif text-7xl font-bold text-primary mb-2">404</h1>
            <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/">
                <Button className="bg-secondary text-white hover:bg-secondary/90">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/quote">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Get a Quote
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
