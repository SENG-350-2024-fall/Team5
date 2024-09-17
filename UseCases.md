
## Use Case #: Aidan
| **Use Case**    | Account_Registration **history**: created  2024-09-10, modified 2024-09-11   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | user creates their account, where personal information is needed such as their PHN, name, birthdate, contact information, emergency contact information and possibly their place of residence, and a password  |
| **Assumptions** | user accepts the terms of registration, has all the required information and does not already have an account   |
| **Actors**      | User (primary) |
| **Steps**       | 1. Patient selects register account 2. Patient inputs their information and submits photo of themselves holding their care card to confirm identity 3. Government health database gets checked to confirm PHN is correct and associated properly with name and DOB 4. Database for user information saves inputted username and password for future login attempts 5. Patient is redirected to home page |
| **Variations**  | **#3.** Patient already has account made under the PHN and are therefore notified that there is a persisting account and can go to forgot password instead  |
| **Non-functional** | Time to authenticate user data is less than 2 seconds. Missing data inputs are clearly shown to users Required information is easily found. Photo/identity verification takes less than 10 seconds. |
| **Issues**      | user inputs incorrect data, I.e wrong PHN or wrong DOB or name associated with PHN                        |

## Use Case #: Aidan
| **Use Case**    | triage application **history**: created 2024-09-12                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | Patients inputs their relevant health information such as their symptoms, pain scales and medical history             |
| **Assumptions** | Is logged in   Patients are able to properly describe their symptoms. Patient don’t lie about their symptoms and pain |
| **Actors**      | User (primary),  Nurse                                                                                     |
| **Steps**       | 1. Patient inputs their symptoms 2. Patient gives pain scales for each symptom from 1-10 3. Patient inputs time line for symptoms  4. Patient inputs any relevant medical history like previous surgeries, medication they take or previous Injuries and sicknesses 5. Patient inputs if pain is from an injury or is a sickness or unknown  6. Patient signs form saying everything they wrote is true  7. Patient submits this information  |
| **Variations**  | **#7.** there is a network error in submitting the data. Required boxes are unfilled so patient is asked to fill out those required boxes  |
| **Non-functional** | patient information is kept secure and confidential via encryption while sent over the network. Users are given an approximate timeline for how long it will take to be triaged |
| **Issues**      | How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling?                                 |

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
   <td>Load Status
<p>
<strong>Created</strong>: 2024-09-17
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Shows the patient’s appointment status.
   </td>
  </tr>
  <tr>
   <td>Assumptions
   </td>
   <td>The patient has submitted a triage application form and the system recommends seeing a professional.
   </td>
  </tr>
  <tr>
   <td>Actors
   </td>
   <td>Patient, Nurse
   </td>
  </tr>
  <tr>
   <td>Steps
   </td>
   <td>
<ol>
<li>Click ‘view status’</li>
<li>Show appointment status</li>
</ol>
   </td>
  </tr>
  <tr>
   <td>Variations
   </td>
   <td>
There will be three possible outcomes:
<p>
<strong><span style="text-decoration:underline;">In Progress:</span></strong> an appointment is being created or scheduled.
<p>
<strong><span style="text-decoration:underline;">Found:</span></strong> an appointment has been made and the system will display the time and place of the appointment as well as the available doctor.
<p>
<strong><span style="text-decoration:underline;">Not Scheduled:</span></strong> no appointment is currently scheduled.
   </td>
  </tr>
  <tr>
   <td>Non-functional
   </td>
   <td>Appointment should be made within 10 minutes based on the triage application.
   </td>
  </tr>
  <tr>
   <td>Issues
   </td>
   <td>System delays or errors in retrieving appointment data. No clear timeline on how long appointment scheduling should take.
   </td>
  </tr>
</table>
