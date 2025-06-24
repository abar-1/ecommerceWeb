import Image from "next/image";
import Directory from "../components/Directory.js";
import { redirect } from 'next/navigation';

export const metadata = {
  title: "Streetwear PopUp",
  description: "Discover the latest streetwear fashion",
};

export default function Home() {
  
  redirect('/home');

}
