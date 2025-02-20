import Image from "next/image";
import Homepage from '@/app/components/Homepage'
export const metadata = {
  title: "XooX | Next.js E-Commerce",
  description: "Your one-stop shop for all things awesome!", // Add a description for SEO
};

export default function Home() {
  return (
  <Homepage/>
  );
}
