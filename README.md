![image](https://github.com/shubhamiaastha/myapp/assets/135720797/b8ecfb6d-eba3-4f62-b550-6c8cc1595937)

Organizations build internal applications such as dashboards, database GUIs, admin panels, approval apps, customer support dashboards, and more to help their teams perform day-to-day operations. Appsmith is an open-source tool that enables the rapid development of these internal apps. Read more on our [website](https://www.appsmith.com/?utm_source=github&utm_medium=organic&utm_campaign=readme).

Video:-

[Video](https://www.youtube.com/watch?v=NnaJdA1A11s?v=Dxe_NzdGzL4&utm_source=github&utm_medium=organic&utm_campaign=readme/?target=_blank)

Installation:-

There are two ways to start using Appsmith

1. Signup on [Appsmith Cloud](https://app.appsmith.com/applications).
2. Install Appsmith on your machine. See the installation guides below.

# First Installation Docker on your Systum
Download :-   [Docker Desktop for Window](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe?_gl=1*c3s9be*_ga*MTA2OTI5OTQxNS4xNjkyNDQ3Njky*_ga_XJWPQMJYHQ*MTY5NDAwMjE5OS4xMC4xLjE2OTQwMDI4OTQuNjAuMC4w)

## Install interactively 

1. Double-click Docker Desktop Installer.exe to run the installer.
2. When the installation is successful, select Close to complete the installation process.
3. If your admin account is different to your user account, you must add the user to the docker-users group. Run Computer Management as an administrator and navigate to Local Users and Groups > Groups > docker-users. Right-click to add the user to the group. Sign out and sign back in for the changes to take effec

### Install from the command line

After downloading Docker Desktop Installer.exe, run the following command in a terminal to install Docker Desktop:

If you’re using PowerShell you should run it as:

                                 $ "Docker Desktop Installer.exe" install 
If using the Windows Command Prompt:

                                start /w "" "Docker Desktop Installer.exe" install



# Start Docker Desktop

Docker Desktop does not start automatically after installation. To start Docker Desktop:

1. Search for Docker, and select Docker Desktop in the search results.
   

   ![image](https://github.com/shubhamiaastha/myapp/assets/135720797/954558e8-932e-4e7b-912c-dec02d2e1503)


2. The Docker menu ( whale menu ) displays the Docker Subscription Service Agreement.
3. Select Accept to continue. Docker Desktop starts after you accept the terms.



            





1. Docker :- [Docker](https://docs.appsmith.com/getting-started/setup/installation-guides/docker?utm_source=github&utm_medium=organic&utm_campaign=readme)

Step-1

                        mkdir ~/appsmith
                        cd ~/appsmith
                        curl -L https://bit.ly/3AQzII6 -o $PWD/docker-compose.yml
Step-2 

	                      vim docker-compose.yml

Step-3
  
                        cat docker-compose.yml

 Step-4
  
                        docker compose up

  
2. Kubernetes :- [Kubernetes](https://docs.appsmith.com/getting-started/setup/installation-guides/kubernetes?utm_source=github&utm_medium=organic&utm_campaign=readme)
   
3. AWS :-   [AWS](https://docs.appsmith.com/getting-started/setup/installation-guides/aws-ami?utm_source=github&utm_medium=organic&utm_campaign=readme)


    For other deployment options, see the [Installation Guides](https://docs.appsmith.com/getting-started/setup/installation-guides?utm_source=github&utm_medium=organic&utm_campaign=readme) documentation.

   
