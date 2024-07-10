import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen  max-h-screen">
      <section className="remove-scrollbar container  justify-center items-center my-auto">
      <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo1.png"
            height={300}
            width={1000}
            alt="patient"
            className="mb-12 mt-30 h-10 justify-center items-center w-fit"
          />

          {/* <PatientForm /> */}

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 QuickClinic
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
