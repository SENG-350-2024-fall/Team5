-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Symptom" (
    "sid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "triage_application_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "pain_scale" INTEGER NOT NULL,
    "body_location" TEXT NOT NULL,
    "time_started" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "other_info" TEXT,
    CONSTRAINT "Symptom_triage_application_id_fkey" FOREIGN KEY ("triage_application_id") REFERENCES "TriageApplication" ("tid") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Symptom" ("body_location", "name", "other_info", "pain_scale", "sid", "time_started", "triage_application_id") SELECT "body_location", "name", "other_info", "pain_scale", "sid", "time_started", "triage_application_id" FROM "Symptom";
DROP TABLE "Symptom";
ALTER TABLE "new_Symptom" RENAME TO "Symptom";
CREATE TABLE "new_TriageApplication" (
    "tid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientID" INTEGER NOT NULL,
    "time_created" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "patient_history" TEXT,
    "patient_medication" TEXT,
    CONSTRAINT "TriageApplication_patientID_fkey" FOREIGN KEY ("patientID") REFERENCES "Patient" ("pid") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TriageApplication" ("patientID", "patient_history", "patient_medication", "status", "tid", "time_created") SELECT "patientID", "patient_history", "patient_medication", "status", "tid", "time_created" FROM "TriageApplication";
DROP TABLE "TriageApplication";
ALTER TABLE "new_TriageApplication" RENAME TO "TriageApplication";
CREATE UNIQUE INDEX "TriageApplication_patientID_key" ON "TriageApplication"("patientID");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
