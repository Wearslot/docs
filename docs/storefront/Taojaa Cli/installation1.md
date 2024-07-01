---
title: Installation
sidebar_position : 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tag from '@site/src/components/HomepageFeatures/tag';



Taojaa CLI empowers developers to edit and preview themes locally without impacting a merchant's live storefront, while its integrated Browsersync capabilities streamline simultaneous testing across desktops, mobiles, and tablets. After completing development, developers can seamlessly deploy themes to Taojaa storefronts and activate them using Taojaa CLI's [straightforward yet robust commands](Commands.md).This article offers comprehensive guidance on installing and setting up Taojaa CLI, serving as the initial step in creating Taojaa themes for Taojaa storefronts.


 Taojaa CLI accelerates your app development process with the following features:

 - [Anthenticate into vendor stores](#authentication)
 - [Creates new themes](#initializing-a-new-team)
 - [Modifiying  existing themes](#initialize-an-existing-taojaa-theme)
 - [Deploys your themes into the vendor store](#deploying-to-store)



## Requirements
- [node.js](https://nodejs.org/en/download/package-manager) 18.0 and above ( This can be checked by using the command node -v on your terminal)

## Installation
To install Taojaa make use of the following command  <Tag color = "#A020F0" >npm i  -g taojaa-cli </Tag>

 ```
 C:\Users\..> npm i  -g taojaa-cli 

 ```


:::caution

 Make use of the -g flag to ensure Taojaa cli is installed globally.

 :::


After installing Taojaa CLI, you can verify its successful installation by using the command  <Tag color = "#A020F0" >taojaa</Tag>
 in your terminal or command prompt. This command will confirm that Taojaa CLI has been installed correctly and is ready to use for your development tasks.

 
 ```

 C:\Users\..> taojaa 

 ```

 Output:

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


 
 ## Authentication
 Developers must be authorized by TaoJaa Vendors to get access before any modification can be carried on the vendor Taojaa store. Developers should not be able to interact with Vendors TaoJaa store  before completing Authorization. These requirements ensure that developers can quickly set up and begin development on client tajoo stores. This installation guidelines detail the correct processes for authentication,and  any necessary sign-up steps. These guidelines also ensure that vendors receive the guidance they need when they start using your app.
    

 ```
 C:\Users\....>taojaa authenticate
 Enter Access Token: access
 Enter Secret Key: secret

 Authenticated successfully

 ```


 
