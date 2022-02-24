# Chapter 10

Know the relationship between events, triggers, and functions.
Events are actions that happen, such as when a file is uploaded to Cloud Storage or a message is written to a Cloud Pub/Sub topic. Triggers are declarations that an action should be taken when an event occurs. Functions associated with triggers define what actions are taken when an event occurs.

Know when to use Cloud Functions versus App Engine applications.
Cloud Functions is a service that supports single-purpose functions that respond to events in the cloud. App Engine is also a serverless computing option, but it is used to deploy multifunction applications, including those that users interact with directly.

Know the runtimes supported in Cloud Functions.
Cloud Functions supports the follow- ing runtimes: Node.js 6, Node.js 8, and Python 3.

Know the parameters for defining a cloud function on a Cloud Storage event.
Parameters for Cloud Storage include the following: Cloud function name Memory allocated for the function Trigger
Event type Source of the function code Runtime Source code Name of the Python or Node.js function to execute

Know the parameters for defining a Cloud Function on a Cloud Pub/Sub event.
Parameters for Pub/Sub include the following:

- Cloud function name
- Memory allocated for the function
- Trigger
- Topic
- Parameters
- Source of the function code
- Runtime
- Source code
- Name of the Python or Node.js function to execute

Know the gcloud commands for working with Cloud Functions.
These include the following:

- gcloud functions deploy
- gcloud functions delete
