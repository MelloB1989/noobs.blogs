---
title: 'Launching a Ubuntu EC2 Instance in AWS⚡'
date: '2023-06-11'
category: 'Guide'
tags: 'tutorial'
image_url: 'https://devopsdatacenter.files.wordpress.com/2024/04/amazon_ec2.png'
---

# Launching an Ubuntu EC2 Instance and Connecting via SSH

In this tutorial, we will walk through the steps of launching an Ubuntu EC2 instance on AWS and connecting to it using SSH. 

## Prerequisites

Before getting started, ensure you have the following:

- An AWS account
- SSH key pair generated (if you don't have one, refer to the AWS documentation on how to create an SSH key pair)

## Launching an Ubuntu EC2 Instance

1. Log in to your AWS Management Console and navigate to the EC2 Dashboard.

2. Click on the **"Launch Instance"** button to start the EC2 instance creation process.

3. In the **"Choose an Amazon Machine Image (AMI)"** step, search for **"Ubuntu"** in the search bar and select the desired Ubuntu AMI.

4. Choose an instance type based on your requirements and click on **"Next: Configure Instance Details"**.

5. Configure the instance details such as the VPC, subnet, security group, etc., or leave them as default. Click **"Next: Add Storage"**.

6. Specify the storage size and settings for the instance. Click **"Next: Add Tags"**.

7. Add any desired tags to your instance for better organization. Click **"Next: Configure Security Group"**.

8. In the **"Configure Security Group"** step, ensure that you have a rule allowing SSH access (port 22) from your IP address or the desired IP range. Click **"Review and Launch"**.

9. Review the instance details and click **"Launch"**.

10. In the **"Select an existing key pair or create a new key pair"** dialog, select your SSH key pair or create a new one. Acknowledge the warning and click **"Launch Instances"**.

11. The instance will now be launched. You can view the instance details on the EC2 Dashboard.

## Connecting to the Ubuntu EC2 Instance via SSH

1. Open your terminal or command prompt.

2. Set the permissions for your SSH key pair file using the following command:

   ```bash
   chmod 400 /path/to/your/key-pair.pem
   ```

   Replace `/path/to/your/key-pair.pem` with the actual path to your SSH key pair file.

3. Connect to your Ubuntu EC2 instance using the following SSH command:

   ```bash
   ssh -i /path/to/your/key-pair.pem ubuntu@<public-ip>
   ```

   Replace `/path/to/your/key-pair.pem` with the actual path to your SSH key pair file, and `<public-ip>` with the public IP address of your EC2 instance.

4. You will be prompted to confirm the connection. Type **"yes"** and press **Enter**.

5. If the SSH key pair and IP address are correct, you will successfully log in to your Ubuntu EC2 instance via SSH.

Congratulations! You have successfully launched an Ubuntu EC2 instance and connected to it via SSH.

## Conclusion

In this tutorial, we covered the steps to launch an Ubuntu EC2 instance on AWS and connect to it using SSH. EC2 instances provide a scalable and flexible solution for hosting applications and services. SSH allows secure remote access to your instances for management and configuration.

Remember to properly manage your instances and security groups to ensure the safety and stability of your resources.

For more information and advanced configurations, refer to the official AWS documentation.

Happy coding!
