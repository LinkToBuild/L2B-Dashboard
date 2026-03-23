import Image from "next/image";
import { redirect } from "next/navigation";
import CustomerManagementPage from "./(dashboard)/customermanagement/page";

export default function page() {
  return redirect("/customermanagement");
}
