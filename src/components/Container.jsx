/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React from 'react';
import {css} from "@emotion/react";
import {bpMaxSM, bpMaxMD} from "../lib/breakpoints";

const Container = (props) => {
    const {
        maxWidth = 720,
        noHorizontalPadding = false,
        noVerticalPadding = false,
        ...restProps
    } = props
    const fullMaxWidth = Number.isNaN(Number(maxWidth))
        ? maxWidth
        : `${maxWidth + (noHorizontalPadding ? 0 : 80)}px`

    return (
        <div
            css={css`
              width: 100%;
              margin: 0 auto;
              max-width: ${fullMaxWidth};
              padding: ${noVerticalPadding ? 0 : '40'}px ${noHorizontalPadding ? 0 : '40'}px;

              ${bpMaxSM} {
                padding: ${noVerticalPadding ? 0 : '20'}px ${noHorizontalPadding ? 0 : '20'}px;
                width: 80%;
              }
              
          
              
            `}
            {...restProps}
        >
            {props.children}
        </div>
    )
};

export default Container;