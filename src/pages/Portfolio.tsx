// src/pages/Portfolio.tsx
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Card }   from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 p-6">
      {projects.map((p) => (
        <Card key={p.slug}>
          <Button asChild variant="outline">
            <Link to={`/case-study/${p.slug}`}>
              Case Study
            </Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
