import React from 'react'


import { Wrapper, Content } from './MovieInfoBar.styles'

//Utils

import {calcTime, convertMoney   } from "../../helpers"

type Props = {
   time:number;
   budget:number;
   revenue:number;
}

const MovieInfoBar:React.FC<Props> = ({time,budget,revenue}) => (
   <Wrapper>
      <Content>
         <div className="column">
            <p>Running time: {calcTime(time)}</p>
         </div>
         <div className="column">
            <p>Budget: {budget?convertMoney(budget):"Unknown"}</p>
         </div>
         <div className="column">
            <p>Revenue: {revenue?convertMoney(revenue):"Unknown"}</p>
         </div>
      </Content>
   </Wrapper>
)



export default MovieInfoBar
