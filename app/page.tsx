import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Card>
        <CardTitle>
          title
        </CardTitle>
        <CardDescription>
          description
        </CardDescription>
      </Card>
      <Card>
      <CardHeader>
        <CardTitle>
          title
        </CardTitle>
        <CardDescription>
          desc
        </CardDescription>
      </CardHeader>
      </Card>
    </div>
  );
}

