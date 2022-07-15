import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Global,css } from "@emotion/react";

const Navigation = ({ children }) => {
    return (
      <>
      <Global  styles={css`
          body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }
        `}/>
        <Nav>
          <Link href="/">
            <a>Hunter</a>
          </Link>
          <Link href="/form">
            <a>Feedback</a>
          </Link>
        </Nav>
        <PageBody>{children}</PageBody>
      </>
    )
  }
  
  export default Navigation

  export const Nav = styled.div`
  & > * {
    margin-left: 1em;
    color: grey;
  }
  padding: 1em;
  height: 2em;
  display: flex;
  align-items: center;
`
export const PageBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
  `
