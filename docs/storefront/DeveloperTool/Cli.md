## :wrench: TaoJaa Cli installation
<p style={{ textAlign: 'justify' }}>
The Shopify CLI significantly accelerates your app development process by offering a suite of powerful features designed to enhance 
</p>

### productivity and streamline workflows:

<p style={{ textAlign: 'justify' }}>
Rapid Setup: Quickly scaffold new projects with predefined templates, reducing the time required to set up the basic structure of your application.
</p>


### Automated Workflows:
<p style={{ textAlign: 'justify' }}>
Integrate automated development workflows that handle common tasks, such as building, testing, and deploying, allowing you to focus on coding.
</p>

### Seamless Integration: 
<p style={{ textAlign: 'justify' }}>
Easily integrate with Shopify's ecosystem, enabling smooth interaction with Shopify APIs, themes, and app configurations.
</p>


### Local Development:
<p style={{ textAlign: 'justify' }}>
Facilitate local development with live reloading, enabling real-time updates as you make changes to your code.
Extensive Documentation and Support: Access comprehensive documentation and support resources to assist with troubleshooting and optimizing your development process.
</p>

<p style={{ textAlign: 'justify' }}>
By leveraging the Tao CLI tool and Shopify CLI, developers can significantly enhance their efficiency, maintain consistency across projects, and expedite the overall development lifecycle.
</p>






 Shopify CLI accelerates your app development process with the following features:

 - Anthenticate into vendor stores.
 - Creates new themes.
 - Modifiying  existing themes.
 - Deploys your themes into the vendor store.
 - Lets you search the Shopify.dev docs


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