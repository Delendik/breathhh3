import { Link } from '@reach/router'
import styled from 'styled-components'

import { yahhtUrl } from 'src/utils/config'

import iconUrl from './assets/yahht-emblem.svg'

const Wrap = styled.footer`
  padding-right: 20px;
  padding-left: 20px;
`

const Root = styled.div`
  max-width: 860px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 35px;
  padding-bottom: 35px;
  border-top: 1px solid #eeeeee;

  & a {
    color: inherit;
    text-decoration: none;
  }
`

const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Slot = styled.div`
  display: grid;
  gap: 10px;
`

const Badge = styled.a`
  display: flex;
`

const BadgeImage = styled.span`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  background: url(${iconUrl}) 0 0 / cover no-repeat;
`

const CurrentAction = styled.div`
  color: hsla(16, 97%, 64%, 1);
`

export const Footer: React.FC = () => {
  return (
    <Wrap>
      <Root>
        <Inner>
          <Slot>
            <Badge href={yahhtUrl} target="_blank" rel="noreferrer">
              <BadgeImage />
              <span>
                <span>Developed by Yahht</span>
              </span>
            </Badge>

            <div>© 2021 Breathhh, All rights reserved</div>
          </Slot>
          <Slot>
            <div>
              <Link to="/terms_of_use">Terms of Use</Link>
            </div>
            <div>
              <Link to="/privacy_policy">Privacy Policy</Link>
            </div>
          </Slot>
          <Slot>
            <Link to="/contacts">Contacts</Link>
            <CurrentAction>Currently in Alpha</CurrentAction>
          </Slot>
        </Inner>
      </Root>
    </Wrap>
  )
}