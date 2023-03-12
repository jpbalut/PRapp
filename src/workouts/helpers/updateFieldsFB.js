
export const updateFieldsFB = () => {
  getAuth()
  .getUser(uid)
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
  .catch((error) => {
    console.log('Error fetching user data:', error);
  });
    // // Initialize Firebase app
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBlN2ngGmkSCbSLCi_dFP3wCRLNijWIjpE",
    //   authDomain: "prapp-b35d6.firebaseapp.com",
    //   projectId: "prapp-b35d6",
    //   storageBucket: "prapp-b35d6.appspot.com",
    //   messagingSenderId: "164128352511",
    //   appId: "1:164128352511:web:4a6b2af1a559ae05b344ca",
    //   measurementId: "G-FNBZBH4EGY"
    // });
    
    // // Get a reference to the Firestore database
    // const db = firebase.firestore();
    
    // // Get a reference to the "exercise" collection
    // const exerciseRef = db.collection('exercise');
    
    // // Query all documents in the collection
    // exerciseRef.get()
    //   .then((querySnapshot) => {
    //     // Loop through each document
    //     querySnapshot.forEach((doc) => {
    //       // Add a new field "newField" with a value of "newValue" to the document
    //       doc.ref.update({
    //         historical_Rm: [],
    //         historical_dates: [],
    //       })
    //       .then(() => {
    //         console.log(`New field added to document ${doc.id}`);
    //       })
    //       .catch((error) => {
    //         console.error(`Error adding new field to document ${doc.id}:`, error);
    //       });
    //     });
    //   })
    //   .catch((error) => {
    //     console.error('Error querying documents:', error);
    //   });

}
