"use client";

import { laptops } from "@/components/data/Data";
import { db, storage } from "@/firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function page() {
  const [img, setImg] = useState();

  const uploadPic = async () => {
    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, img);
    setImg(null);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
        }
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            await updateDoc(doc(db, "nextJs", "data"), {
              laptops: arrayUnion({
                id: uuid(),
                name: 'Lenovo Legion Pro 7i Gen 9 16',
                price: 37800000,
                discount: 37300000,
                rating: '5 (1 sharhlar)',
                image: downloadURL,
                purchased: 299,
                specs: {
                    processor: 'Intel Core i9-14900HX',
                    processorSpeed: null,
                    ram: '32 GB',
                    memory: 'SSD 1 TB',
                    screen: '16 inches',
                    refreshRate: '240 Hz',
                    graphics: 'Nvidia GeForce RTX 4080 Laptop GPU',
                    weight: '6.17 lbs',
                    touchScreen: '❌'
                }
              }),
            }).catch((err) => console.log(err));
          }
        );
      }
    );
  };

  const up = async()=>{
   await updateDoc(doc(db,'nextJs','data'),{
        laptop: laptops
    })
  }

  return (
    <div>
      <input type="file" onChange={(e) => setImg(e.target.files[0])} />

      <button onClick={() => up()}>upload</button>
    </div>
  );
}
