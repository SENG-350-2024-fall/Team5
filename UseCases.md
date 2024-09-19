
## Use Case #: Aidan
<table>
  <tr>
   <td>Use Case
   </td>
   <td>1. Account_Registration 
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

<li>Patient selects register account

<li>Patient inputs their information and submits photo of themselves holding their care card to confirm identity

<li>Government health database gets checked to confirm PHN is correct and associated properly with name and DOB

<li>Database for user information saves inputted username and password for future login attempts 

<li>Patient is redirected to home page
</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td> <strong>#3.</strong> Patient already has account made under the PHN and are therefore notified that there is a persisting account and can go to forgot password instead 
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

## Use Case #: Aidan                    
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

## Use Case Extension #: Aidan    
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

## Use Case Extension #: Aidan   
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

## Use Case #: Julian
<table>
  <tr>
   <td>Use Case
   </td>
   <td>User Login
<p>
<strong>History</strong>: Created 2024-09-17
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Patients input their <strong>PHN</strong> (personal health number) and a password to verify their identity.
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>User has a PHN and knows their password.
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
<li>User clicks login</li>
<li>User inputs PHN into correct field</li>
<li>User inputs password into correct field</li>
<li>User submits info</li>
<li>System checks for matching PHN and password
<ol>
<li>Password does not match PHN
<ol>
<li>Display ‘incorrect password’</li>
</ol>
</li>
<li>Password matches PHN
<ol>
<li>Login successful</li>
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
   <td>
Administrator Login:
<p>
An admin will login with their work email address instead of their PHN.
<p>
Forgot Password:
<p>
Users can opt to recover their password via the "Forgot Password" flow.
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td>Time to authenticate user data is less than 1 second. 2FA adds up to 5 seconds for SMS verification.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Potential need for 2FA for added security. Account lockout after multiple failed login attempts.
   </td>
  </tr>
</table>

## Use Case #: Julian
<table>
  <tr>
   <td>Use Case
   </td>
   <td>View Clinic Capacity
<p>
<strong>Created: </strong>2024-09-17
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
   <td>The list/map will vary based on the patient and their location
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td>Load fast
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>Requires location data
   </td>
  </tr>
</table>
##need to finish##
## Use Case #: Nolan
| **Use Case**    | View_Triage_Application **history**: created  2024-09-17 **history**:: created  2024-09-17               |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | The Nurse views the current triage and can update the current triage or notify patients.             |
| **Assumptions** | Nurse is logged in, Patient's triage application is correct |
| **Actors**      | Nurse  |
| **Steps**       | 1. Nurse views a triage application 2. Patient gives pain scales for each symptom from 1-10 3. Patient inputs time line for symptoms  4. Patient inputs any relevant medical history like previous surgeries, medication they take or previous Injuries and sicknesses 5. Patient inputs if pain is from an injury or is a sickness or unknown  6. Patient signs form saying everything they wrote is true  7. Patient submits this information  |
| **Variations**  | **#7.** there is a network error in submitting the data. Required boxes are unfilled so patient is asked to fill out those required boxes  |
| **Non-functional** | patient information is kept secure and confidential via encryption while sent over the network. Users are given an approximate timeline for how long it will take to be triaged |
| **Issues**      | How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling? 
