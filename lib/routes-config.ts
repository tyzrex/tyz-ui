// remove disabled

export const ROUTES = [
  {
    title: "Getting Started",
    href: "getting-started",
    items: [
      {
        title: "Introduction",
        href: "/introduction",
      },
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
    ],
  },
  {
    title: "Hook Form Components",
    href: "components",
    items: [
      {
        title: "RHF-Input",
        href: "/rhf-input",
      },
    ],
  },
  {
    title: "Components",
    href: "components",
    items: [
      {
        title: "Image Gallery",
        href: "/image-gallery",
      },
    ],
  },
];

export const FLATTEND_ROUTES = ROUTES.map(({ href, items }) => {
  return items.map((link) => {
    return {
      title: link.title,
      href: href + link.href,
    };
  });
}).flat();
