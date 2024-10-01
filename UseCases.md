
<table>
  <tr>
   <td><strong>Use Case</strong>
   </td>
   <td>1. Register_Account <br /><strong>history: </strong>created 2024-09-10, modified 2024-09-30
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The user creates their account, providing personal information such as their Personal Health Number (PHN), name, birthdate, contact information, emergency contact information, and possibly their place of residence, along with a password.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>The user accepts the terms of registration, <br />
   The user has all the required information, <br />
   The user does not already have an account.
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>New account user, database, government health database.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>
<li>User selects "Register Account."</li>
<li>User inputs their information and submits a photo of themselves holding their care card to confirm their identity.</li>
<li>The government health database is checked to confirm the PHN is correct and associated properly with the name and date of birth (DOB).</li>
<li>The database for user information saves the inputted username and password for future login attempts.</li>
<li>User is redirected to the home page.</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#3.</strong> The user already has an account associated with the PHN and is therefore notified that a persistent account exists, allowing them to opt for password recovery instead.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td><strong>Authentication Time:</strong> Time to authenticate user data is less than 2 seconds. <br />
   <strong>Data Clarity:</strong> Missing data inputs are clearly shown to users, and required information is easily found. <br />
   <strong>Photo Verification:</strong> Photo/identity verification takes less than 10 seconds.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>The user may input incorrect data, such as a wrong PHN, incorrect DOB, or a name not associated with the PHN.
   </td>
  </tr>
</table>


                 
<table>
  <tr>
   <td><strong>Use Case</strong>
   </td>
   <td>2. Create_Triage_Application <br /><strong>history: </strong>created 2024-09-12
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Patients input their relevant health information, including symptoms, pain scales, and medical history.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>Patients are able to properly describe their symptoms. <br />
   Patients do not lie about their symptoms and pain.
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>Patient, triage algorithm, nurse.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>
<li>Patient inputs their symptoms.</li>
<li>Patient provides pain scales for each symptom from 1-10.</li>
<li>Patient inputs the timeline for symptoms.</li>
<li>Patient inputs any relevant medical history, such as previous surgeries, medications they take, or past injuries and illnesses.</li>
<li>Patient indicates whether the pain is from an injury, a sickness, or is unknown.</li>
<li>Patient signs a form stating that everything they wrote is true.</li>
<li>Patient submits this information.</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#7.</strong> There is a network error in submitting the data. Required fields are unfilled, prompting the patient to fill out those fields.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td><strong>Security:</strong> Patient information is kept secure and confidential via encryption while transmitted over the network. <br />
   <strong>Timeliness:</strong> Users are provided with an approximate timeline for how long it will take to be triaged.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>How are nurses properly alerted of triage information being submitted? What if the patient is unable to describe their symptoms effectively?
   </td>
  </tr>
</table>

  
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Edit_Application <strong>extends</strong> 2. Create_Triage_Application
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The patient may wish to update their triage application if their symptoms or pain change.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the user's symptoms change, <strong>then</strong> they can update them. <br />
<strong>#2.</strong> If the user's pain changes, <strong>then</strong> they can edit the pain scale. <br />
<strong>#3.</strong> If a more accurate timeline for symptoms is remembered, <strong>then</strong> the timeline should be updated. <br />
<strong>#4.</strong> If any information was updated, <strong>then</strong> the user must resubmit their triage application, and the database plus nurse will be alerted of this change.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>How should a changed triage application affect a patient's previously submitted triage? Do newly updated triages need to be reviewed again?
   </td>
  </tr>
</table>


   
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Delete_Application <strong>extends</strong> 2. Create_Triage_Application
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The patient may wish to delete their triage application if they no longer want to be triaged.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the user wishes to delete their application, <strong>then</strong> the application can be deleted, and the database will be alerted of this deletion.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>What kind of alerts should be given to a user when they wish to delete their triage application? Should there be a comment box for users to input their reasons for deleting their application?
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>Use Case</strong>
   <td>3. Patient_Notification    <br />
