# HTML BASICS

## Whitespace

- HTML ignores  extra whitespace (spaces, tabs, line breaks) between elements.
- Proper indentation and formatting are used for readability and maintainability.

## Validation

- Browser won't through error while executing in browser.
- But make sure to write everything eat and clean.

---

## HTML ( REACT )

To start learning React, it's important to have a solid understanding of basic HTML tags. Here are the key HTML tags that you should be familiar with:

---

### Structural Tags

- `<html>`: The root element of an HTML
document.
- `<head>`: Contains metadata, links to CSS, and other resources.
- `<body>`: Contains the content of the HTML document.

### Content Sectioning

- `<header>`: Represents introductory content, typically a group of introductory or navigational aids.
- `<nav>`: Contains navigation links.
- `<main>`: The main content of the document.
- `<section>`: A thematic grouping of content.
- `<article>`: A self-contained composition.
- `<aside>`: Content indirectly related to the main content.
- `<footer>`: Represents the footer of the document or a section.

### Text Content

- `<h1>` to - `<h6>`: Heading tags, `<h1>` being the highest and `<h6>` the lowest level.
- `<p>`: Paragraph.
- `<span>`: Inline container for text, used for styling purposes.
- `<div>`: Block-level container, often used to group elements for styling.

### Inline Text Semantics

- `<a>`: Anchor tag for hyperlinks.
- `<em>`: Emphasized text (usually italic).
- `<strong>`: Strong importance (usually bold).
- `<br>`: Line break.
- `<code>`: Represents a fragment of computer code.
- `<pre>`: Preformatted text.

### Image and Multimedia

- `<img>`: Embeds an image.
- `<audio>`: Embeds sound content.
- `<video>`: Embeds video content.

### Embedded Content

- `<iframe>`: Embeds another HTML document within the current document.

### List Content

- `<ul>`: Unordered list.
- `<ol>`: Ordered list.
- `<li>`: List item.
- `<dl>`: Description list.
- `<dt>`: Term/name in a description list.
- `<dd>`: Description of the term/name.

### Table Content

- `<table>`: Defines a table.
- `<thead>`: Groups header content in a table.
- `<tbody>`: Groups body content in a table.
- `<tr>`: Table row.
- `<th>`: Table header cell.
- `<td>`: Table data cell.

### Form Elements

- `<form>`: Represents a document section that contains interactive controls to submit information.
- `<input>`: Input control.
- `<label>`: Label for an `<input>` element.
- `<textarea>`: Multi-line text input control.
- `<button>`: Button control.
- `<select>`: Drop-down list.
- `<option>`: Option in a `<select>` element.

### Interactive Elements

- `<details>`: Represents a disclosure widget from which the user can obtain additional information.
- `<summary>`: Summary, caption, or legend for a `<details>`element.

### `code examples`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Structure</title>
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home</h2>
            <p>This is the home section.</p>
        </section>
        <section id="about">
            <h2>About</h2>
            <p>This is the about section.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
```
