import ProfileLeftSidebar from "@/components/shared/ProfileLeftSidebar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row">
      <section className="flex-1 bg-[#E9EBF0] pb-[114px] rounded-b-[63px]">
        <div className="max-w-[1286px] pt-[156px] mx-auto flex flex-col md:flex-row gap-8 lg:gap-[50px] px-4">
          <ProfileLeftSidebar />
          {children}
        </div>
      </section>
    </main>
  );
}
