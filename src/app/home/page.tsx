import { redirect } from "next/navigation";

// the portfolio landing now lives at "/" — keep old links working
export default function Home() {
  redirect("/");
}
