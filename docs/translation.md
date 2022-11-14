<div align="center" style="margin-top: 5px; margin-bottom: 10px;">
  <h1>Publishing/editing a translation</h1>
</div>

This guide describes the syntax that the markdown files hosting the translations of _Plurality: Technology for Collaborative Diversity and Democracy_ support.

## Supported syntax

#### Chapter Outline

```
<ol id="chapter-outline-structure">
  <li>
    <h1>{ heading }</h1>
    <p>{ description }</p>
  </li>
  <li>
    <h1>{ heading }</h1>
    <ol>
      <li>
       { list element }
      </li>
      <li>
        { list element }
      </li>
    </ol>
  </li>
</ol>
```

#### Headings

```
Text following #, ##, and ### tags render as uppercase text in the Lanapixel type, and their slugs are used to create the anchor links for the table of contents.
```

#### Paragraphs

```
Text following a blank line renders as text in the Authentic Sans type.
```

#### Lists

```
Text following a - renders as a list item in the Authentic Sans type.
```

#### Links

```
Text following the [link text](link url) pattern renders as a link in the Authentic Sans type.
```

#### Italicised centre Text

```
<div class="centre-text">
  <p>{ text }<p>
</div>
```

## YAML Front Matter

```
---
title: <title>
githubLink: <link to the file, hosted on GitHub>
dateStartedString: { day: <day>, month: <month>, year: <year> }
translations:
  {
    plurality: <plurality translation>,
    subtitle: <subtitle translation>,
    authorsLead: <translation of the sentence introducing the authors, including the names of the authors>,
    translatorsLead: <translation of the text preceding the list of translators, i.e "Translated by">,
    return: <translation of a word indicating "return to previous page">,
    chapters: <translation of a word indicating "chapters">,
  }
language: { en: <language in english>, iso6392B: <language in iso 639-2B>, locale: <language in language of translations> }
translators: [<translators, comma-delineated>]
---
```
