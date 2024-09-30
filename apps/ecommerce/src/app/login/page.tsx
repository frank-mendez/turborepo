import { signIn } from "../../../auth";

export default function Login() {
  return (
    <div className="flex flex-col">
      <h1 className="text">Login</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/" });
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
    </div>
  );
}
