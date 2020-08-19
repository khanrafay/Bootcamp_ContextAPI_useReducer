import React, { Component } from 'react';
import { Child } from './Child';
import { Child2 } from './Child2';

export function Parent() {
    return (
        <div>
            <h1>Hello from parent</h1>
            <Child />
            <br />
            <Child2 />
        </div>
    )
}