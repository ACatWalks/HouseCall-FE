# HouseCalls

## What This App Does

Patients can sign up, login, submit their symptoms to a secure database, and chat with a doctor. 

## Why It Matters

In the age of COVID-19 more and more services are moving from an in-person model to a virtual model. This is especially relevant given that patients in doctors' waiting rooms are, by definition, less healthy than the general population. Also allows patients with limited time to receive medical advice when an in-person consultation is not necessary or convenient to the patient.

## Technologies

This app uses:

### Back End:
*   Node with Express
*   MongoDB
*   Mongoose

### Front End:
*   React
*   Sass

## Schemas

### Patient
*   id. This is a serial and the primary key to look up or edit patient information.
*   firstName and lastName. These are strings that are displayed at the top of the page to welcome the patient after s/he logs in.
*   profileImage. This is a url that links to a profile image the patient can use to associate with his/her account. 
*   email. This is a string that the user can use as a username for login purposes.
*   password. This is a string that enables user authentication.
*   symptoms. This is an enum that tracks patient symtoms. 
*   role. This is set to "Patient".
*   chats. This is an array of all chats the patient has had.

### Doctor
*   id. This is a serial and the primary key to refer to doctors in the database.
*   firstName and lastName. These are strings that are displayed at the top of the page to welcome the doctor after s/he logs in.
*   email. This is a string that the doctor can use as a username for login purposes.
*   password. This is a string that enables doctor authentication.
*   NPIMedicalLicense. This is a number that checks that the user is in fact a medical doctor authorized to offer medical advice.
*   role. This is set to "Doctor".
*   chats. This is an array of all chats the doctor has had.

### Message
*   id. This is a serial and the primary key to refer to comments in the database.
*   author. This is a string equal to the patient or doctor's id.
*   text. This is a string. 
*   onModel. This is an enum that identifies the author as a patient or doctor.

### Chat
*   id. This is a serial and the primary key to look up chats in the database.
*   doctor. This is the id of the doctor in the chat.
*   patient. This is the id of the patient in the chat.
*   content. This is an array of messages.

## Issues
Currently the user cannot update his/her email address, although all other aspects of the user profile can be edited. Currently new comments are not posting to the database. Future features could include the ability to update or delete comments, the ability to write in additional symptoms, and the ability to schedule an in-person visit with the doctor.
