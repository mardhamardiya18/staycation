import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Button from '.'

test("Button tidak bisa diklik jika isDisabled ada", () => {
    const {container}   = render(<Button isDisabled></Button>)

    expect(container.querySelector("span.disabled")).toBeInTheDocument()
})

test("Harus render loading/spiner", () => {
    const {container, getByText}   = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector("span")).toBeInTheDocument()
})

test("Harus render <a> tag", () => {
    const {container}   = render(<Button type='link' isExternal></Button>)


    expect(container.querySelector("a")).toBeInTheDocument()
})

test("Harus render <Link> component", () => {
    const {container}   = render(<Router><Button href='' type='link' isExternal></Button></Router>)

    
    expect(container.querySelector("a")).toBeInTheDocument()
})