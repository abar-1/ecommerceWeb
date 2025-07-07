"use client";

import { useDispatch } from "react-redux";
import { useEffect} from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';


import { setCurrentUser } from "@/store/user/user.action";

import Directory from "@/components/homePage/Directory";

// export const metadata = {
//   title: "Streetwear PopUp",
//   description: "Discover the latest streetwear fashion",
// };

export default function Home() {
 
  return(
    <Directory />
  );
}
