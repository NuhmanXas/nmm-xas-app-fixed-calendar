
# React Fixed Calendar

A customizable React calendar component that wraps the `react-calendar` library with styled-components for easy styling and integration into React projects.

## Features

- Easy integration with React projects.
- Customizable styles via styled-components.
- Optional enabling/disabling of dates before today.

## Installation

First, you need to install the component along with its peer dependencies. Run the following command in your project directory:

```sh
npm install react-fixed-calendar react-calendar styled-components
```

Ensure you have `react` installed in your project, as it is a peer dependency of this component.

## Usage

Here's a quick guide to get you started with the React Fixed Calendar component in your application.

### 1. Import the Component

First, import the `AppFixedCalendar` component wherever you need it:

```jsx
import AppFixedCalendar from 'react-fixed-calendar';
```

### 2. Using the Component

You can use `AppFixedCalendar` like any other React component. Here's a simple example:

```jsx
import React, { useState } from 'react';
import AppFixedCalendar from 'react-fixed-calendar';

function MyComponent() {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppFixedCalendar value={date} setValue={setDate} />
        </div>
    );
}
```

### Component Props

- `value` (Date): The current selected date. Default is today's date.
- `setValue` (Function): A callback function that updates the state with the new date.
- `isEnablePreviouseDate` (Boolean): If true, allows selection of dates before today. Default is `true`.

## Styling

The component utilizes `styled-components` for styling. You can easily override the default styles by wrapping the `AppFixedCalendar` in your styled component.

