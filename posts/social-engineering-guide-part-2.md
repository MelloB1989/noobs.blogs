---
title: 'Social Engineering Tutorial | Part 2⚡'
date: '2023-06-07'
category: 'Guide'
tags: 'tutorial'
image_url: 'https://integrisit.com/wp-content/uploads/2022/12/social_engineering-01.png'
---

Social Engineering: Step-by-Step Guide Part 2
 ======================================
In the previous blog we hosted the phishing website on localhost, in this blog we will be seeing how this website can be shared to the victim using port forwarding ⚡💎
  
 * * * * * 
  
 Step 1: Downloading and installing NGROK
 --------------------------------------------- 
  
 ##### Copy and paste these commands in your terminal. 
  
 -  `wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz` /
`wget` is a command in linux which allows you download a file from the internet.

 -  `sudo tar -xvf ngrok-v3-stable-linux-amd64.tgz` \
`tar` is used to extract the NGROK archive which we downloaded using `wget`. Now a executable of NGROK will be extracted.

  
 * * * * * 
  
 ##### Step 2: Authenticating NGROK and port forwarding.
---------------------------------------------
  
Login or Signup to ***ngrok.com***. Go to the dashboard and copy the command to authenticate NGROK.

***Note:*** 
-Make sure you validate your email (NGROK).
-Make sure you put `./` before the copied command from NGROK dashboard.
  
 * * * * * 
 
##### Step 3: Starting the phishing website on localhost and port forwarding.
---------------------------------------------

- `sudo systemctl start apache2` \
In linux systemd manages all the running and installed services of the operating system. `systemctl` allows us to introspect and troubleshoot these services. Here we are using it to start service apache2 which is a webserver.

- `./ngrok http 80` \
Here we run the NGROK executable and ask it to port forward port 80 (on which apache2 is running).

- After this step, NGROK portal opens and you will see a https link which you can then send to your friends. All the requests send to that link are forwarded to apache2 on your local machine, for apache2 it will be a request from the local machine itself, it will then respond back to NGROK and then NGROK forwards the request to the client. This is how port forwarding works in a nutshell.
  
 * * * * * 
  
 ##### Upcoming up: Social Engineering: The ART of Faking 👾  
  
 > Amateurs hack systems, professionals hack people 💀