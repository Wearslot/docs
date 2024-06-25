---
title: Create a team
sidebar_position : 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Tag from '@site/src/components/HomepageFeatures/tag';


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
            
            

