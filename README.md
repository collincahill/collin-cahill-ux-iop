# UX Intern Onboarding Project: Collin Cahill

## Description
A UX project to get me up to speed on necessary skills and technologies I will be using on the UX team.

## How to Use
Recommended: open command line in the root of the repo and run gulp. This will run a LiveReload server on port 1820.

## Dependencies
- [Polymer](https://www.polymer-project.org/)
- [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro).

## Notes
### Unit 2
- I added a viewport meta attribute to the head of each page. This is something I've learned using Google's Page Insights that has helped my responsive pages load better on mobile.
- All pages are dummy pages. No functionality, just markup and styling. Submit buttons don't work.
  #### Standards Implemented
    - declare a lang attribute in the root element
    - declare a charset meta attribute in the head tag
    - follow semantic markup on each page
    - data stored in tables
    - accessibility measures for submission forms

### Unit 3
Unit 3 is where the project will diverge a bit from its previous iteration. Because I intend to implement Polymer for the project instead of Angular, the composition of the project is different (i.e., there is a bower_components folder).
- Because of this, my .gitignore also ignores bower_components.
  #### Standards Implemented
  - Polymer dependency
  - Dev dependencies
  - Gulpfile with LiveReload
  #### Struggles
  - Since we no longer use Angular, I wanted to install Polymer as a dependency instead of Angular. This came with a host of complications. I spent a lot of time trying to find a package on npm or even Yarn that would work, but I ended up just installing the Bower package.
    - Update: Bower package has been deleted and replaced with a Banno distribution of Polymer 2.
