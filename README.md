
# Devops Project : Deploy Application on AWS EC2 Instance

End-to-end process of deployment of Angular web application on AWS EC2 Instance. I am going to cover everything from scratch.

## 🚀 About Me
I'm Frontend Developer & DevOps/SRE Enthusiast | Crafting seamless UIs & robust infrastructures | Skilled in Angular, CI/CD, Docker, Kubernetes, AWS, Monitoring

<img width="1434" alt="image" src="https://github.com/user-attachments/assets/32a937ce-3487-4fb3-9406-64acec0af3d6">

## 🛠 Prerequisites
VM (Any Cloud Provider - AWS), Git Setup on VM, Nodejs Installed on VM, Linux Basics

## Setup Git on VM

<img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" width="100">

#### We are Going to Use Amazon Linux Machine for deployment.
Git is available in the default Amazon Linux package repositories. so, we need to setup only if its not available with VM Image(Optional).

```bash
  sudo apt update -y 
  sudo apt install git -y 
  git --version 
```


## Setup of Nodejs 

<img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png" width="100">

we need node package manager to install required dependencies to run Nodejs based Application.
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  node -v

```


## Setup of Angular CLI and Running Project

<img src="https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png" width="130">

This Application needs Angular CLI Version 18.
```bash
  npm install -g @angular/cli
  git clone https://github.com/ajazbeig-21/aws-app-deployment.git
  cd aws-app-deployment
  npm install
  ng serve --host 0.0.0.0 --port 4200

```


## Modify Security Group from AWS

<img src="https://www.logo.wine/a/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.svg" width="100">

Edit Inbound rule in a Security group Settings of Deployed EC2 Instance

Type : Custom TCP
Protocol : TCP
Port : 4200
Source : 0.0.0.0/0

http://public-ipv4-address:4200/
#### 👏 Now, Our Portfolio Application is Visible 

## Authors

- [@ajazbeig](https://github.com/ajazbeig-21)

