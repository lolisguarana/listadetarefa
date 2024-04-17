import { StatusBar } from 'expo-status-bar';
import React ,{useState,useEffect}from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';
import AppTab from './AppTab';
import AppAuth from './AppAuth';

export default function App() {
  const [currentUser,setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setCurrentUser(user);
      setIsLoading(false);
    });
  },[]);
  if(isLoading){
    return null;
  }
  return (
    <>
     {currentUser ? <AppTab/> : <AppAuth />}
      <StatusBar style="light" />
    </>
  );
}


