import BroField from "@/components/BroField";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-2 pb-20 gap-8 sm:p-22 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BroField />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Бросок @ 2024
      </footer>
    </div>
  );
}
