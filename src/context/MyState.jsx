import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function MyState({ children }) {
  const [loading, setLoading] = useState(false);

  // Booking info as per user

  const [bookingInfo, setBookingInfo] = useState([]);

  const getAllBookingfunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setBookingInfo(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  useEffect(() => {
    getAllBookingfunction();
  }, []);



  return (
    <MyContext.Provider value={{ loading, setLoading, bookingInfo }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
