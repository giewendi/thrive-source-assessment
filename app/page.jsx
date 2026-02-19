import { CodeBlock } from 'components/code-block';

const qna = [
    {
        id: 1,
        question:
            'Talk about how you made your site and why you chose the tools you did. Briefly explain one challenge you experienced in setting up this site and how you overcame it.',
        answer: [
            'I created the site by starting a new project on Netlify using the Next.js framework with Tailwind CSS.',
            'I chose Next.js to demonstrate my familiarity with it, as it is listed as a qualification for this role, and Tailwind for fast, consistent styling.',
            'I connected the project to a GitHub starter template to speed up setup and maintain a standard structure.'
        ],
        extra: [
            {
                heading: 'Deployment',
                points: [
                    "The site is deployed via Netlify's Git integration, which automatically builds and publishes updates on each push."
                ]
            },
            {
                heading: 'Challenge',
                points: [
                    'The main setup consideration was ensuring the correct build configuration for a Next.js project.',
                    'I verified the build command and settings, then triggered a fresh build to resolve the issue and deploy successfully.'
                ]
            }
        ]
    },
    {
        id: 2,
        question:
            'What did you think of our service during the time you used it? Provide some constructive criticism or some features that impressed you.',
        answer: [],
        extra: [
            {
                heading: 'What impressed me',
                points: [
                    'Ease of use: The platform is very intuitive and quick to set up, even for a new project.',
                    'Instant deployment: The Git-based workflow is seamless — pushing to GitHub automatically builds and deploys the site.',
                    'Deploy previews: Automatic previews for pull requests make testing changes straightforward.',
                    'Edge Functions: Serverless functions integrate smoothly without requiring complex configuration.'
                ]
            },
            {
                heading: 'Constructive feedback',
                points: [
                    'I did not encounter any significant issues during my usage. The setup and deployment process worked smoothly end-to-end.'
                ]
            }
        ]
    },
    {
        id: 3,
        question:
            'Rank your 5 favorite and 5 least favorite activities from the list.',
        answer: [],
        extra: [
            {
                heading: 'Favorite',
                points: [
                    'Help train and onboard new support teammates',
                    'Work with the development team to help design a new feature based on feedback from customers',
                    'Engage multiple users at once via chat to answer their questions and troubleshoot problems',
                    'Submit bug reports and potentially bug fixes',
                    "Dig through server logs to troubleshoot a customer's website behavior"
                ]
            },
            {
                heading: 'Least Favorite',
                points: [
                    'Join a Zoom call with a VIP customer you have been helping via email, upon their request',
                    'Work with prospective customers to explain our service and the pricing model',
                    'Help manage communications during a service outage',
                    'Manage a Support team',
                    'Write and maintain Support Guides for our product'
                ]
            }
        ]
    },
    {
        id: 4,
        question:
            'Provide a link to documentation for a technical/developer-focused product, which you think are well done, and explain why.',
        answer: ['Documentation: https://tailwindcss.com/docs'],
        extra: [
            {
                heading: 'Why I think it is well done',
                points: [
                    'Clear organization: The documentation is well structured, making it easy to quickly locate utilities, components, and configuration options.',
                    'Practical examples: It provides real-world examples that can be applied immediately in development.',
                    'Live previews: Visual previews alongside code snippets help users understand the effect of styles without guesswork.',
                    'Efficient search: The search function is fast and accurate, which is especially useful when working under time constraints.'
                ]
            }
        ]
    },
    {
        id: 5,
        question:
            'Explain what you think are two major challenges around DNS configuration for less-technical customers hosting websites.',
        answer: [
            'Two major challenges for less-technical customers are understanding DNS terminology and knowing which records to modify. Concepts such as A records, CNAMEs, nameservers, and propagation are not intuitive for users without a technical background. Many customers are unsure whether they should update nameservers at the registrar or edit individual DNS records at the hosting provider, which can lead to incorrect changes and website downtime.',
            'Another challenge is the delay caused by DNS propagation and caching. After making changes, users often expect immediate results, but DNS updates can take time to spread across the internet. During this period, the site may appear to work on some networks but not others, which can be confusing and frustrating. Without understanding this behavior, customers may repeatedly change settings, unintentionally creating additional issues.'
        ],
        extra: []
    },
    {
        id: 6,
        question:
            'A customer writes in saying their "site won\'t build". You see this error: Build failed due to a user error: Build script returned non-zero exit code: 2. How would you troubleshoot this issue?',
        answer: [
            'Review the full build logs to find the specific error above the exit code message.',
            'Check build settings such as the build command, publish directory, framework detection, and environment variables.',
            'Look for common issues (dependency errors, Node version mismatch, missing env vars, incorrect configuration).',
            'Compare with the last successful build to identify recent changes.',
            'Ask the customer for key details (framework, build command, Node version, whether it builds locally, and the relevant log snippet).',
            'Guide the customer to run a clean local install and build to isolate the issue.'
        ],
        extra: [
            {
                heading: 'Customer-facing first response',
                isResponse: true,
                text: `Hi there — thanks for reaching out. I checked the build logs and I'm seeing the build stops with "Build script returned non-zero exit code: 2." That message is a general "the build command failed" indicator, so the key detail will be the specific error a few lines above that summary in the logs.

To help you quickly, could you please reply with:
• The build command you're using (e.g., npm run build) and your expected publish/output directory
• Your framework (Next.js / React / Vite / etc.) and package manager (npm / yarn / pnpm)
• The Node.js version you use locally
• The 10–30 lines of logs right above the exit code line (where the first real error appears)
• Whether the site builds successfully on your machine, and if so, the exact command you run

In the meantime, a quick check that resolves many build failures is a clean install + rebuild locally:`,
                code: `# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Run your build command
npm run build`
            }
        ]
    },
    {
        id: 7,
        question:
            'How would you set up an HTTP 301 redirect from "/netlify/anything" to https://www.google.com/search?q=anything? How about a proxy redirect?',
        answer: [],
        extra: [
            {
                heading: '301 Redirect',
                text: 'Create or edit a file named _redirects in your public/ folder:',
                code: `/netlify/*  https://www.google.com/search?q=:splat  301`,
                points: [
                    ':splat passes everything after /netlify/ into the query',
                    '301 signals a permanent redirect'
                ]
            },
            {
                heading: 'Proxy Redirect',
                text: 'Add a proxy rule using status code 200:',
                code: `/netlify/*  https://www.google.com/search?q=:splat  200`,
                points: [
                    '200 performs a rewrite (proxy)',
                    'URL stays on your site, content is fetched from the target'
                ]
            }
        ]
    },
    {
        id: 8,
        question:
            'Please attempt to deploy a function on our service. Describe what you experienced and how you attempted to troubleshoot any issues.',
        answer: [
            'I attempted to deploy a simple "Hello World" Netlify Function in my Next.js project by adding a function file under netlify/functions/hello.js and configuring the functions directory via netlify.toml.',
            'My goal was to validate it locally using netlify dev and then push to GitHub to trigger a Netlify deploy.'
        ],
        extra: [
            {
                heading: 'Issue encountered',
                points: [
                    'I ran into an issue getting netlify dev to run correctly in my environment, which prevented me from fully testing the function locally.'
                ]
            },
            {
                heading: 'Troubleshooting steps',
                points: [
                    'I verified the function folder structure (netlify/functions) and ensured the function endpoint path should be /.netlify/functions/hello.',
                    'I checked my Netlify project linking/status and confirmed I was running commands from the project root.',
                    'I reviewed the build settings/config (functions directory and framework detection) and re-ran netlify dev after reinstalling dependencies.',
                    'Since the repository was already connected to Netlify, I proceeded with pushing changes to GitHub to let Netlify build and deploy.'
                ]
            }
        ]
    },
    {
        id: 9,
        question:
            'You receive a report of a severe security issue on www.netlify.com. How might you investigate, respond to the reporter, and escalate?',
        answer: [],
        extra: [
            {
                heading: 'Initial investigation',
                points: [
                    'Acknowledge the report immediately and treat it as high priority.',
                    'Gather all available details from the reporter (steps to reproduce, affected URLs, proof of concept, timestamps, screenshots).',
                    'Attempt to reproduce the issue in a controlled environment without exposing additional risk.',
                    'Check internal monitoring, logs, and recent deployments for anomalies or related activity.',
                    'Limit information sharing to appropriate personnel to avoid accidental disclosure.'
                ]
            },
            {
                heading: 'Customer-facing response',
                isResponse: true,
                text: `Thank you for bringing this to our attention. We take security reports extremely seriously, and our security team has been notified and is actively investigating the issue you described.

We appreciate the information you've already provided. If you have any additional details — such as reproduction steps, timestamps, affected URLs, or proof-of-concept materials — they would help us assess the situation more quickly.

While we're unable to confirm specifics until the investigation is complete, please be assured that protecting our users and systems is a top priority. We will follow up as soon as we have meaningful updates to share.

Thank you again for reporting this responsibly.`
            },
            {
                heading: 'Escalation approach',
                points: [
                    'Escalate immediately to the internal security/incident response team and relevant engineering leadership.',
                    'Classify the report as a potential high-severity incident and follow established incident response procedures.',
                    'Ensure key stakeholders are notified so mitigation can begin quickly if the issue is confirmed.',
                    'Maintain a clear communication channel with the reporter while protecting sensitive details.'
                ]
            }
        ]
    }
];

