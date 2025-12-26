import { getPrivacyContent } from '@/lib/markdown';

export const metadata = {
    title: 'Privacy Policy - Prestazo',
};

export default async function PrivacyPage() {
    const { contentHtml, title, updatedAt } = await getPrivacyContent();

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-5 font-sans">
            <div className="max-w-[800px] mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">

                <header className="bg-slate-900 text-white py-14 px-10 text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">{title}</h1>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                        Última actualización: {updatedAt}
                    </p>
                </header>

                <div className="p-10 md:p-14 text-slate-700 text-lg leading-relaxed">
                    {/* 
            Using 'prose' for markdown but overriding styles to match the requested design perfectly.
            [&_p]:text-justify -> Forces all paragraphs to be justified.
          */}
                    <div
                        className="prose prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:border-b-2 prose-h3:border-slate-100 prose-h3:pb-2
              prose-p:text-justify prose-p:mb-5
              prose-ul:pl-5 prose-ul:mb-6 prose-li:mb-2
              prose-strong:text-slate-900 prose-strong:font-bold"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />

                    <footer className="mt-20 pt-10 border-t border-slate-100 text-center">
                        <p className="font-extrabold text-xl text-slate-900 m-0">PRESTAZO</p>
                        <p className="text-slate-500 text-sm mt-1">© 2025 • Reynaldo Sánchez Hernández</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}