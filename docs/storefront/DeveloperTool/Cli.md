# Introduction
<p style={{ textAlign: 'justify' }}>
 Taojaa CLI is more than just a command-line interface; it’s a comprehensive development tool designed to enhance both the developer and user experience. Its extensibility allows for significant customization, enabling developers to tailor their vendor’s store precisely to their needs. By streamlining view template setup, initialization, and authentication, Taojaa CLI facilitates a smoother, more efficient development process, leading to highly functional and user-centric applications. Whether you are just starting a project or looking to optimize an existing one, Taojaa CLI provides the robust features and flexibility needed to succeed in the dynamic world of e-commerce development.
 </p>

 Taojaa CLI accelerates your app development process with the following features:

 - Anthenticate into vendor stores.
 - Creates new themes.
 - Modifiying  existing themes.
 - Deploys your themes into the vendor store.



## Requirements
- Node Packege Manager (npm) 
- Taojaa Cli

To install Taojaa make use of the following command

 ```
 C:\Users\..> npm i  -g taojaa-cli 

 ```


:::caution

 Make use og the -g flag to ensure Taojaa cli is installed globally.

 :::


 After Installing you can use the command taojaa to verify that the taojaa cli has been installed successfully.
 
 ```
 C:\Users\..> taojaa 

 ```


 The out put out put from the command is:

 ```
 Usage: index [options] [command]
 Options:
 -h, --help   display help for command

 Commands:
 new <type> <name>               Initialize new project
 run [options] <dev>             Run the project
 theme [options] <action>        Perform a push, pull, publish, validate action the app.
 clone [options] <type>          Clone exitings themes, app and plugins.
 authenticate [options]          Authenticate cli access for push, pull and publish actions display help for command
 help [command]                  display help for command
 
 ```

 Seeing this output on your terminal implies that the Taojaa cli has successfully been installed on your machine.



## initializing a new team

To create a new TaoJaa theme use the command.

 ```
 C:\Users\..> TaoJaa new theme Myfirst Theme

 ```
 This theeme would make use of a skelenton known as affluent to initialize the project


  ## :closed_lock_with_key: TaoJaa Authentication

 <p style={{ textAlign: 'justify' }}>
 Developers must be authorized by TaoJaa Vendors to get access before any modification can be carried on the vendor Taojaa store. Developers should not be able to interact with Vendors TaoJaa store  before completing Authorization. These requirements ensure that developers can quickly set up and begin development on client tajoo stores. This installation guidelines detail the correct processes for authentication,and  any necessary sign-up steps. These guidelines also ensure that vendors receive the guidance they need when they start using your app.
 </p>

  To Authenticate use the command 

 ```
 C:\Users\....>taojaa authenticate
 Enter Access Token: access
 Enter Secret Key: secret

 Authenticated successfully

 ```




## Initialize as existing Taojaa Theme




 





 



