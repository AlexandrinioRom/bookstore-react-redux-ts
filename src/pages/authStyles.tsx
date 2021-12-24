import { ContainerHelper } from "../components/small/container"
import { FormHelper } from "../components/small/form"
import { ButtonHelper } from "../components/small/button"
import { InputHelper } from "../components/small/input"
import { TextHelper } from "../components/small/text"

import styled from "styled-components"

export const Container = styled(ContainerHelper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  height: 100vh;
`
export const Input = styled(InputHelper)`
  border: none;
  font-size: 20px;
  height: 50px;
  width: 100%;
  margin-bottom: 30px;
  border-bottom: 1px solid #b3b1b1ba;
`
export const Text = styled(TextHelper)`
  color: gray;
`
export const Button = styled(ButtonHelper)`
  display: block;
  cursor: pointer;
  margin-top: 30px;
  padding: 41px 80px;
  font-weight: 500;
	width: 100%;
  border: none;
  border-radius: 0 0 10px 10px;
	background-color: #73afba;
	color: white;
	
  &:hover{
    background-color: #4196a6;
	  transition: background-color 0.3s;
  }
`
export const Form = styled(FormHelper)`
  width: 100%;
`