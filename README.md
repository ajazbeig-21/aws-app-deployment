
# Devops Project : Deploy Application on AWS EC2 Inctance

End-to-end process of deployment of Angular web application on AWS EC2 Instance. I am going to cover everything from scratch.

## 🚀 About Me
I'm Frontend Developer & DevOps/SRE Enthusiast | Crafting seamless UIs & robust infrastructures | Skilled in Angular, CI/CD, Docker, Kubernetes, AWS, Monitoring

## 🛠 Prerequisites
VM (Any Cloud Provider - AWS), Git Setup on VM, Nodejs Installed on VM, Linux Basics

## Setup Git on VM
#### We are Going to Use Amazon Linux Machine for deployment.
Git is available in the default Amazon Linux package repositories. so, we need to setup only if its not available with VM Image(Optional).

```bash
  sudo yum update -y 
  sudo yum install git -y 
  git --version 
```
    
## Setup of Nodejs

we need node package manager to install required dependencies to run Nodejs based Application.
```bash
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  source ~/.bashrc
  nvm install --lts
  node -v

```


## Authors

- [@ajazbeig](https://github.com/ajazbeig-21)