<strong>history </strong>created 2024-09-17, modified 2024-09-30
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>System automatically provides real-time updates via email on the current Emergency Department (ED) load and recommends the best course of action based on virtual triage results.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>Patients have completed the virtual triage. <br />
Patients' contact information exists in the system database. <br />
Emergency Department (ED) load status exists in the system database. <br />
Nurse reviews and approves the triage application. 
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>Patient (primary), Nurse (secondary)
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>

<li>Write to notification that patient has been triaged.</li>

<li>Write to notification ED load status. </li>

<li>
  <p>IF triage determines patient is at high risk THEN </p>
  <p>3.1 Select type of triage required: Visit ER. </p>
  <p>ELSE IF triage determines patient is at moderate risk THEN </p>
  <p> 3.2 Select type of triage required: Wait for ER. </p>
  <p>ELSE</p> 
<p>3.3 Select type of triage required: 3.3.1 Contact Hotline, 3.3.2 Go to GP or 3.3.3 Over the Counter</p>
</li>
<li>Send notification to patient.</li>
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#1</strong>. Patients may be notified via automated phone call, <strong>or</strong> automated text message, <strong>or</strong> app notification banner.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td><strong>Readability: </strong>Notifications must be easily readable, with clear and appropriately sized text for all patients, with options available in multiple languages. 
<p>
<strong>Responsiveness: </strong>Notifications must be sent within 10 minutes of completing the virtual triage and it being reviewed.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>How can it be verified that a patient has received and acknowledged the notification sent to them? How often should the ER wait times/load status be updated?
   </td>
  </tr>
</table>

  
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Go to GP <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to visit a GP; therefore, the patient must be notified of this decision.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the best course of action for the patient has been decided to go to a GP, <strong>then</strong> a notification will be sent to the patient with other provided information like possible GPs in their area.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Should the system provide the patient with a list of possible General Practitioners to visit? Will it only provide clinics? What criteria should be used for choosing which GP the patient should visit? Should the triage application be deleted or saved for use by the GP?
   </td>
  </tr>
</table>


   
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Contact Hotline <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to call a hotline; therefore, the patient must be notified of this decision.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the best course of action for the patient has been decided to call a hotline, <strong>then</strong> a notification will be sent to the patient with other provided information like possible hotline phone numbers.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Should the system provide the patient with a list of possible hotlines to call? What criteria should be used for choosing which hotlines are provided to the patient? Should the triage application be available to send to the hotline operator?
   </td>
  </tr>
</table>

  
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Over the Counter <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to get over-the-counter medication; therefore, the patient must be notified of this decision.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the best course of action for the patient has been decided to get over-the-counter medication, <strong>then</strong> a notification will be sent to the patient with the types of medication recommended and possible pharmacies to visit.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Should the system provide the patient with a list of possible pharmacies in their area? What would the maximum distance or number of pharmacies recommended be? Should the nurse or doctor providing the drug/medication recommendations be able to recommend certain brands? How many options should be provided to the patient?
   </td>
  </tr>
</table>


<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Visit ER <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to visit the ER immediately.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the best course of action for the patient has been decided to visit the ER immediately, <strong>then</strong> a notification will be sent to the patient stating they should visit the ER immediately.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Should the notification offer a route to get to the ER? If the issue is severe enough, should an ambulance be called?
   </td>
  </tr>
</table>

   
<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Wait for ER <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to wait at home while being triaged in the ER.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<strong>#1.</strong> If the best course of action for the patient has been decided to wait for the ER, <strong>then</strong> a notification will be sent to the patient stating how long they should wait until coming into the ER.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Should the notification offer a route to get to the ER? How in advance should the patient come to the ER before they are projected to be able to visit?
   </td>
  </tr>
</table>

 
<table>
  <tr>
   <td><strong>Use Case</strong>
   </td>
   <td>4. User Login
<p>
<strong>History</strong>: Created 2024-09-17, Modified 2024-09-30
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>User inputs their <strong>PHN</strong> (personal health number) and a password to verify their identity.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>User has a PHN and knows their password.
<p>
User has registered an account.
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>Patient, Nurse, GP, Call Center Operator.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>

<li>User clicks login.

<li>User inputs PHN into the correct field.

