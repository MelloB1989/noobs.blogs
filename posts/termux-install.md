---
title: 'Termux installation guide'
date: '2023-06-16'
category: 'Guide'
tags: 'termux'
image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Termux.svg/1200px-Termux.svg.png'
---

# C compiler on Termux Android

## Features:- 
1. NANO, VI editors
2. CLANG complier
3. Python3
4. Cool ASCII ART

## Installation:-
Download and install the termux app from the following link:

[Download Termux App](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_arm64-v8a.apk)

Copy and paste the following command in the termux app and then press enter:

`pkg update -y && pkg install git -y && git clone https://github.com/MelloB1989/termux_clang_install.git && chmod +x ~/termux_clang_install/* && bash ~/termux_clang_install/install.sh`

NOTE: Press enter if you are asked a prompt similar to `(Y/I/N/O/D/Z) [default=N] ?` 
This installation will take 10-15 mins depending on your internet connection and processing power.

## Usage:-

### Writing a C program

To create a new C program type the following command and then press enter:

`nano <YOUR_C_PROGRAM_NAME>.c`

Replace YOUR_C_PROGRAM_NAME with your filename. Use nano controls from there on.

### Running a C program

To run a C program type the following command and then press enter:

`runc <YOUR_C_PROGRAM_NAME>`

Example:- `runc add`

Note:- No need to add `.c` in the command.
