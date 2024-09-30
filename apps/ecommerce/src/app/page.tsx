import { auth, signOut } from "../../auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/login");
  return (
    <div className="flex flex-col">
      <h1 className="text">Dashboard</h1>
      <div>
        {session && session.user && session.user.image && (
          <Image
            width={50}
            height={50}
            src={session.user.image}
            alt="User Avatar"
          />
        )}
      </div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
}
