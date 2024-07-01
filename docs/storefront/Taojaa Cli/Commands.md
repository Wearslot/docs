---
title: Commands
sidebar_position : 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tag from '@site/src/components/HomepageFeatures/tag';


This article serves as a detailed guide to using Taojaa CLI, the robust theme development and deployment tool for Taojaa. To install Taojaa CLI on your operating system, please refer to the [Installing Taojaa CLI](installation1.md) section. For further insights into Taojaa's Theme Engine, visit the "About Taojaa" section. Below, you'll find comprehensive details on every Taojaa CLI command and its options.

# Command overview
<hr></hr>

The syntax to run a Stencil CLI command is as follows:



``` 
  taojaa COMMANDS [OPTIONS] <PARAMETERS>
```

Running taojaa <Tag color = "#A020F0"> taojaa --help </Tag>  outputs a full list of  full list of commands and their descriptions. For more detailed information and usage examples, click a link in the table below:



| Command	   |                  Description                            |
| -------- | -------------------------------------------------------------- |
| [new](#new)  | Initializes a new taojaa theme   |
| [run](#run) | Starts up the TaoJaa storefront local development environment, using theme files in the current directory and data from the live store.|
| [pull](#pull)    | Pulls the configuration from the active theme on your live store and updates your local configuration.  |
| [push](#push)    | Bundles the theme and then directly uploads the theme to taojaa store  |
| [authenticate](#authentication)  |  Authenticate cli access for push, pull and publish actions  |
| [help](#help)   | display help for command  |


## new

<hr></hr>

Creates a new taojaa theme for the taojaa store and this can be achieved with the command 

```

taojaa new theme Theme-name

```

## run
<hr></hr>
Starts the live theme preview using the theme files in the current directory.

```
taojaa run dev  --store storename

```

## Pull
<hr></hr>
Pulls t active theme from your live store and updates your local configuration.

```
taojaa pull store name

```
## Push
<hr></hr>
Push changes made on the local server to your taojaa store.

```
taojaa push store name

```

## Authentication
<hr></hr>
Authenticate the [CLI](installation1.md) with the tajoo store


```
taojaa authenticate

```

## help
<hr></hr>
Provides the available commands you can run on the taojaa Cli.

```
taojaa help

```
## Clone
<hr></hr>
Clone themes from the taojaa store to local repositories.
```
taojaa clone theme --name beauty-shop --store alkensfootwear
```

