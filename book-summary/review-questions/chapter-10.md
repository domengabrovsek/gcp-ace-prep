# chapter 10 review questions

1. A product manager is proposing a new application that will require several backend services, three business logic services, and access to relational databases. Each service will provide a single function, and it will require several of these services to complete a business task. Service execution time is dependent on the size of input and is expected to take up to 30 minutes in some cases. Which GCP product is a good serverless option for running this related service?
   1. Cloud Functions
   2. Compute Engine
   3. App Engine
   4. Cloud Storage

2. You have been asked to deploy a cloud function to reformat image files as soon as they are uploaded to Cloud Storage. You notice after a few hours that about 10 percent of the files are not processed correctly. After reviewing the files that failed, you realize they are all substantially larger than average. What could be the cause of the failures?
   1. There is a syntax error in the function code.
   2. The wrong runtime was selected.
   3. The timeout is too low to allow enough time to process large files.
   4. There is a permissions error on the Cloud Storage bucket containing the files.
3. When an action occurs in GCP, such as a file being written to Cloud Storage or a message being added to a Cloud Pub/Sub topic, that action is called what?
   1. An incident
   2. An event
   3. A trigger
   4. A log entry
4. All of the following generate events that can be triggered using Cloud Functions, except which one?
   1. Cloud Storage
   2. Cloud Pub/Sub
   3. SSL
   4. Firebase
5. Which runtimes are supported in Cloud Functions?
   1. Node.js 5, Node.js 6, and Node.js 8
   2. Node.js 8, Python, and Go
   3. Node.js 6, Node.js 8, and Python
   4. Node.js 8, Python, and Go
6. An HTTP trigger can be invoked by making a request using which of the following?
   1. GET only
   2. POST and GET only
   3. DELETE, POST, and GET
   4. DELETE, POST, REVISE, and GET
7. What types of events are available to Cloud Functions working with Cloud Storage?
   1. Upload or finalize and delete only
   2. Upload or finalize, delete, and list only
   3. Upload or finalize, delete, and metadata update only
   4. Upload or finalize, delete, metadata update, and archive
8. You are tasked with designing a function to execute in Cloud Functions. The function will need more than the default amount of memory and should be applied only when a finalize event occurs after a file is uploaded to Cloud Storage. The function should only apply its logic to files with a standard image file type. Which of the following required features cannot be specified in a parameter and must be implemented in the function code?
   1. Cloud function name
   2. Memory allocated for the function
   3. File type to apply the function to
   4. Event type
9. How much memory can be allocated to a Cloud Function?
    1. 128MB to 256MB
    2. 128MB to 512MB
    3. 128MB to 1GB
    4. 128MB to 2GB
10. How long can a cloud function run by default before timing out?
    1. 30 seconds
    2. 1 minute
    3. 9 minutes
    4. 20 minutes
11. You want to use the command line to manage Cloud Functions that will be written in Python. In addition to running the gcloud components update command, what command should you run to ensure you can work with Python functions?
    1. gcloud component install
    2. gcloud components install beta
    3. gcloud components install python
    4. gcloud functions install beta
12. You want to create a cloud function to transform audio files into different formats. The audio files will be uploaded into Cloud Storage. You want to start transformations as soon as the files finish uploading. Which trigger would you specify in the cloud function to cause it to execute after the file is uploaded?
    1. google.storage.object.finalize
    2. google.storage.object.upload
    3. google.storage.object.archive
    4. google.storage.object.metadataUpdate
13. You are defining a cloud function to write a record to a database when a file in Cloud Storage is archived. What parameters will you have to set when creating that function?
    1. runtime only
    2. trigger-resource only
    3. runtime, trigger-resource, trigger-event only
    4. runtime, trigger-resource, trigger-event, file-type
14. You’d like to stop using a cloud function and delete it from your project. Which command would you use from the command line to delete a cloud function?
    1. gcloud functions delete
    2. gcloud components function delete
    3. gcloud components delete
    4. gcloud delete functions
15. You have been asked to deploy a cloud function to work with Cloud Pub/Sub. As you review the Python code, you notice a reference to a Python function called base64.b64decode. Why would a decode function be required in a Pub/Sub cloud function?
    1. It’s not required and should not be there.
    2. Messages in Pub/Sub topics are encoded to allow binary data to be used in places where text data is expected. Messages need to be decoded to access the data in the message.
    3. It is required to add padding characters to the end of the message to make all messages the same length.
    4. The decode function maps data from a dictionary data structure to a list data structure.
16. Which of these commands will deploy a Python cloud function called pub_sub_function_test?
    1. gcloud functions deploy pub_sub_function_test
    2. gcloud functions deploy pub_sub_function_test --runtime python37
    3. gcloud functions deploy pub_sub_function_test --runtime python37 --trigger-topic gcp-ace-exam-test-topic
    4. gcloud functions deploy pub_sub_function_test --runtime python --trigger-topic gcp-ace-exam-test-topic
17. When specifying a Cloud Storage cloud function, you have to specify an event type, such as finalize, delete, or archive. When specifying a Cloud Pub/Sub cloud function, you do not have to specify an event type. Why is this the case?
    1. Cloud Pub/Sub does not have triggers for event types.
    2. Cloud Pub/Sub has triggers on only one event type, when a message is published.
    3. Cloud Pub/Sub determines the correct event type by analyzing the function code.
    4. The statement in the question is incorrect; you do have to specify an event type with Cloud Pub/Sub functions.
18. Your company has a web application that allows job seekers to upload résumé files. Some files are in Microsoft Word, some are PDFs, and others are text files. You would like to store all résumés as PDFs. How could you do this in a way that minimizes the time between upload and conversion and with minimal amounts of coding?
    1. Write an App Engine application with multiple services to convert all documents to PDF.
    2. Implement a Cloud Function on Cloud Storage to execute on a finalize event. The function checks the file type, and if it is not PDF, the function calls a PDF converter function and writes the PDF version to the bucket that has the original.
    3. Add the names of all files to a Cloud Pub/Sub topic and have a batch job run at regular intervals to convert the original files to PDF.
    4. Implement a Cloud Function on Cloud Pub/Sub to execute on a finalize event. The function checks the file type, and if it is not PDF, the function calls a PDF converter function and writes the PDF version to the bucket that has the original.
19. What are options for uploading code to a cloud function?
    1. Inline editor
    2. Zip upload
    3. Cloud source repository
    4. All of the above
20. What type of trigger allows developers to use HTTP POST, GET, and PUT calls to invoke a cloud function?
     1. HTTP
     2. Webhook
     3. Cloud HTTP
     4. None of the above
