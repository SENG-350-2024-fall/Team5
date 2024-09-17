
## Use Case #: Aidan
| **Use Case**    | Account_Registration **history**: created  2024-09-10, modified 2024-09-11   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | user creates their account, where personal information is needed such as their PHN, name, birthdate, contact information, emergency contact information and possibly their place of residence, and a password  |
| **Assumptions** | user accepts the terms of registration, has all the required information and does not already have an account   |
| **Actors**      | new account user, database, government health database  |
| **Steps**       | 1. Patient selects register account 2. Patient inputs their information 3. Government health database gets checked to confirm PHN is correct and associated properly with name and DOB 4. Database for user information saves inputted username and password for future login attempts 5. Patient is redirected to home page |
| **Variations**  | **#3.** Patient already has account made under the PHN and are therefore notified that there is a persisting account and can go to forgot password instead  |
| **Non-functional** | Time to authenticate user data is less then 1 second  Missing data inputs are clearly shown to users Required information is easily found |
| **Issues**      | user inputs incorrect data, I.e wrong PHN or wrong DOB or name associated with PHN                        |

## Use Case #: Aidan
| **Use Case**    | triage application **history**: created 2024-09-12                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------- |
| **Description** | Patients inputs their relevant health information such as their symptoms, pain scales and medical history             |
| **Assumptions** | Is logged in   Patients are able to properly describe their symptoms. Patient don’t lie about their symptoms and pain |
| **Actors**      | patient, triage algorithm, Nurse                                                                                     |
| **Steps**       | 1. Patient inputs their symptoms 2. Patient gives pain scales for each symptom from 1-10 3. Patient inputs time line for symptoms  4. Patient inputs any relevant medical history like previous surgeries, medication they take or previous Injuries and sicknesses 5. Patient inputs if pain is from an injury or is a sickness or unknown  6. Patient signs form saying everything they wrote is true  7. Patient submits this information  |
| **Variations**  | **#7.** there is a network error in submitting the data. Required boxes are unfilled so patient is asked to fill out those required boxes  |
| **Non-functional** | patient information is kept secure and confidential via encryption while sent over the network. Users are given an approximate timeline for how long it will take to be triaged |
| **Issues**      | How are nurses properly alerted of triage information being sent in? What if the patient is unable to describe what they are feeling?                                 |
                                                                                                 |
