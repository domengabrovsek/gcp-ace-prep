# GKE

## CLI

```
# set a default cluster
~ gcloud config set container/cluster [cluster_name]


```

## questions:

- 192
- 189
- 175

---

(145) - Your existing application running in Google Kubernetes Engine (GKE) consists of multiple pods running on four GKE n1 "standard2" nodes. You need to deploy additional pods requiring n2 "highmem16" nodes without any downtime. What should you do?

A. Use gcloud container clusters upgrade. Deploy the new services.
**B. Create a new Node Pool and specify machine type n2 "highmem16" . Deploy the new pods.**
C. Create a new cluster with n2 "highmem16" nodes. Redeploy the pods and delete the old cluster.
D. Create a new cluster with both n1 "standard2" and n2 "highmem16" nodes. Redeploy the pods and delete the old cluster.

---

(108) - A team of data scientists infrequently needs to use a Google Kubernetes Engine (GKE) cluster that you manage. They require GPUs for some long- running, non- restartable jobs. You want to minimize cost. What should you do?

**A. Enable node auto-provisioning on the GKE cluster.**
B. Create a VerticalPodAutscaler for those workloads.
C. Create a node pool with preemptible VMs and GPUs attached to those VMs.
D. Create a node pool of instances with GPUs, and enable autoscaling on this node pool with a minimum size of 1.

---

## references:

- https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app
- https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl