# Wordpress-Plugins

## Hamburger Menu (awesome folder *didn't have time to change*)

The hamburger menu is a block that's available in wordpress editor. 

You assign the menu in by clicking on the settings tab (top right) and then choose which one you want.
Defualt is the "primary" menu, that can be changed in "awesome.php"

To add a new menu you go to wordpress dashboard, hover over "appereance" and click on "menus" there you can add a menu and you should be able to choose it in the hamburger menu after menu is saved.

It is possible to use submenus too. If there is one, then it will create a little arrow in the menu that's able to open and close.

--- 

## Tab Block

The tab block is a block that's available in the wordpress editor. 

The block contains 1 button and 1 content block as default.

To add a new button, you click on the "Tab Buttons Wrapper" and you will see a plus icon next to the already existing buttons. 

---

To add a new content block, you click on the "Tab Content Wrapper" and you will see a plus icon on the bottom right of the whole block, and a new content block should appear underneath the first one.

To add content in the content-blocks, you click on the "Tab Content" block and you will see a plus icon on the right where you can add whatever type of content you want, i.e paragraph, image etc. You can also type "/paragraph" in the block if you rather want to do that.

---

### For devs

The parent file for the tab block is "tab-block.js", that's where all of the children is being printed at. And in the "children" folder, you will find all of the child files. "tab-button" is the file where each button is being printed, and "tab-button-wrapper" is where all of the buttons are being grouped together to make it easier to style.
Same with content. "tab-content" is where each content block is printed, and "tab-content-wrapper" is where all of the content blocks are being grouped together to make it easier for styling.

"view.js" is the file where the toggle logic on the frontend is located.

## To start project

You right click on "docker-compose.yml" and click "compose-up". Then you go in the "amazing-plugins" folder and run "npm start"

Then you should be able to go "localhost:8000" and see the website. You might have to login to wordpress for the first time,
username is: admin
password is: password

