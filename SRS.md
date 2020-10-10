# DEVAGRAM - SOFTWARE REQUIREMENT SPECIFICATION

1. ### Introduction

   1. ### Purpose

      - Devagram is a platform for **developers to connect** with each other. Developers can **showcase projects, code snippets, tutorials and memes, get reviewed by the fellow developers, community and interact and collaborate towards the open source community**. Developers can ask **query** and discuss with other developers. Also make amazing **profile** to showcase.

   2. ### Intended Audience

      - The targeted audience would be the **newbie to the experienced developers** struggling to start their development journey or to get the right opportunity for their growth.

   3. ### Intended Use

      - Getting reviews
      - Share the learning
      - Participating in Hackathons
      - Getting hired
      - Collaborate in OSS
      - Connect with professionals

   4. ### Scope

      - Devagram will make it **easy to connect developers** with each others.
        Developers can share their **work and projects** with others.
        Developers can solve their issues with the help of **better community**.

      - Developer can **message and follow** other developer and discuss with them.
        User can view other user's posts and projects.

   5. ### Definitions and Acronyms

      Developer

      - A user related to **tech industry and computer programming**.

      User

      - User is the person who is **using the system**.

   <br />

2. ### Overall Description

   1. ### User Needs

      - User need to be **authenticated** to access features.
      - User will be able to share **posts and manage posts**.
      - User will be able to see **other users' posts**.
      - User can react and rate to other's posts and also leave **comments**.
      - User can **follow or un-follow** other users.
      - User can share **stories** for the days.
      - User can send **messages** to other users.
      - User will be able to see **events** around his/her place and join them.
      - User can find other **developers around** his/her place.
      - User will be able to apply for any **job** available on the Devagram.
      - User can **turn on notification** for event to get notified.
      - User can see the upcoming hackathons and participate in it.

   2. ### Assumptions and Dependencies

      - As Devagram is a website, It should be accessible on major browsers like Google Chrome, Mozilla Firefox etc.
        Also it requires good internet otherwise there will be performance and usability issues.
      - Website will be responsive and accessible on both big and small screens.

   <br/>

3. ## System Features and Requirements

   1. ## Functional Requirements

      ### 1.1 Developers Requirements

      ### 1.1.1 Register

      **Brief Description :**

      - users new to Devagram need to register to use the platform.

      **Step-By-Step Description :**

      - To use Devagram users need to register themselves.
      - user provide registration details to the system.
      - System use the details and register the user.

      ### 1.1.2 Authenticate/ Login

      **Brief Description :**

      - users who are registered need to be authenticated.

      **Step-By-Step Description :**

      - user provide credentials to the system.
      - System verify the details and provide according result.

      ### 1.1.3 Share posts

      **Brief Description :**

      - Users can share posts. Posts may include images, texts, videos, links or any other project related files.

      **Step-By-Step Description :**

      - user provide details of post that he/she want to share to system.
      - System work on the details of posts.
      - System shares the posts and give particular details.

      ### 1.1.4 Update posts

      **Brief Description :**

      - Users can update only own posts. Update includes changing content.

      **Step-By-Step Description :**

      - User provide details of post that he/she want to update.
      - System work on the details of posts.
      - If post exists then system ask for update details else show particular message.
      - User provide update details.
      - System update the post.

      ### 1.1.5 Delete posts

      **Brief Description :**

      - users can delete only own posts.

      **Step-By-Step Description :**

      - User provide details of post that he/she want to delete.
      - System work on the details of posts.
      - If post exists then system deletes it else show particular message.

      ### 1.1.6 See other's posts

      **Brief Description :**

      - Users can see other's post.

      **Step-By-Step Description :**

      - User provide details of post that he/she want to see.
      - System work on the details of posts.
      - If post exists then system display the post else show particular message.

      ### 1.1.7 React to posts

      **Brief Description :**

      - Users can react to other's post. React includes comments, likes.

      **Step-By-Step Description :**

      - User provide a reaction to the post.
      - System adds the reaction to the post.

      ### 1.1.8 Follow or un-follow other users

      **Brief Description :**

      - Users can follow or un-follow other users.

      **Step-By-Step Description :**

      - User follow or un-follow other user.
      - System verify user's action.
      - System do the according and users following list.

      ### 1.1.9 Share stories

      **Brief Description :**

      - Users can shares stories. Stories can only contain image, text or links and are only available for one day.
        Stories are not updatable.

      **Step-By-Step Description :**

      - User provide details of the story that he/she want to share.
      - System work on the story details and add story.
      - After one day system removes the story.

      ### 1.1.10 Delete stories

      **Brief Description :**

      - Users can only delete own stories.

      **Step-By-Step Description :**

      - User provide details of the story that he/she want to de;ete.
      - System uses the details finds the story.
      - System deletes the story.

   2. ### External Interface Requirements
   3. ### System Features<br>
      - #### **Rating the post in start**
        - New post are rated in range of 1-5 start by his fellow developers
      - #### **Notification through mail**
        - New post are notified through mail
        - Link to the post are shared through the mail only.
      * #### **Trending posts**
        - Trending posts are made by sorting all the posts based on stars
      * #### **Section for upcoming hackathons**
        - Upcoming and live hackathons are added in the hackathons sections
        - Leads to more engagement.
   4. ### Non Functional Requirements
