# HTML TAGS

## Basic HTML Tags

- `<!DOCTYPE>` declaration, which specifies the document type and version of HTML being used.
- `<html>` structure tags
- `<head>` structure tags
- `<body>` structure tags
- `<title>` HTML page document title. Displayed title on top of webpage.
- `<h1> to <h6>` headings and subheadings within the document
- `<br/>` line break
- `<hr>`  horizontal line
- `<!-- -->` HTML comments

### Formatting Tags

- `<pre>` tag in HTML stands for "**preformatted text**"
- `<sub>` sub script
- `<sup>` super script
- `<strong>` make text bold
- `<code>` write codes

### Forms and Input

- `<form>`
- `<input>`
- `<label>`
- `<textarea>`
- `<select>`
- `<optgroup>`
- `<option>`
- `<datalist>`
- `<button>`
- `<fieldset>` to create a outline
- `<legend>` to give title for above 👆 fieldset

### list

- `<ul>` un ordered list
- `<ol>` ordered list
- `<li>` list

### Frame

- `iframe`

### images

- `img` image
- `canvas` drawing shapes
- `svg` support vector graphics

### audio / video

- `audio`
- `video`
- `source`

### tables

- `table`
- `caption`
- `thead`
- `tbody`
- `tfoot`
- `th`
- `td` table data
- `tr` table row
- `col` column
- `colgroup` column group

### semantics

- 🏷️
Semantic HTML tags are used to provide meaning and structure to the content of a webpage. They help both browsers and developers understand the purpose and context of different sections of the page.
- `main`
- `header`
- `section`
- `footer`
- `aside`
- `nav`
- 👇Difference between div and span
- `div` tag is a block-level element used to group together other HTML elements into sections or divisions of a web page
- `span` tag is an inline-level element used to apply styles or manipulate portions of text within a larger block of content. it is used to apply styling or scripting to a specific part of the text, such as changing its color, font, or applying other inline styles.

### Script tags

- `<script>` to include and write `JS` codes
- `<noscript>` to display if `JS` is disabled in browser

---

### ATTRIBUTES

### Global attributes

- `id`
- `class`
- `style` to apply inline style
- `contenteditable` make html content editable
- `hidden` make a tag invisible
- `title` a description about a tag. which will be shown as pop on hover.

### Event attributes

- `onchange` The **onchange** event occurs when the value of an input element, such as a text field, dropdown list, or checkbox, is changed by the user and then loses focus. It is commonly used to trigger actions or validations when the user makes a selection or input.
- `onload` The **onload** event occurs when a webpage and all its external resources ***(such as images, scripts, and stylesheets)*** have finished loading in the browser window. It is often used to initialize scripts, perform actions once the page is fully rendered, or dynamically modify page elements.
- `onpagehide`  The onpagehide event is triggered when the current webpage is about to be hidden or unloaded, such as when the user navigates to another page or closes the browser tab/window. It can be used to perform cleanup tasks or save the current state before the page is hidden or unloaded.
- `onpageshow` The onpageshow event is the counterpart of onpagehide. It occurs when a hidden webpage is about to be shown or reloaded, such as when the user navigates back to the page or restores a closed tab/window. It can be used to reinitialize scripts or restore the previous state of the page.
- `onunload` The onunload event occurs when the current webpage is about to be unloaded, either by navigating to another page, closing the browser tab/window, or reloading the page. It is commonly used to prompt the user for confirmation before leaving the page or to perform cleanup tasks, such as releasing resources or saving data.
