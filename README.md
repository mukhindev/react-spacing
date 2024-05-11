# @mukhindev/react-spacing

Add margin and padding without creating a DOM-wrapper

## Install

⚠️ Dependencies: Your project need work with CSS modules.

```
npm install @mukhindev/react-spacing
```

## CSS Modules

Package components use the CSS modules without pre-processing, so you can process them to suit your build. Vite and Next.js support CSS modules.

## Example

```JavaScript
import Spacing from "@mukhindev/react-spacing";

export default function App() {
    return (
        <main>
            <Spacing m={0} mb={16}>
                <h1>Hello World!</h1>
            </Spacing>
            <Spacing p={[8, 12]}>
                <button>Greet</button>
            </Spacing>
        </main>
    )
}
```

DOM:

```html
<main>
    <h1 class="" style="">Hello World!</h1>
    <button class="" style="">Greet</button>
</main>
```

## Element requirements

The wrapped element must support `className` and `style` props.

## Props

| Prop | Spacing         | Value                  | Priority |
|------|-----------------|------------------------|----------|
| `m`  | margin          | string, number, array  | 1        |
| `mt` | margin-top      | string, number         | 2        |
| `mr` | margin-right    | string, number         | 2        |
| `mb` | margin-bottom   | string, number         | 2        |
| `ml` | margin-left     | string, number         | 2        |
| `p`  | padding         | string, number, array  | 1        |
| `pt` | padding-top     | string, number         | 2        |
| `pr` | padding-right   | string, number         | 2        |
| `pb` | padding-bottom  | string, number         | 2        |
| `pl` | padding-left    | string, number         | 2        |

## Values

`string` — no transform  
`number` — as px  
`array` — see Array values table


## Array values

Array values works with `m` and `p`

| Values             | Meaning                              |
|--------------------|--------------------------------------|
| `[42]`             | [`all`]                              |
| `[42, 42]`         | [`top and bottom`, `right and left`] |
| `[42, 42, 42]`     | [`top`, `right and left`, `bottom`]  |
| `[42, 42, 42, 42]` | [`top`, `right`, `bottom`, `left`]   |
