# identity & access management

## CLI

```bash
# use private key for auth of service account
~ gcloud auth activate-service-account --key-file=KEY_FILE



```

questions:
- 190
- 186
- 170

---

(161) - You are performing a monthly security check of your Google Cloud environment and want to know who has access to view data stored in your Google Cloud Project. What should you do?

A. Enable Audit Logs for all APIs that are related to data storage.
**B. Review the IAM permissions for any role that allows for data access.**
C. Review the Identity-Aware Proxy settings for each resource.
D. Create a Data Loss Prevention job.

---

(158) - Your company uses a large number of Google Cloud services centralized in a single project. All teams have specific projects for testing and development. The
DevOps team needs access to all of the production services in order to perform their job. You want to prevent Google Cloud product changes from broadening their permissions in the future. You want to follow Google-recommended practices. What should you do?

A. Grant all members of the DevOps team the role of Project Editor on the organization level.
B. Grant all members of the DevOps team the role of Project Editor on the production project.
**C. Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the production project.** D. Create a custom role that combines the required permissions. Grant the DevOps team the custom role on the organization level.

---

(148) - A colleague handed over a Google Cloud Platform project for you to maintain. As part of a security checkup, you want to review who has been granted the Project Owner role. What should you do?

A. In the console, validate which SSH keys have been stored as project-wide keys.
B. Navigate to Identity-Aware Proxy and check the permissions for these resources.
C. Enable Audit Logs on the IAM & admin page for all resources, and validate the results.
**D. Use the command "gcloud projects get-iam-policy" to view the current role assignments.**

---

---

---

references:

- https://cloud.google.com/architecture/identity/assessing-existing-user-accounts
- https://cloud.google.com/sdk/docs/authorizing
- https://cloud.google.com/iam/docs/understanding-custom-roles#basic_concepts