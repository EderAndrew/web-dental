import { AppMenubar } from "@/components/app-menubar";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')

  if(!token) redirect('/')
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen">
        <div className="flex">
          <SidebarTrigger />
          <AppMenubar />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}