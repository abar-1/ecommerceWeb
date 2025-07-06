"use client";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '@/utils/firebase/firebase.utils';
import { setCurrentUser } from "@/store/user/user.action";

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('AuthProvider useEffect running - setting up auth listener');
    
    const unsubscribe = onAuthStateChangedListener((user) => {
        console.log('Auth state changed:', user);
        if(user){
            console.log('User found, creating document');
            createUserDocumentFromAuth(user);
        }
        console.log('Dispatching setCurrentUser:', user);
        dispatch(setCurrentUser(user));
    });
    
    console.log('Auth listener set up, returning unsubscribe function');
    return unsubscribe;
  }, [dispatch])

  return children;
}