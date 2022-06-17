# Diagnostic questions

Q: Stella is a new member of a team in your company who has been put in charge of monitoring VM instances in the organization. Stella will need the required permissions to perform this role. How should you grant her those permissions?
A: Add Stella to a Google Group in your organization. Bind that group to roles/compute.viewer.

Q: How are resource hierarchies organized in Google Cloud?
A: Organization, Folder, Project, Resource

Q: What Google Cloud project attributes can be changed?
A: The Project Name.

Q: Jane will manage objects in Cloud Storage for the Cymbal Superstore. She needs to have access to the proper permissions for every project across the organization. What should you do? 
A: Add Jane to a group that has the roles/storage.objectAdmin role assigned at the organizational level.

Q: You need to add new groups of employees in Cymbal Superstore’s production environment. You need to consider Google’s recommendation of using least privilege. What should you do? 
A: Grant predefined and custom roles that provide necessary permissions and grant basic roles only where needed.

Q: The Operations Department at Cymbal Superstore wants to provide managers access to information about VM usage without allowing them to make changes that would affect the state. You assign them the Compute Engine Viewer role. Which two permissions will they receive?
A: compute.images.list, compute.images.get

Q: How are billing accounts applied to projects in Google Cloud? (Pick two)
A: A project and its resources can only be tied to one billing account. A billing account can be linked to one or more projects.

Q: Fiona is the billing administrator for the project associated with Cymbal Superstore’s eCommerce application. Jeffrey, the marketing department lead, wants to receive emails related to budget alerts. Jeffrey should have access to no additional billing information. What should you do?
A: Use Cloud Monitoring notification channels to send Jeffrey an email alert. 

Q: Pick two choices, from the options below, that provide a command line interface to Google Cloud.
A: Cloud Shell, Cloud SDK

Q: You want to use the Cloud Shell to copy files to your Cloud Storage bucket. Which Cloud SDK command should you use?
A: gsutil
