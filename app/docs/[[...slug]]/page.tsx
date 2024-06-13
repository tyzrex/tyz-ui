import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { FLATTEND_ROUTES } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { cache } from "react";

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export async function generateMetadata({
  params: { slug = [] },
}: {
  params: { slug: string[] };
}) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);
  if (!res) return null;
  const { frontmatter } = res;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export function generateStaticParams() {
  return FLATTEND_ROUTES.filter((item) => item.disabled != true).map(
    (item) => ({
      slug: item.href.split("/"),
    })
  );
}

export default async function DocsPage({
  params: { slug = [] },
}: {
  params: { slug: string[] };
}) {
  const pathName = slug.join("/");
  const res = await cachedGetMarkdownForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-12 ">
      <div className="flex-[3] py-10 ">
        <DocsBreadcrumb paths={slug} />
        <div className="prose prose-zinc dark:prose-invert prose-code:font-code prose-code:bg-zinc-900 prose-pre:bg-zinc-900 prose-headings:scroll-m-20 w-[85vw] sm:w-full sm:mx-auto">
          <h1 className="break-all">{res.frontmatter.title}</h1>
          <p className="-mt-5 text-muted-foreground text-lg mb-2">
            {res.frontmatter.description}
          </p>
          {res.content}
          <Pagination pathname={pathName} />
        </div>
      </div>

      <Toc path={pathName} />
    </div>
  );
}
