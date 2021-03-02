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

### Features
- 
-
-

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

- https://validator.w3.org/nu/#textarea  - not done yet
- https://jigsaw.w3.org/css-validator/#validate_by_input - not done
- https://webaim.org/resources/contrastchecker/ - not done
- https://jshint.com/ - not done



### Further/manually testing

### Different browsers

## Known bugs/ issues

 - Had trouble with the upload recipe image function. 
 after extensive search on stack overflow and such I found this video on Youtube https://www.youtube.com/watch?v=DsgAuceHha4 and I finally figured it out after many trials and errors.

- Had trouble parsing ObjectId when fetching recipe_id as it was passed in as an object and not a string.

- when editing an existing recipe, the image that was uploaded earlier disappears.

- To be able to present strings from textarea with linebreaks I stumbled upon https://stackoverflow.com/questions/18662898/jinja-render-text-in-html-preserving-line-breaks as I was having difficulties presenting it nicely when adding recipes. 

- https://stackoverflow.com/questions/16516394/filtering-data-with-check-boxes-using-jquery - Helped me with the filtering of the categories.

- when deleting a recipe the modal sometimes asks to delete the wrong recipe, not the recipe you clicked delete on that is.


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

Ensure you have the following tools: - An IDE such as Visual Studio Code

The following must be installed on your machine: - PIP - Python 3 

### Instructions

## Heroku Deployment

## Credits

### code

### Aknowledgements
- Husband
- Anna