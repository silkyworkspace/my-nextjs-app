// Props（引数）として受け取るオブジェクトの型を定義する
// ✅ Next.js 15 以降では params が Promise になるケースがあるため

import { users } from "@/app/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";

//    ↓ のように「Promise<{ userId: string }>」として型をつけておく
interface Props {
    params: Promise<{ userId: string }>;
}

// ページコンポーネント本体
export default async function UserPage(props: Props) {
    const { userId } = await props.params;
    // ✅ params を await する必要があるので async 関数にしている
    // props.params は Promise なので、await で中身を取り出す
    // 取り出したオブジェクトから userId プロパティだけを分割代入で取得

    const user = users[Number(userId)]
    // userIdは、URLのパラメーターなのでstring型となる。
    // そのため、配列のインデックスとして使いたい場合は、Number型に変換する必要がある

    if (user === undefined) {
        notFound();
    }
    
    return (
        <>
            <h1 className="text-lg border-b pb-1 mb-1 border-gray-200">
                {user.name}
            </h1>

            <p>
                {user.prof}
            </p>

            <p className="mt-4">
                <Link href="/" className="text-blue-500 hover:text-blue-700">Go back</Link>
            </p>
        </>
    );
}