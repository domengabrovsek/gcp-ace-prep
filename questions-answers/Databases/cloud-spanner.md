# cloud spanner

## questions

---

(124) - You have an application that uses Cloud Spanner as a backend database. The application has a very predictable traffic pattern. You want to automatically scale up or down the number of Spanner nodes depending on traffic. What should you do?

A. Create a cron job that runs on a scheduled basis to review Cloud Monitoring metrics, and then resize the Spanner instance accordingly.
B. Create a Cloud Monitoring alerting policy to send an alert to oncall SRE emails when Cloud Spanner CPU exceeds the threshold. SREs would scale resources up or down accordingly.
C. Create a Cloud Monitoring alerting policy to send an alert to Google Cloud Support email when Cloud Spanner CPU exceeds your threshold. Google support would scale resources up or down accordingly.
**D. Create a Cloud Monitoring alerting policy to send an alert to webhook when Cloud Spanner CPU is over or under your threshold. Create a Cloud Function that listens to HTTP and resizes Spanner resources accordingly.**

---

(98) - Your customer has implemented a solution that uses Cloud Spanner and notices some read latency-related performance issues on one table. This table is accessed only by their users using a primary key. The table schema is shown below.

CREATE TABLE Persons(
  person_id
  account_creation_date,
  birthdate,
  firstname,
  lastname,
  profile_picture
) PRIMARY_KEY(person_id)

A. Remove the profile_picture field from the table.
B. Add a secondary index on the person_id column.
**C. Change the primary key to not have monotonically increasing values.**
D. Create a secondary index using the following Data Definition Language (DDL)

---

---

## references

-- https://cloud.google.com/spanner/docs/whitepapers/optimizing-schema-design#anti-pattern_sequences