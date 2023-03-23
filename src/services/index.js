import { addDoc, collection, Timestamp } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

export const sendContactForm = async ({ email, schoolName }) => {
  try {
    const ref = collection(firestore, "contact");
    await addDoc(ref, {
      schoolName,
      email,
      sentAt: Timestamp.now().toDate(),
    });
    return 0;
  } catch (err) {
    console.log(err);
    return -1;
  }
};
