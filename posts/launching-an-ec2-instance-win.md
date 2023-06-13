---
title: 'Launching a Windows EC2 Instance in AWS⚡'
date: '2023-06-11'
category: 'Guide'
tags: 'tutorial'
image_url: 'https://devopsdatacenter.files.wordpress.com/2024/04/amazon_ec2.png'
---

# Launching a Windows EC2 Instance in AWS

In this tutorial, we will walk through the step-by-step process of launching a Windows EC2 instance in AWS (Amazon Web Services). We will also cover how to retrieve the instance password and connect to the instance using RDP (Remote Desktop Protocol). So, let's get started!

## Prerequisites

Before we begin, make sure you have the following prerequisites in place:

- An AWS account. If you don't have one, you can create a free-tier account by visiting the [AWS Free Tier](https://aws.amazon.com/free/) page.
- Basic knowledge of AWS services and concepts.

## Launching the Windows EC2 Instance

- Log in to the [AWS Management Console](https://console.aws.amazon.com/).

- From the AWS Management Console, navigate to the EC2 service by clicking on **Services** in the top menu and selecting **EC2** under the Compute section.

- Click on **Launch Instance** to start the instance creation process.

- On the **Choose an Amazon Machine Image (AMI)** page, select the desired Windows Server AMI. You can choose from a wide range of options based on your requirements.

- Next, select an **Instance Type** that suits your needs.**(Leave default if you are begineer)** You can choose an instance type based on factors such as CPU, memory, storage, and networking capabilities.

- Configure the instance details, such as the number of instances, network settings, and storage options. You can keep the default values or customize them according to your requirements.

- On the **Add Tags** page, you can add optional tags to your instance for better organization and identification. This step is not mandatory but can be helpful when managing multiple instances.

- Configure the **Security Group** settings to control inbound and outbound traffic to the instance. Make sure to allow RDP traffic (port 3389) to connect to the instance securely.

- Review your configuration on the **Review** page and click on **Launch** to start the instance.

- In the **Select an existing key pair or create a new key pair** dialog, choose an existing key pair or create a new one **(Create new if you are doing this for first time)**. This key pair will be used to securely access the instance later on.

- Click on **Launch Instances**. The instance will now start launching. Once it's ready, you can proceed to retrieve the instance password.

## Retrieving the Instance Password

- In the EC2 dashboard, select the launched Windows instance.

- Click on **Connect** --> **RDP** --> **Get Windows Password**.

- In the **Retrieve Default Windows Administrator Password** dialog, click on **Choose File** and select the key pair file (.pem) you used during instance launch.

- Click on **Decrypt Password**. AWS will decrypt the password and display it on the screen.

- Save the password by clicking on **Download Password**. Make sure to store it in a secure location.

## Connecting to the Instance via RDP

Now that we have the instance password, we can connect to the Windows EC2 instance using RDP.

- Open the **Remote Desktop Connection** application on your local machine. This application is pre-installed on most Windows systems.

- In the **Computer** field, enter the public IP address or DNS name of your EC2 instance.

- Click on **Connect** to initiate the RDP session.

- In the **Windows Security** dialog, enter the username as **Administrator** and the password you retrieved earlier.

- Click on **OK** to establish the connection. If the credentials are correct, you will be logged in to the Windows EC2 instance.

Congratulations! You have successfully launched a Windows EC2 instance in AWS

* * * * *

##### Upcoming: Launching an EC2 instance.

> Cloud is the ultimate playground 💀