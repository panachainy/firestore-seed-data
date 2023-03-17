import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const app = initializeApp({
  //.. add config
});

const db = getFirestore(app);

const seedData = [
  {
    data: 1,
  },
  {
    data: 2,
  },
];

seedData.forEach(async (data) => {
  await addDoc(collection(db, "groupId"), data);
});
