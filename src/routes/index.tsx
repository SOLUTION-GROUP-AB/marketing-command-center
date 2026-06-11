import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marketing Control Room" },
      { name: "description", content: "Under konstruktion" },
      { property: "og:title", content: "Marketing Control Room" },
      { property: "og:description", content: "Under konstruktion" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Marketing Control Room
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Under konstruktion</p>
      </div>
    </main>
  );
}
