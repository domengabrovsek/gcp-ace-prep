# cloud run

## questions

(166) Your web application has been running successfully on Cloud Run for Anthos. You want to evaluate an updated version of the application with a specific percentage of your production users (canary deployment). What should you do?

A. Create a new service with the new version of the application. Split traffic between this version and the version that is currently running. 
**B. Create a new revision with the new version of the application. Split traffic between this version and the version that is currently running.**
C. Create a new service with the new version of the application. Add HTTP Load Balancer in front of both services.
D. Create a new revision with the new version of the application. Add HTTP Load Balancer in front of both revisions.

---

(163) You have developed a containerized web application that will serve internal colleagues during business hours. You want to ensure that no costs are incurred outside of the hours the application is used. You have just created a new Google Cloud project and want to deploy the application. What should you do?

A. Deploy the container on Cloud Run for Anthos, and set the minimum number of instances to zero.
**B. Deploy the container on Cloud Run (fully managed), and set the minimum number of instances to zero.**
C. Deploy the container on App Engine flexible environment with autoscaling, and set the value min_instances to zero in the app.yaml. 
D. Deploy the container on App Engine flexible environment with manual scaling, and set the value instances to zero in the app.yaml.

---



## references

- https://cloud.google.com/anthos/run/docs/rollouts-rollbacks-traffic-migration
- https://cloud.google.com/run/docs/about-instance-autoscaling