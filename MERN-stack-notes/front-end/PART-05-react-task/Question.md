# All react task questions are here

## ARRAY TASK

- 1 component
- 1 state, where default value is `[]`. 💡 state of array type.
- 1 function named `handleClick()`
  - `🏷️ todo:` add a string `new item` in above array state
- output should look like below.

![image](https://github.com/user-attachments/assets/e6c9e965-ca26-452a-bead-2b917dec3f99)

---

## input task

- 1 component
- 2 state, where default value is `""`. 💡 state of string type.
- return statement has 2 input tags.
- below is html code for one input tag.
- where u have use `onChange=` event to update the state.

```js
 <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
```

- output should look like below.
![image](https://github.com/user-attachments/assets/506cbdaf-a21a-4416-ad5a-7bb9f51622c1)

---

## login task

- 2 components
  1. `HomePage`, which will return only `<h1>HomePage</h1>`
  2. `LoginPage`,
- your work is to create a login page.
- where if username is `admin`
- and its password is `admin` then only render homepage.
- else display alert message `wrong credentials`

💡 notes:
        3 states,
           - username `string`, password `string`, auth `boolean`
        1 function `handleSubmit`
            - check if both input is `admin` if so.
            - set auth state to `true`
            - else. alert `wrong credentials`
        in `LoginPage` component.
        you have to return based on condition.

```javascript

if(auth) {
    return <HomePage />; 
}else{
    return (<></>);
}
```

---
