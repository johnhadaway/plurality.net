<div align="center" style="margin-top: 5px; margin-bottom: 10px;">
  <a href="plurality.net"><img alt="Plurality.net landing" src="./docs/img/plurality-landing.gif" width="60%"></a>
  <h1>Welcome to Plurality.net!</h1>
</div>

This is the repository of plurality.net, the website hosting _Plurality: Technology for Collaborative Diversity and Democracy_, a book written by Audrey Tang and E. Glen Weyl. Its goal is to provide a place for people to learn about ideas in the book, as well as to welcome -- and eventually manage -- participation from the community.

## Contributing

## Design System

## Codebase

#### Stack

The site is built on Eleventy/11ty, and primarily uses Nunjucks for templating.

#### Structure

The code layout is heavily influenced by that of the RadicalxChange website ((repo)[https://github.com/RadicalxChange/www]), as it exists in 10/2022. Important facets of the codebase's structure are described below:

- 'src/site' contains the source code for the site, which is compiled into the 'dist' folder.
- 'src/site/\_includes' contains reusable material, and is divided into the following sub-folders: 'js', 'macros', 'css', 'layouts', and 'partials'.
- 'src/site/\_includes/macros' contains reusable Nunjucks macros, and 'src/site/\_includes/js' contains reusable JavaScript code. These are used to generate layouts ('src/site/\_includes/layouts') and partials ('src/site/\_includes/partials'), and are the building blocks of the site.
- 'src/site/\_includes/css' contains CSS code, split roughly into .css files that correspond to the different layouts and reusable components of the site. The CSS is compiled into a single 'main.css' file, containing root variables, which is then minified and copied into the 'dist' folder.
