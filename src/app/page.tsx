import NpAboutSection from "@/components/npaggregates/npaboutsection";
import NpProfileSection from "@/components/npaggregates/npprofilesection";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)] bg-zinc-100">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<NpProfileSection />
				<NpAboutSection />
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				Footer
			</footer> */}
		</div>
	);
}
