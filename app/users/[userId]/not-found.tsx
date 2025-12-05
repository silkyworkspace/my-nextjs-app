import Link from "next/link";

export default async function UserNotFoundPage() {
    return (
        <>
            <h1 className="text-lg border-b pb-1 mb-1 border-gray-200">
               Error!
            </h1>

            <p>
                User not found!
            </p>

            <p className="mt-4">
                <Link href="/" className="text-blue-500 hover:text-blue-700">Go back</Link>
            </p>
        </>
    );
}