# Foodie
![Home page](https://github.com/carrozw/foodie/blob/main/images/foodie-devices.jpg)

Foodie was designed, built and deployed by Caroline Zwolinski as her third project for the Code Institute Full Stack Web Development. The purpose of the site is to share recipes with fellow foodlovers. 

# UX

## Visitor/User Goals

- As a user I want to get inspiration from others.
- As a user I want to share my recipes with other food lovers.
- As a user I want it to be easy to navigate on the site.

## Business Goals

If there were any, I can come think of a few.
- Kitchenware products
- Enticing customers to visit cafés and or restaurants, offer deals/discounts
- Recipe books
- Connect to a foodchain

### Design/Color scheme

- I've used Materialize CSS framework.
- There are pictures from Pexels.com, all mentioned on the Media section.
- The site is to some extent depending on images uploaded by users.
- I've chosen to let the images speak the colors. Therefore I've picked unobtrusive colors on the navbar and body.

### Typography

The primary font 'RocknRoll One' was chosen for the body text of the site because of it clear readability, yet somewhat funky style. This font also looks good in uppercase with a little extra letter spacing.

### Wireframe

These wireframes were hand drawn during the planning process for this project. 

- [Main](https://github.com/carrozw/foodie/blob/main/images/wireframe-main.jpg)
- [Profile](https://github.com/carrozw/foodie/blob/main/images/wireframe-profile.jpg)
- [Mobile](https://github.com/carrozw/foodie/blob/main/images/wireframe-mobile.jpg)

### Features

- Navbar
- Filter based on categories
- Sign up/Sign in/Log out


### Features left to implement

- Click on a Heart to add to "My favourites"
- Be able to share a recipe through Facebook/whatsapp and such
- Upload photo for your profile page
- Add comments on other people's recipes
- Rating
- Be able to search on ingredients
- Pagination

# Architecture

### Database Choice

- MongoDB
- On deployment, the MongoDB database provided by Heroku is a **PostgreSQL** database. 

#### Recipe app model

Within the `recipe` app, the **Recipe** model holds all the data needed.

**Recipes model**

| Name                | Type        |
| ------------------- | ------------|
| recipe_name         | string      |
| category_name       | string      |
| recipe_description  | string      |
| recipe_ingredients  | string      |
| recipe_how_to       | string      |
| created_by          | string      |
| recipe_image        | string      |

- Category choices are defined within the recipe model.

**Categories model**

| Name                | Type        |
| ------------------- | ------------|
| category_name       | string      |

**Users model**

| Name     | Type                          |
| -------- | ----------------------------- |
| username | string                        |
| password | string (pbkdf2:sha256 hashed) |


## Technologies used

### Languages
- HTML 5
- CSS3
- Python
- JavaScript

### Frameworks, Libraries and programs
- Materialize css to simplify the structure of the website and make the website responsive easily.
- Font Awesome to provide icons
- JQuery to simplify DOM manipulation.
- Draw.io to create the wireframes for this project.
- PyCharm is the IDE used for developing this project.
- Flask
- PIP for installation of tools needed in this project.
- GitHub to store and share all project code remotely.
- Heroku for deployment
- Visual Studio Code
- Google Fonts to style the website fonts.

## Testing

- https://jigsaw.w3.org/css-validator/#validate_by_input - passed
- https://webaim.org/resources/contrastchecker/ - passed (created by on card img isn't too obvious to notice, on purpose)
- https://jshint.com/ - passed


### Further/manually testing

### Different browsers

## Known bugs/ issues

 - I had trouble with the upload recipe image function. 
 after extensive search on stack overflow and such I found this video on Youtube https://www.youtube.com/watch?v=DsgAuceHha4 and I finally figured it out after many trials and errors.

- Had trouble parsing ObjectId when fetching recipe_id as it was passed in as an object and not a string.

- When editing an existing recipe, the image that was uploaded earlier disappears.

- To be able to present strings from textarea with linebreaks I stumbled upon https://stackoverflow.com/questions/18662898/jinja-render-text-in-html-preserving-line-breaks as I was having difficulties presenting it nicely when adding recipes. 

- When deleting a recipe the modal wasn't deleting the correct one. I had to send in a data-attribute to fix it.


## Media

Photo by Lukas from Pexels - cuttingboard
Photo by Arminas Raudys from Pexels - Macaroons
Photo by Valeria Boltneva from Pexels - burger
Photo by Sam Lion from Pexels - pasta Carbonara
Photo by Natalie from Pexels - cheesecake
Photo by RODNAE Productions from Pexels - noodle soup
Photo by Yash Maramangallam from Pexels - curry
Photo by Maria Orlova from Pexels - cinnamon bun
Photo by alleksana from Pexels - Lasagna
Photo by Anthony Leong from Pexels - Seafood pasta
Photo by Valeria Boltneva from Pexels - prawn coconut soup

## Deployment

### How to run this project locally
To run this project on your own IDE follow the instructions below:

Ensure you have the following tools: 
    - An IDE such as [Visual Studio Code](https://code.visualstudio.com/) or [PyCharm](https://www.jetbrains.com/pycharm/download)

The following **must be installed** on your machine:
    - [PIP](https://pip.pypa.io/en/stable/installing/)
    - [Python 3](https://www.python.org/downloads/)
    - [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

### Instructions
1. Save a copy of the github repository located at https://github.com/carrozw/foodie by clicking the "download zip" button at the top of the page and extracting the zip file to your chosen folder. If you have Git installed on your system, you can clone the repository with the following command.
    ```
    git clone https://github.com/carrozw/foodie
    ```

2. Open your preferred IDE, open a terminal session in the unzip folder or cd to the correct location.

3. If needed, Upgrade pip locally with
    ```
    pip install --upgrade pip.
    ```

4. Install all required modules with the command 
    ```
    pip -r requirements.txt.
    ```

## Heroku Deployment

To deploy Foodie to heroku, take the following steps:

1. Create a `requirements.txt` file using the terminal command `pip freeze > requirements.txt`.

2. Create a `Procfile` with the terminal command `echo web: python app.py > Procfile`.

3. `git add` and `git commit` the new requirements and Procfile and then `git push` the project to GitHub.

3. Create a new app on the [Heroku website](https://dashboard.heroku.com/apps) by clicking the "New" button in your dashboard. Give it a name and set the region to whichever is applicable for your location.

4. From the heroku dashboard of your newly created application, click on "Deploy" > "Deployment method" and select GitHub.

5. Confirm the linking of the heroku app to the correct GitHub repository.

6. In the heroku dashboard for the application, click on "Settings" > "Reveal Config Vars".

7. Set the following config vars:

| Name         | Type                          |
| ------------ | ----------------------------- |
| MONGO_DBNAME | `<your secret db name>`       |
| MONGO_URI    | `<your mongo uri>`            |
| SECRET_KEY   | `<your secret key>`           |

8. In your heroku dashboard, click "Deploy". Scroll down to "Manual Deploy", select the master branch then click "Deploy Branch".

9. Once the build is complete, click the "View app" button provided.

## Credits

### Code
-  The Data Centric Design mini-project, Task Manager, with Tim Nelson was a very good base as a starting point for my project.

### Aknowledgements
- Husband, my home tutor. What a star.
- Anna Villanueva, my mentor. She gives me valuable input and is a great support.
- Robin Bertilsson, friend of my husband. Dev wiz.