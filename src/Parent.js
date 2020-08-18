import React, { Component } from 'react';
import {Child} from './Child';

export function Parent() {
    return (
        <div>
            <h1>Hello from parent</h1>
            <Child />
        </div>
    )
}