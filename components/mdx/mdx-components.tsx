import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/components/mdx/component-preview";
import { ComponentSource } from "@/components/mdx/component-source";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    Tabs,
    Tab,
    Steps,
    Step,
    Alert,
    AlertTitle,
    AlertDescription,
    ...components,
  };
}
