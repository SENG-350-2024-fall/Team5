-- CreateTable
CREATE TABLE "Patient" (
    "pid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "address" TEXT,
    "DOB" DATETIME NOT NULL,
    "password" TEXT NOT NULL,
    "PHN" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HealthCareWorker" (
    "hid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "job_type" TEXT NOT NULL,
    "first_name" TEXT
);

-- CreateTable
CREATE TABLE "Office" (
    "oid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "days_open" TEXT,
    "hours_open" TEXT,
    "phone_number" TEXT,
    "ave_wait_time" DATETIME,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HealthCareWorkerWorksAtOffice" (
    "hid" INTEGER NOT NULL,
    "oid" INTEGER NOT NULL,
    "days_working" TEXT NOT NULL,

    PRIMARY KEY ("hid", "oid"),
    CONSTRAINT "HealthCareWorkerWorksAtOffice_hid_fkey" FOREIGN KEY ("hid") REFERENCES "HealthCareWorker" ("hid") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "HealthCareWorkerWorksAtOffice_oid_fkey" FOREIGN KEY ("oid") REFERENCES "Office" ("oid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TriageApplication" (
    "tid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "patientID" INTEGER NOT NULL,
    "time_created" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "patient_history" TEXT,
    "patient_medication" TEXT,
    CONSTRAINT "TriageApplication_patientID_fkey" FOREIGN KEY ("patientID") REFERENCES "Patient" ("pid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Symptom" (
    "sid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "triage_application_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "pain_scale" INTEGER NOT NULL,
    "body_location" TEXT NOT NULL,
    "time_started" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "other_info" TEXT,
    CONSTRAINT "Symptom_triage_application_id_fkey" FOREIGN KEY ("triage_application_id") REFERENCES "TriageApplication" ("tid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "TriageApplication_patientID_key" ON "TriageApplication"("patientID");