<li>User inputs the correct password into the correct field.

<li>User submits info.

<li>IF password is correct 
<ol>
 
<li>Successful login.
    ELSE 
<ol>
 
<li>Display ‘incorrect password’.
</li> 
</ol>
</li> 
</ol>
</li> 
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#2.</strong> Non-Patient Login: Actors other than patients will log in with a designated “work email” instead of the <strong>PHN</strong>.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td><strong>Performance Mean:</strong> Time to authenticate user data is less than 1 second. 2FA adds up to 5 seconds for SMS verification. 
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Additional security measures to consider: 2FA, account lockout after consecutive failed logins.
   </td>
  </tr>
</table>


<table>
  <tr>
   <td><strong>Use Case</strong>
   </td>
   <td>5. View Clinic Capacity
<p>
<strong>Created:</strong> 2024-09-17, Modified 2024-09-30
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>Shows a map or list of nearby clinics and their estimated capacity.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>Capacity is updated by healthcare professionals.
<p>
Patient has logged in.
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>Patient
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>

<li>Patient clicks ‘view clinics near me’.

<li>System displays nearby clinics and capacity.
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#2.</strong> The list/map will vary based on the patient and their location.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td><strong>Performance Mean:</strong> Load time should be no longer than 10 seconds.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Requires location data.
   </td>
  </tr>
</table>


<table>
  <tr>
   <td><strong>Use Case</strong>
   </td>
   <td>6. View Triage Application
<p>
<strong>History:</strong> Created 2024-09-12
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The Nurse views a triage application and can determine the risk, update the patient's position in the triage, or delete the application.
   </td>
  </tr>
  <tr>
   <td><strong>Assumptions</strong>
   </td>
   <td>
   Nurse is logged in.<br>
   Patient's triage application is correct.
   </td>
  </tr>
  <tr>
   <td><strong>Actors</strong>
   </td>
   <td>Nurse
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>
<li>Nurse views a triage application.</li>

<li>If the Nurse determines the correct course of action to treat the patient, THEN:
<ol type="a">
<li>If the Nurse decides to send a Patient Notification, THEN the notification is sent.</li>
<li>If the Nurse decides to delete the triage application, THEN the application is deleted and the database is alerted.</li>
<li>If the Nurse decides to change the Triage order, THEN the order is updated.</li>
</ol>
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Variations</strong>
   </td>
   <td><strong>#2.</strong> If the Nurse views the triage application and does nothing, THEN no action is taken.
   </td>
  </tr>
  <tr>
   <td><strong>Non-functional</strong>
   </td>
   <td>Patient information is kept secure and confidential via encryption while sent over the network.
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling? What if a triage application is removed mistakenly?
   </td>
  </tr>
</table>



<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Delete Triage Application <strong>extends</strong> 2. View Triage Application
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The Nurse determines that the correct course of action to treat the patient is to delete the patient's triage application.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>
<li>If the Nurse determines the correct course of action to treat the patient is to delete the triage application, THEN:</li>
<li>The Nurse selects the delete application option.</li>
<li>System deletes the triage application.</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>Triage patient is mistakenly deleted.
   </td>
  </tr>
</table>


<table>
  <tr>
   <td><strong>Use Case Extension</strong>
   </td>
   <td>Update Triage Order <strong>extends</strong> 2. View Triage Application
   </td>
  </tr>
  <tr>
   <td><strong>Description</strong>
   </td>
   <td>The Nurse determines that the correct course of action to treat the patient is to move their triage application in the triage order.
   </td>
  </tr>
  <tr>
   <td><strong>Steps</strong>
   </td>
   <td>
<ol>
<li>If the Nurse determines the correct course of action to treat the patient is to change the triage order, THEN:</li>
<li>The Nurse selects the update triage application option.</li>
<li>The Nurse moves the patient in the order.</li>
<li>The triage order is updated.</li>
</ol>
   </td>
  </tr>
  <tr>
   <td><strong>Issues</strong>
   </td>
   <td>The Nurse may not know other patients' details before updating the order and may indirectly affect other patients.
   </td>
  </tr>
</table>
