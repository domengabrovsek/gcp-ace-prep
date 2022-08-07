# load balancing

## questions

(167) - Your company developed a mobile game that is deployed on Google Cloud. Gamers are connecting to the game with their personal phones over the Internet. The game sends UDP packets to update the servers about the gamers' actions while they are playing in multiplayer mode. Your game backend can scale over multiple virtual machines (VMs), and you want to expose the VMs over a single IP address. What should you do?

A. Configure an SSL Proxy load balancer in front of the application servers.
B. Configure an Internal UDP load balancer in front of the application servers.
C. Configure an External HTTP(s) load balancer in front of the application servers. 
**D. Configure an External Network load balancer in front of the application servers.**

---

(127) - You have an application that receives SSL-encrypted TCP traffic on port 443. Clients for this application are located all over the world. You want to minimize latency for the clients. Which load balancing option should you use?

A. HTTPS Load Balancer
B. Network Load Balancer
**C. SSL Proxy Load Balancer**
D. Internal TCP/UDP Load Balancer. Add a firewall rule allowing ingress traffic from 0.0.0.0/0 on the target instances.

---

---
## references

- [Load balancer decision tree](https://cloud.google.com/load-balancing/docs/choosing-load-balancer#lb-decision-tree)
- [SSL load balancer](https://cloud.google.com/load-balancing/docs/ssl)