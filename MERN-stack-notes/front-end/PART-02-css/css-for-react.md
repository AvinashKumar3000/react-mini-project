# web tech

![image](https://github.com/user-attachments/assets/374e7e9e-2f11-4e80-9726-bcfb52841ab2)
![image](https://github.com/user-attachments/assets/3b90b256-7161-4578-be1c-6346dfafb28d)
![image](https://github.com/user-attachments/assets/1ecb1545-0c12-4994-b74b-6873d19a3584)

## vs code shortcuts and other short cuts

![image](https://github.com/user-attachments/assets/4f53a7ac-017e-419b-92c2-369919961af2)
![image](https://github.com/user-attachments/assets/8ced5047-8719-4197-b581-d3aa71cd12d4)

## working of intenet

![image](https://github.com/user-attachments/assets/6d82a253-fecf-4832-9ae1-4ca71971a176)
![image](https://github.com/user-attachments/assets/641e2dfa-7197-4c70-9c24-d34b0c670cd4)

## DEV TOOLS

![image](https://github.com/user-attachments/assets/2ccf6a00-985f-4681-8b7b-b336591b064e)
![image](https://github.com/user-attachments/assets/8e1fbdf0-7cd4-42b0-9bb3-72b72aea3f1c)


## css

- cascading style sheet

## CSS structure

 1. selector
 2. declaration
 3. properties
 4. property value

```css
/* this is css comments */

p { /* here `p` is selector */
    color: red;
    /* color: properties */
    /* red : property value */
    /* all together called as declaration */
    background-color: black;
}
```

![image](https://github.com/user-attachments/assets/a93a71d5-5540-46da-b888-4911e55f7ced)


## declaration

- we can declare css in following ways
  - inline
  - internal
  - external

## selectors

- tag - element - type
- universal `*`
- Class      `.box`
- Id   `#id-example`
- Attribute - eg: `div[name="username"]`

- pseudo-class
  - `:hover`
  - `:first-child`
  - `:nth-child()`

- pseudo-elements
  - `::before`
  - `::after`

## user-agent style sheet

- browser created styles

## css box model

1. width
2. padding
3. border
4. margin

## basics

- background-color
- color
- box-shadow

## css layouts

- normal flow
- display
  - outer display type
    - block
    - inline
    - inline-block
  - inner diplay type
    - flex
    - grid

## text

- text-align
  - to make it center
- text-decoration
  - mostly in anchor tag
  - to remove underline
- text-transform
  - uppercase, lowercase - capitalize
- text-indent

## font

- font-size
- font-family
- font-weight
- font-style
- letter-spacing
- word-spacing

## background

- image : url
- image : linear-gradient
- color
- position
- repeat
- size

## transition

- to apply animation when transfer from one state to another state.
- eg:
  - button hover
  - button click

```css
div {
    color: orange;
    transition-duration: 2s;
    transition-delay: 0.5s;
    transition-timing-function: linear;
    transition-property: color;
}
div:hover{
    color: red;
}
```

---

### css values and units

Most frequently used units:

- px - pixel
- % - percentage
- vh - viewport height
- vw  - viewport width


### colors units

- rgba `rgba(255,255,255,0.5)`
- rgba `rgba(255,255,255)`
- hexa code `#fffff`
- color keycodes `orange`

### RWD

- flex

link:favicon

- floating:
  - float : right;
  - float : left;

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./file.css">
    <style>
        /* internal */
        p {
            color: blue;
        }
    </style>
</head>

<body>
    <p>item-01</p>
    <!-- inline styling -->
    <p style="color: tomato; background-color: black;">item-02</p>
    <p>item-03</p>
    <p>item-04</p>
    <p>item-05</p>
</body>

</html>
```
