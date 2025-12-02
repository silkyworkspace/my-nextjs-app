// Props（引数）として受け取るオブジェクトの型を定義する
// ✅ Next.js 15 以降では params が Promise になるケースがあるため
//    ↓ のように「Promise<{ userId: string }>」として型をつけておく
interface Props {
    params: Promise<{ userId: string }>;
}

// ページコンポーネント本体
// ✅ params を await する必要があるので async 関数にしている
export default async function UserPage(props: Props) {
    // props.params は Promise なので、await で中身を取り出す
    // 取り出したオブジェクトから userId プロパティだけを分割代入で取得
    const { userId } = await props.params;

    return (
        <>
            <h1 className="text-lg border-b pb-1 mb-1 border-gray-200">
                User Page {userId}
            </h1>
        </>
    );
}