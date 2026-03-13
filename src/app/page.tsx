import Image from "next/image";
import { redirect } from "next/navigation";
import CustomerManagementPage from "./(dashboard)/customermanagement/page";

export default function Home() {
  // It will redirect to CustomerManagement By default
  return redirect("/customermanagement");
}
