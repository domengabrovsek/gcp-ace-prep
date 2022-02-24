# Chapter 9

Know the structure of App Engine Standard applications.
These consist of services, versions, and instances. Services usually provide a single function. Versions are different versions of code running in the App Engine environment. Instances are managed instances running the service.

Know how to deploy an App Engine app.
This includes configuring the App Engine environment using the app.yaml file. Know that a project can have only one App Engine app at a time. Know how to use the gcloud app deploy command.

Know how to view the status of an application in the App Engine Console.
This includes viewing a list of services, versions, and instances.

Understand the different scaling options.
Three scaling options are autoscaling, basic scaling, and manual scaling. Only autoscaling and basic scaling are dynamic. Manual scaling creates resident instances. Autoscaling allows for more configuration options than basic scaling.

Know how to split traffic.
Use the gcloud app services set-traffic command to split traffic. It takes a ––splits parameter, which specifies the percent of traffic to route to each version.

Understand how to migrate traffic to a new version.
You can migrate from the Versions page of the App Engine console or using the ––migrate parameter with the gcloud app services set-traffic command.
