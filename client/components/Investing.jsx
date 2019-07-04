import React from 'react'

class Investing extends React.Component {
  render () {
    return (
  <React.Fragment>
    <div className="content">
      <h2>Investing</h2>
      <br></br>
        <p id="quote"><i>"It's not timing the market, it's time in the market"</i></p>

        <p>Investing can sound intimidating and there is a misconception that investing is hard. Investing is simply putting your money into assets that can earn income or grow in value. However, before you start investing I recommend that you've paid off any consumer debt/personal debt such as credit cards or overdrafts, joined KiwiSaver and have an emergency fund saved of 3-6 months income. Only once you've done this are you then in a position to start investing. 

        Before investing you need to work out how long you can leave the money in an investment or how long it is before you will need to use that money. Are you investing to save for retirement or are you investing to save for a home deposit? Think about your financial goals first and this will help you develop an investment strategy. 
        
        The below graph can help to decide where to invest your money. Please note this graph is for general advice only and everyone's situation is different.</p>   
       
        <img className="graph" src="./images/investing.png" alt="Where to invest your money"></img>
        
        <p>Okay, so you've paid down your debt, decided on your investing timeline and have a rough plan of what to invest in (shares, term deposits etc). Now what? There seems to be so many investment choices out there that it can seem overwhelming! To help you navigate where to invest your money I recommend <a href="https://thesmartandlazy.com/2017/03/31/where-to-invest-your-money-in-new-zealand-part-2/" id="nav-link">this</a> article by The Smart and Lazy. When I started researching investing options in New Zealand I found the Smart and Lazy blog really useful. 
        
        Another tip is to invest in passively managed index funds. Warren Buffet has called index funds "the most sensible equity investment" and <a href="https://www.businessinsider.com/how-to-start-investing/?r=AU&IR=T" id="nav-link">this</a>article goes into more detail about index funds. Index funds are broadly diversified and they are low-cost. They have also historically outperformed actively managed funds. For example, in Australia, over the last five years, active share market funds failed to beat the index 69% of the time. In Europe, over 10 years, active fund managers have failed to beat the index 74-98% of the time, depending on the asset class they are managing. In the US, over 10 years they failed 67-95% of the time, depending on asset class.</p>
        
      <h2>Investment Options in New Zealand</h2>
        <p>So how do you invest in New Zealand? <a href="https://thesmartandlazy.com/2017/06/13/smartshares-superlife-simplicity-investnow-etf-index-fund-investing-in-new-zealand/" id="nav-link">This</a> was one of the first articles I read and it gives a very good breakdown of some of the investment platforms available in New Zealand, which are SmartShares, SuperLife, Simplicity and InvestNow. I would consider what index funds are available on each platform and more importantly, what the management fees are for each fund and platform. After looking into SmartShares, SuperLife, Simplicity and InvestNow, I have used InvestNow to buy shares due to having no admin fees and allowing investors direct access to Vanguard index funds. </p>
    </div> 
  </React.Fragment>
    )
  }
}

export default Investing