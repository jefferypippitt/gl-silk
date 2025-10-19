import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { RegistryItem } from "@/lib/registry";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ComponentCardProps {
  item: RegistryItem;
  children: React.ReactNode;
}

export function ComponentCard({ item, children }: ComponentCardProps) {
  return (
    <Card className="flex flex-col gap-4 min-h-[500px] relative">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{item.title || item.name}</CardTitle>
          <OpenInV0Button name={item.name} className="w-fit" />
        </div>
        <CardDescription>
          {item.description || "No description available."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center flex-1 min-h-[350px] relative">
        {children}
      </CardContent>
    </Card>
  );
}
