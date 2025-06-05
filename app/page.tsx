import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.png"
            height={150}
            width={150}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
        </div>
      </section>
    </div>
  );
}
