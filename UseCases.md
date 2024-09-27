
<table>
  <tr>
   <td>Use Case
   </td>
   <td>1. Register_Account 
<strong>history: </strong>created  2024-09-10, modified 2024-09-11
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>user creates their account, where personal information is needed such as their PHN, name, birthdate, contact information, emergency contact information and possibly their place of residence, and a password 
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>user accepts the terms of registration, has all the required information and does not already have an account
   </td>
  </tr>
  <tr>
   <td>Actors
   </td>
   <td>new account user, database, government health database 
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td>
<ol>

<li>User selects register account

<li>User inputs their information and submits photo of themselves holding their care card to confirm identity

<li>Government health database gets checked to confirm PHN is correct and associated properly with name and DOB

<li>Database for user information saves inputted username and password for future login attempts 

<li>User is redirected to home page
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td> <strong>#3.</strong> User already has account made under the PHN and are therefore notified that there is a persisting account and can go to forgot password instead 
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td>Time to authenticate user data is less than 2 seconds. Missing data inputs are clearly shown to users Required information is easily found. Photo/identity verification takes less than 10 seconds. Missing data inputs are clearly shown to users. Required information is easily found 
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>user inputs incorrect data, I.e wrong PHN or wrong DOB or name associated with PHN
   </td>
  </tr>
</table>
                 
<table>
  <tr>
   <td>Use Case
   </td>
   <td>2. Create_Triage_Application <strong>history: </strong>created<strong> </strong>2024-09-12
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Patients inputs their relevant health information such as their symptoms, pain scales and medical history 
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>Patients are able to properly describe their symptoms
<p>
Patient don’t lie about their symptoms and pain 
   </td>
  </tr>
  <tr>
   <td>Actors
   </td>
   <td>patient, triage algorithm, Nurse 
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td>
<ol>

<li>Patient inputs their symptoms

<li>Patient gives pain scales for each symptom from 1-10

<li>Patient inputs time line for symptoms 

<li>Patient inputs any relevant medical history like previous surgeries, medication they take or previous Injuries and sicknesses

<li>Patient inputs if pain is from an injury or is a sickness or unknown 

<li>Patient signs form saying everything they wrote is true 

<li>Patient submits this information 
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td><strong>#7.</strong> There is a network error in submitting the data. Required boxes are unfilled so patient is asked to fill out those required boxes
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td>patient information is kept secure and confidential via encryption while sent over the network
<p>
Users are given approximate timeline for how long it will take to be triaged
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling?  
   </td>
  </tr>
</table>
  
<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Edit_Application  <strong>extends</strong> 2. Create_Triage_Application
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The Patient may wish to update their triage application if their symptoms or pain
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#1. If </strong>the user's symptoms change <strong>then </strong>they can change them
<p>
<strong>#2. If </strong>the user's pain changes <strong>then </strong>they edit the pain scale
<p>
<strong>#3. If</strong> a better timeline for symptoms is remembered <strong>then</strong> the the timeline is updated
<p>
<strong>#6. If </strong>any information was updated <strong>then</strong> the user must resubmit their triage application and the database plus nurse will be alerted of this change
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>How should a changed triage application affect a patient's already given triage? Do newly updated triages need to be reviewed again? 
   </td>
  </tr>
</table>

   
<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Delete_Application  <strong>extends</strong> 2. Create_Triage_Application
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The Patient may wish to delete their triage application if they no longer want to be triaged
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#6. If</strong> the user wishes to delete their application <strong>then</strong> the application can be deleted and the database will be alerted of this deletion
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>What kind of alerts should be given to a user when they wish to delete their triage? Should there be a comment box for users to input their reasons for deleting their application?
   </td>
  </tr>
</table>


<table>
  <tr>
   <td><strong>Use Case</strong>
   <td>3. Patient_Notification    <br />
<strong>history </strong>created 2024-09-17, modified 2024-09-24
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
   <td>Use Case Extension
   </td>
   <td>Go to GP  <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to visit a GP and therefore the patient must be notified of this decision
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#3.3.1 If</strong> the best course of action for the patient has been decided to go to a GP <strong>then</strong> a notification will be sent to the patient with other provided information like possible GPs in their area.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Should the system give the patient a list of possible General Practitioners to visit? Will it just provide Clinics? What criteria should be used for choosing which GP the patient should visit? Should the triage application be deleted or saved for use by the GP?
   </td>
  </tr>
</table>

   
<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Contact Hotline  <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to call a hotline and therefore the patient must be notified of this decision
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#3.3.2 If</strong> the best course of action for the patient has been decided to call a hotline <strong>then</strong> a notification will be sent to the patient with other provided information like possible hotline phone numbers.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Should the system give the patient a list of possible hotlines to call? What criteria should be used for choosing which hotlines are provided to the patient? Should the triage application be available to send to the hotline operator?
   </td>
  </tr>
</table>
  
