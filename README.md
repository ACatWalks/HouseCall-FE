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

### Doctor
*   id. This is a serial and the primary key to refer to doctors in the database.
*   firstName and lastName. These are strings that are displayed at the top of the page to welcome the doctor after s/he logs in.
*   email. This is a string that the doctor can use as a username for login purposes.
*   password. This is a string that enables doctor authentication.
*   NPIMedicalLicense. This is a number that checks that the user is in fact a medical doctor authorized to offer medical advice.

### Comment
*   id. This is a serial and the primary key to refer to comments in the database.
*   author. This is a string equal to the patient or doctor's firstName and lastName concatenated.
*   content. This is a string. 
