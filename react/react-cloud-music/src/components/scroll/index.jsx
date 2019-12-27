import React from 'react'
import BScroll from 'better-scroll'
import styled from 'styled-components';
import { useEffect, useRef } from 'react'
import {
  Content
} from './style.js'
const ScrollContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
`
export default function (props) {
  // React.createRef ref
  const scrollContainerRef = useRef();
  // didMount didupdate unMount
  useEffect(() => {
    const scroll = new BScroll(
      scrollContainerRef.current,
      {

      }
    )
  })
  return (
    <Content>
      <ScrollContainer ref={scrollContainerRef}>
        {
          props.children
        }
      </ScrollContainer>
    </Content>
  )
}