<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Over the Counter <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to get over the counter medication and therefore the patient must be notified of this decision
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#3.3.3 If</strong> the best course of action for the patient has been decided to get over the counter medication <strong>then</strong> a notification will be sent to the patient with the types of medication reccomended and possible pharmacies to visit.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Should the system give the patient a list of possible pharmacies in their area? What would the maximum distance or number of pharmacies recommended be? Should the nurse or doctor providing the drug/medication reccomendedations be able to recommend certain brands? How many options should be provided to the patient?
   </td>
  </tr>
</table>

<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Visit ER <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to visit the ER immediatly
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#3.1. If</strong> the best course of action for the patient has been decided to visit the ER immediatly <strong>then</strong> a notification will be sent to the patient stating they should visit the ER immediately.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Should the notification offer a route to get to the ER? If the issue is sever enough should an ambulance be called?
   </td>
  </tr>
</table>

   
<table>
  <tr>
   <td>Use Case Extension
   </td>
   <td>Wait for ER <strong>extends</strong> 6. Patient_Notification
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>The virtual triage program and nurse have decided the best course of action for the patient is to wait at home while being triaged in the ER
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td><strong>#3.2. If</strong> the best course of action for the patient has been decided to wait for the ER <strong>then</strong> a notification will be sent to the patient stating how long they should wait until coming into the ER.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Should the notification offer a route to get to the ER? How in advance should the patient come to the ER before they are projected to be able to visit.
   </td>
  </tr>
</table>
 
<table>
  <tr>
   <td>Use Case
   </td>
   <td>4. User Login
<p>
<strong>History</strong>: Created 2024-09-17 Mod 2024-09-24
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>User input their <strong>PHN</strong> (personal health number) and a password to verify their identity.
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>User has a PHN and knows their password.
<p>
User has registered an account.
   </td>
  </tr>
  <tr>
   <td>Actors
   </td>
   <td>Patient, Nurse, GP, Call Center Op.
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td>
<ol>

<li>User clicks login

<li>User inputs PHN into correct field

<li>User inputs correct password into correct field

<li>User submits info

<li>IF password is correct 
<ol>
 
<li>Successful login
    ELSE 
<ol>
 
<li>Display ‘incorrect password’
</li> 
</ol>
</li> 
</ol>
</li> 
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td><strong>#2. </strong>Non-Patient Login: Actors other than patients will login with a designated “work email” instead of the <strong>PHN</strong>.
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td><strong>Performance Mean:</strong> Time to authenticate user data is less than 1 second. 2FA adds up to 5 seconds for SMS verification. 
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Additional security measures to consider: 2FA, account lockout after consecutive failed logins.
   </td>
  </tr>
</table>


<table>
  <tr>
   <td>Use Case
   </td>
   <td>5. View Clinic Capacity
<p>
<strong>Created: </strong>2024-09-17 Mod 2024-09-24
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Shows a map or list of nearby clinics and their estimated capacity.
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>Capacity updated by healthcare prof
<p>
Patient has logged in
   </td>
  </tr>
  <tr>
   <td>Actors
   </td>
   <td>Patient
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td>
<ol>

<li>Patient clicks ‘view clinics near me’

<li>System displays nearby clinics and capacity
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td><strong>#2. </strong>The list/map will vary based on the patient and their location
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td><strong>Performance Mean:</strong> load time should be no longer than 10 seconds
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Requires location data
   </td>
  </tr>
</table>

| Use Case       | 6. View_Triage_Application  history: created 2024-09-12                                                                                                                                                 |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description    | The Nurse views a triage application and can determine the risk and update their position in the triage or delete their application.                                                                             |
| Assumptions    | Nurse is logged in. Patient's triage application is correct                                                                                                                                                      |
| Actors         | Nurse                                                                                                                                                                                                            |
| Steps          | <ol><li> Nurse views a triage application </li><li> Nurse determines the correct course of action to treat the patient </li><ol type="a"><li> Nurse decides to send Patient Notification    </li><li> Nurse deletes triage application    </li><li> Nurse changes Triage order </li></ol></ol> |
| Variations     | Nurse views the triage application and does nothing.                                                                                                                                                             |
| Non-functional | patient information is kept secure and confidential via encryption while sent over the network                                                                                                                   |
| Issues         | How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling? What if a triage application is removed mistakenly                         |

| Use Case Extension | Delete Triage Application  extends 2. View_Triage_Application                                                                                                        |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Nurse determines the correct course of action to treat the patient is delete the patients triage application                                                         |
| Steps              | <ol><li> If the Nurse determines the correct course of action to treat the patient is to delete the triage application<li> The Nurse selects the delete application option<li>  System deletes the triage application </li></ol> |
| Issues             | Triage patient is mistakenly deleted                                                                                                                                 |

| Use Case Extension | Update Triage Order  extends 2. View_Triage_Application                                                                                                                                                           |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description        | Nurse determines the correct course of action to treat the patient is move their triage application in the triage order                                                                                           |
| Steps              | <ol><li> If the Nurse determines the correct course of action to treat the patient is to change the triage order</li><li>  Nurse selects the update triage application option</li><li>   Nurse moves the patient in the order</li><li>  The triage order is updated </li></ul>|
| Issues             | Nurse may not know other patients details before updating order and indirectly moving other patients                                                                                                              |
