# Chapter 3: Projects, Service Accounts, Billing


1. You are designing cloud applications for a healthcare provider. The records management application will manage medical information for patients. Access to this data is limited to a small number of employees. The billing department application will have insurance and payment information. Another group of employees will have access billing information. In addition, the billing system will have two components: a private insurance billing system and a government payer billing system. Government regulations require that software used to bill the government must be isolated from other software systems. Which of the follow- ing resource hierarchies would meet these requirements and provide the most flexibility to adapt to changing requirements? 
	1. One organization, with folders for records management and billing. The billing folder would have private insurer and government payer folders within it. Common constraints would be specified in organization-level policies. Other policies would be defined at the appropriate folder. 
	2. One folder for records management, one for billing, and no organization. Policies defined at the folder level. 
	3. One organization, with folders for records management, private insurer, and government payer below the organization. All constraints would be specified in organization- level policies. All folders would have the same policy constraints. 
	4. None of the above. 
2. When you create a hierarchy, you can have more than one of which structure? 
	1. Organization only 
	2. Folder only 
	3. Folder and project 
	4. Project only 
3. You are designing an application that uses a series of services to transform data from its original form into a format suitable for use in a data warehouse. Your transformation appli- cation will write to the message queue as it processes each input file. You don’t want to give users permission to write to the message queue. You could allow the application to write to the message queue by using which of the following? 
	1. Billing account 
	2. Service account 
	3. Messaging account 
	4. Folder 
4. Your company has a number of policies that need to be enforced for all projects. You decide to apply policies to the resource hierarchy. Not long after you apply the policies, an engineer finds that an application that had worked prior to implementing policies is no longer working. The engineer would like you to create an exception for the application. How can you override a policy inherited from another entity in the resource hierarchy? 
	1. Inherited policies can be overridden by defining a policy at a folder or project level. 
	2. Inherited policies cannot be overridden.
	3. Policies can be overridden by linking them to service accounts. 
	4. Policies can be overridden by linking them to billing accounts. 
5. Constraints are used in resource hierarchy policies. Which of the following are types of constraints allowed? 
	1. Allow a specific set of values 
	2. Deny a specific set of values 
	3. Deny a value and all its child values 
	4. Allow all allowed values 
	5. All of the above 
6. A team with four members needs you to set up a project that needs only general permissions for all resources. You are granting each person a primitive role for different levels of access, depending on their responsibilities in the project. Which of the following are not included as primitive roles in Google Cloud Platform? 
	1. Owner 
	2. Publisher
	3. Editor 
	4. Viewer 
7. You are deploying a new custom application and want to delegate some administration tasks to DevOps engineers. They do not need all the privileges of a full application administrator, but they do need a subset of those privileges. What kind of role should you use to grant those privileges? 
	1. Primitive 
	2. Predefined 
	3. Advanced 
	4. Custom
8. An app for a finance company needs access to a database and a Cloud Storage bucket. There is no predefined role that grants all the needed permissions without granting some permissions that are not needed. You decide to create a custom role. When defining custom roles, you should follow which of the following principles? 
	1. Rotation of duties 
	2. Least principle 
	3. Defense in depth 
	4. Least privilege 
9. How many organizations can you create in a resource hierarchy? 
	1. 1 
	2. 2 
	3. 3 
	4. Unlimited 
10. You are contacted by the finance department of your company for advice on how to automate payments for GCP services. What kind of account would you recommend setting up? 
	1. Service account 
	2. Billing account 
	3. Resource account 
	4. Credit account 
11. You are experimenting with GCP for your company. You do not have permission to incur costs. How can you experiment with GCP without incurring charges? 
	1. You can’t; all services incur charges. 
	2. You can use a personal credit card to pay for charges. 
	3. You can use only free services in GCP. 
	4. You can use only serverless products, which are free to use. 
12. Your DevOps team has decided to use Stackdriver monitoring and logging. You have been asked to set up Stackdriver workspaces. When you set up a Stackdriver workspace, what kind of resource is it associated with? 
	1. A Compute Engine instance only 
	2. A Compute Engine instance or Kubernetes Engine cluster only 
	3. A Compute Engine instance, Kubernetes Engine cluster, or App Engine app 
	4. A project
13. A large enterprise is planning to use GCP across a number of subdivisions. Each subdivision is managed independently and has its own budget. Most subdivisions plan to spend tens of thousands of dollars per month. How would you recommend they set up their billing account(s)? 
	1. Use a single self-service billing account. 
	2. Use multiple self-service billing accounts. 
	3. Use a single invoiced billing account. 
	4. Use multiple invoiced billing accounts. 
14. An application administrator is responsible for managing all resources in a project. She wants to delegate responsibility for several service accounts to another administrator. If additional service accounts are created, the other administrator should manage those as well. What is the best way to delegate privileges needed to manage the service accounts? 
	1. A. Grant iam.serviceAccountUser to the administrator at the project level. 
	2. B. Grant iam.serviceAccountUser to the administrator at the service account level.
	3. C. Grant iam.serviceProjectAccountUser to the administrator at the project level. 
	4. D. Grant iam.serviceProjectAccountUser to the administrator at the service account level. 
15. You work for a retailer with a large number of brick and mortar stores. Every night the stores upload daily sales data. You have been tasked with creating a service that verifies the uploads every night. You decide to use a service account. Your manager questions the security of your proposed solution, particularly about authenticating the service account. You explain the authentication mechanism used by service accounts. What authentication mechanism is used? 
	1. Username and password 
	2. Two-factor authentication 
	3. Encrypted keys 
	4. Biometrics 
16. 16. What objects in GCP are sometimes treated as resources and sometimes as identities? 
	1. Billing accounts 
	2. Service accounts 
	3. Projects 
	4. Roles 
17. You plan to develop a web application using products from the GCP that already include established roles for managing permissions such as read-only access or the ability to delete old versions. Which of the following roles offers these capabilities? 
	1. Primitive roles 
	2. Predefined roles
	3. Custom roles 
	4. Application roles 
18. You are reviewing a new GCP account created for use by the finance department. An auditor has questions about who can create projects by default. You explain who has privileges to create projects by default. Who is included? 
	1. Only project administrators 
	2. All users
	3. Only users without the role resourcemanager.projects.create 
	4. Only billing account users 
19. How many projects can be created in an account? 
	1. 10 
	2. 25 
	3. There is no limit. 
	4. Each account has a limit determined by Google. 
20. You are planning how to grant privileges to users of your company’s GCP account. You need to document what each user will be able to do. Auditors are most concerned about a role called Organization IAM roles. You explain that users with that role can perform a number of tasks, which include all of the following except which one? 
	1. Defining the structure of the resource hierarchy 
	2. Determining what privileges a user should be assigned
	3. Defining IAM policies over the resource hierarchy 
	4. Delegating other management roles to other users 