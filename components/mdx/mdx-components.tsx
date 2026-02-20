import defaultMdxComponents from "fumadocs-ui/mdx";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Files, File, Folder } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "@/components/mdx/component-preview";
import type { ComponentProps } from "react";
import { ComponentSource } from "@/components/mdx/component-source";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { RerunButton } from "@/components/mdx/rerun-button";

const DOCS_PREVIEW_HEIGHT = 200;

function DocsComponentPreview(props: ComponentProps<typeof ComponentPreview>) {
  return <ComponentPreview height={DOCS_PREVIEW_HEIGHT} {...props} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    ComponentPreview: DocsComponentPreview,
    ComponentSource,
    OpenInV0Button,
    RerunButton,
    ...TabsComponents,
    Steps,
    Step,
    Files,
    File,
    Folder,
    Accordion,
    Accordions,
    TypeTable,
    Alert,
    AlertTitle,
    AlertDescription,
    ...components,
  };
}
