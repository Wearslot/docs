---
title: setup
sidebar_position : 1
toc_min_heading_levels: 1
toc_man_heading_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tag from '@site/src/components/HomepageFeatures/tag';


<Tabs>
  <TabItem value ="Why Taojaa" label="Set up" default>
  

 # Requirements Checklist for Getting Started With TaoJaa 

 The following requirements are necessary to Get Taojaa store development environment up and running. These requi-rements ensure the  best experience throughout the entire store development lifecycle, encompassing branding, instal-lation, onboarding, functionality, and quality.



  - Node Packege Manager (npm) 
  - Taojaa Cli


 ## Node Packege Manager
  Node Package Manager (npm) is a library and registry for JavaScript software packages, and it includes a command-line tool that allows you to install development packages and dependencies. To publish and install packages from either the public npm registry or a private npm registry, you must first install Node.js which is an open source server environment that allows you to run javaScript code in servers. 

  :::info

  For more information on installing and Node refer to the links below:
  - Installing [node](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs)
  - Installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

  :::

  ## :wrench: TaoJaa Cli installation

  The Tao Cli tool is a developer tool that is neecessary to initialize the view template of the cli 

 to intall the Taojaa cli use the following connamd in your terminal.

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

 </TabItem>
  
   <TabItem value ="Themes" label=" TaoJaa Themes" default>
     ## Taojaa Themes 

        <p style={{ textAlign: 'justify' }}>
        Themes in Taojaa are initialized using a predefined skeleton known as "affluent." This affluent skeleton serves as a comprehensive template that provides a structured and consistent foundation for theme development. It includes essential components, layout configurations, and design elements, ensuring that themes maintain a cohesive and visually appealing appearance. By using the affluent skeleton, developers can streamline the theme creation process, focusing on customization and unique features while adhering to a well-defined and tested framework.
       </p>

        To create a new team use the command: <Tag color = "#A8E480" > taojaa new theme myfirsttheme </Tag>

        The output of the command is:

        ```
        C:\Users\...> taojaa new theme myfirsttheme
        Creating new theme using affluent...
        Cloning into 'myfirsttheme'...
        Theme initlized succesfully!
        Start building amazing e-commerce experience.
        ```
                
          

          the startup files initialized in the folder are 

         
            ```
          C:\Users\...\myfirsttheme>
          
           Directory of C:\Users\....\myfirsttheme
              06/20/2024 10:55 PM <DIR> .
              06/20/2024 10:55 PM <DIR> ..
              06/20/2024 10:55 PM <DIR> assets
              06/20/2024 10:55 PM <DIR> components
              06/20/2024 10:55 PM <DIR> config
              06/20/2024 10:55 PM <DIR> layout
              06/20/2024 10:55 PM <DIR> pages
              06/20/2024 10:55 PM <DIR> sections
                    • File(s) 8 Dir(s) 8,038,428,672 bytes free


              

           ```
           To start the application navigate to myfirsttheme directory and run the command  <Tag color = "#A8E480" > taojaa run dev --store storename </Tag>

            
            ```
           > taojaa run dev --store name
           
            ```
            <Tag color = "#A8E480" > The store name is always the base name of the store url</Tag>
            
            


   
   </TabItem>
 
 


    

</Tabs>



