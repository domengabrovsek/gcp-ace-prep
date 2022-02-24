# Chapter 9: Computing with App Engine 

You can find the answers in the Appendix. 
1. You have designed a microservice that you want to deploy to production. Before it can be deployed, you have to review how you will manage the service lifecycle. The architect is particularly concerned about how you will deploy updates to the service with minimal disruption. What aspect of App Engine components would you use to minimize disruptions during updates to the service? 
	1. Services 
	2. Versions
	3. Instance groups 
	4. Instances 
2. You’ve just released an application running in App Engine Standard. You notice that there are peak demand periods in which you need up to 12 instances, but most of the time 5 instances are sufficient. What is the best way to ensure that you have enough instances to meet demand without spending more than you have to? 
	1. Configure your app for autoscaling and specify max instances of 12 and min instances of 5. 
	2. Configure your app for basic scaling and specify max instances of 12 and min instances of 5. 
	3. Create a cron job to add instances just prior to peak periods and remove instances after the peak period is over. 
	4. Configure your app for instance detection and do not specify a max or minimum number of instances. 
3. In the hierarchy of App Engine components, what is the lowest-level component? 
	1. Application 
	2. Instance 
	3. Version 
	4. Service 
4. What command should you use to deploy an App Engine app from the command line? 
	1. gcloud components app deploy 
	2. gcloud app deploy
	3. gcloud components instances deploy 
	4. gcloud app instance deploy 
5. You have deployed a Django 1.5 Python application to App Engine. This version of Django requires Python 3. For some reason, App Engine is trying to run the application using Python 2. What file would you check and possibly modify to ensure that Python 3 is used with this application? 
	1. app.config 
	2. app.yaml
	3. services.yaml 
	4. deploy.yaml 
6. You have several App Engine apps you plan to deploy from your project. What have you failed to account for in this design? 
	1. App Engine only supports one app per project.
	2. App Engine only supports two apps per project. 
	3. App Engine apps exist outside of projects. 
	4. Nothing, this is a common pattern. 
7. The latest version of your microservice code has been approved by your manager, but the product owner does not want the new features released until a press release is published. You’d like to get the code out but not expose it to customers. What is the best way to get the code out as soon as possible without exposing it to customers? 
	1. Deploy with gcloud app deploy --no-traffic. 
	2. Write a cron job to deploy after the press release is published. 
	3. Deploy with gcloud app deploy --no-promote. 
	4. Deploy as normal after the press release is published. 
8. You have just deployed an app that hosts services that provide the current time in any time zone. The project containing the code is called current-time-zone, the service providing the user interface is called time-zone-ui, and the service performing the calculation is called time-zone-calculate. What is the URL where a user could find your service? 
	1. current-time-zone.appengine.com
	2. current-time-zone.appspot.com
	3. time-zone-ui.appspot.com
	4. time-zone-calculate.appspot.com
9. You are concerned that as users make connections to your application, the performance will degrade. You want to make sure that more instances are added to your App Engine application when there are more than 20 concurrent requests. What parameter would you specify in app.yaml? 
	1. max_concurrent_requests 
	2. target_throughput_utilization 
	3. max_instances 
	4. max_pending_latency 
10. What parameters can be configured with basic scaling? 
	1. max_instances and min_instances 
	2. idle_timeout and min_instances 
	3. idle_timeout and max_instances
	4. idle_timeout and target_throughput_utilization 
11. The runtime parameter in app.yaml is used to specify what?
	1. The script to execute 
	2. The URL to access the application 
	3. The language runtime environment
	4. The maximum time an application can run 
12. What are the two kinds of instances available in App Engine Standard? 
	1. Resident and dynamic
	2. Persistent and dynamic 
	3. Stable and dynamic 
	4. Resident and nonresident 
13. You work for a startup, and costs are a major concern. You are willing to take a slight performance hit if it will save you money. How should you configure the scaling for your apps running in App Engine? 
	1. Use dynamic instances by specifying autoscaling or basic scaling. 
	2. Use resident instances by specifying autoscaling or basic scaling. 
	3. Use dynamic instances by specifying manual scaling. 
	4. Use resident instances by specifying manual scaling. 
14. A team of developers has created an optimized version of a service. This should run 30 percent faster in most cases. They want to roll it out to all users immediately, but you are concerned that the substantial changes need to be released slowly in case there are significant bugs. What can you do to allocate some users to the new version without exposing all users to it? 
	1. Issue the command gcloud app services set-traffic.
	2. Issue the command gcloud instances services set-traffic. 
	3. Issue the command gcloud app set-traffic. 
	4. Change the target IP address of the service for some clients. 
15. What parameter to gcloud app services set-traffic is used to specify the method to use when splitting traffic? 
	1. ––split-traffic 
	2. ––split-by
	3. ––traffic-split 
	4. ––split-method 
16. What parameter to gcloud app services set-traffic is used to specify the percentage 
    of traffic that should go to each instance? 
	1. ––split-by 
	2. ––split
	3. ––split-percent 
	4. ––percent-split 
17. You have released a new version of a service. You have been waiting for approval from the product manager to start sending traffic to the new version. You get approval to route traffic to the new version. What parameter to gcloud app services set-traffic is used to specify that traffic should be moved to a newer version of the app? 
	1. ––move-to-new 
	2. ––migrate-to-new 
	3. ––migrate 
	4. ––move 
18. The status of what components can be viewed in the App Engine console? 
	1. Services only 
	2. Versions only 
	3. Instances and versions 
	4. Services, versions, and instances 
19. What are valid methods for splitting traffic? 
	1. By IP address only 
	2. By HTTP cookie only 
	3. Randomly and by IP address only 
	4. By IP address, HTTP cookies, and randomly 
20. What is the name of the cookie used by App Engine when cookie-based splitting is used? 
	1. GOOGID 
	2. GOOGAPPUID 
	3. APPUID 
	4. UIDAPP 