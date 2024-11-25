import MenuLayout from "@/components/MenuLayout";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MenuLayout />
      {children}
    </div>
  );
}