import { CodeBlock } from 'components/code-block';

export const metadata = {
    title: 'Features'
};

const features = [
    {
        title: 'Netlify _redirects',
        description:
            'The public/_redirects file handles URL redirects and proxies at the edge, before the request hits the application.',
        items: [
            {
                heading: '301 Redirect',
                text: 'A permanent redirect from /netlify/* to Google search. The browser URL changes and search engines update their index.',
                code: `/netlify/*  https://www.google.com/search?q=:splat  301`
            },
            {
                heading: 'Proxy Redirect',
                text: 'A transparent proxy from /netlify/* to Google search. The URL stays on your site while content is fetched from the target.',
                code: `/netlify/*  https://www.google.com/search?q=:splat  200`
            }
        ]
    },
    {
        title: 'Netlify Function',
        description:
            'A serverless function deployed under netlify/functions/ that runs on demand without managing a server.',
        items: [
            {
                heading: 'Hello World Function',
                text: 'A simple function accessible at /.netlify/functions/hello that returns a JSON response.',
                code: `// netlify/functions/hello.js
export default async (req, context) => {
  return new Response(
    JSON.stringify({ message: "Hello, World!" }),
    { headers: { "Content-Type": "application/json" } }
  );
};`
            },
            {
                heading: 'Configuration',
                text: 'The functions directory is configured in netlify.toml to point to the correct folder.',
                code: `# netlify.toml
[functions]
  directory = "netlify/functions"`
            }
        ]
    }
];

export default function FeaturesPage() {
    return (
        <main className="w-full py-8">
            <section className="mb-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Features</h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
                    An overview of the functions, redirects, and configurations built into this site.
                </p>
            </section>

            <section className="space-y-10">
                {features.map((feature, i) => (
                    <div key={i} className="rounded-lg border border-blue-700/50 bg-blue-800/40 p-6">
                        <h2 className="text-xl font-bold">{feature.title}</h2>
                        <p className="mt-2 text-sm text-blue-200">{feature.description}</p>

                        <div className="mt-5 space-y-6">
                            {feature.items.map((item, j) => (
                                <div key={j}>
                                    <h3 className="mb-1 text-sm font-semibold uppercase tracking-wide text-blue-300">
                                        {item.heading}
                                    </h3>
                                    <p className="mb-3 text-sm text-blue-100">{item.text}</p>
                                    <CodeBlock code={item.code} lang="javascript" lineNumbers />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
