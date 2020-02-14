// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCIbEU7agYbrZZrWg_d8zHu3Xn_t-AIntY",
    authDomain: "taurus-website-6f415.firebaseapp.com",
    databaseURL: "https://taurus-website-6f415.firebaseio.com",
    projectId: "taurus-website-6f415",
    storageBucket: "taurus-website-6f415.appspot.com",
    messagingSenderId: "648878966245",
    appId: "1:648878966245:web:d991d98049ecf067f01b0c",
    measurementId: "G-ZWRG451Y8S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }