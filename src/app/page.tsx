import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <p className="mb-8 text-lg text-gray-600">
        Please verify our policies below.
      </p>
      <Link
        href="/privacy"
        className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        View Privacy Policy
      </Link>
    </div>
  );
}
