"use client";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';
import { setCurrentUser, checkUserSession } from "@/store/user/user.action";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return children;
}