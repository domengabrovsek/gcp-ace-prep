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

(97) - You are building a product on top of Google Kubernetes Engine (GKE). You have a single GKE cluster. For each of your customers, a Pod is running in that cluster, and your customers can run arbitrary code inside their Pod. You want to maximize the isolation between your customers' Pods. What should you do?

A. Use Binary Authorization and whitelist only the container images used by your customers' Pods.
B. Use the Container Analysis API to detect vulnerabilities in the containers used by your customers' Pods.
**C. Create a GKE node pool with a sandbox type configured to gvisor. Add the parameter runtimeClassName: gvisor to the specification of your customers' Pods.**
D. Use the cos_containerd image for your GKE nodes. Add a nodeSelector with the value cloud.google.com/gke-os-distribution: cos_containerd to the specification of your customers' Pods.

---

(94) - You create a Deployment with 2 replicas in a Google Kubernetes Engine cluster that has a single preemptible node pool. After a few minutes, you use kubectl to examine the status of your Pod and observe that one of them is still in Pending status. What is the most likely cause?

A. The pending Pod's resource requests are too large to fit on a single node of the cluster.
**B. Too many Pods are already running in the cluster, and there are not enough resources left to schedule the pending Pod.**
C. The node pool is configured with a service account that does not have permission to pull the container image used by the pending Pod.
D. The pending Pod was originally scheduled on a node that has been preempted between the creation of the Deployment and your verification of the Pods' status. It is currently being rescheduled on a new node.

---

---

## references:

- https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app
- https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl
- https://cloud.google.com/kubernetes-engine/docs/concepts/sandbox-pods
- https://managedkube.com/kubernetes/k8sbot/troubleshooting/pending/pod/2019/02/22/pending-pod.html