export default function HomePage() {
    return (
        <main className="w-full py-8">
            {/* Intro */}
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Thrive Source Assessment
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-200">
                    Hi, I&apos;m <span className="font-semibold text-white">Giewen Pinlac</span> and
                    this is my web development tech support assessment for Thrive Source.
                </p>
            </section>

            {/* Q&A Section */}
            <section className="space-y-8">
                {qna.map((item) => (
                    <QACard key={item.id} item={item} />
                ))}
            </section>
        </main>
    );
}

function QACard({ item }) {
    return (
        <div className="rounded-lg border border-blue-700/50 bg-blue-800/40 p-6">
            {/* Question */}
            <div className="mb-4 flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                    {item.id}
                </span>
                <h2 className="text-lg font-semibold leading-snug">{item.question}</h2>
            </div>

            {/* Answer bullets */}
            {item.answer.length > 0 && (
                <ul className="mb-4 space-y-2 pl-10 text-blue-100">
                    {item.answer.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Extra sections */}
            {item.extra.map((section, i) => (
                <div key={i} className="mt-4 pl-10">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-300">
                        {section.heading}
                    </h3>

                    {section.isResponse && section.text && (
                        <div className="mb-3 rounded border-l-2 border-blue-400 bg-blue-900/50 px-4 py-3 text-sm text-blue-100 whitespace-pre-line">
                            {section.text}
                        </div>
                    )}

                    {!section.isResponse && section.text && (
                        <p className="mb-2 text-sm text-blue-200">{section.text}</p>
                    )}

                    {section.code && (
                        <div className="my-3">
                            <CodeBlock code={section.code} lang="bash" lineNumbers />
                        </div>
                    )}

                    {section.points && (
                        <ul className="space-y-1.5 text-sm text-blue-100">
                            {section.points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                                    <span>{pt}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
