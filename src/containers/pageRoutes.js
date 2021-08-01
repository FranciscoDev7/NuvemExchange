import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import HowToUse from "../pages/HowToUse";
import HowItWorks from "../pages/HowItWorks";
import TradingEth from "../pages/TradingEth";
import TradingBnc from "../pages/TradingBnc";
import NetWork from "../pages/NetWork"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/como_utilizar" component={HowToUse} />
        <Route path="/como_funciona" component={HowItWorks} />
        <Route path="/redes" component={NetWork} />
        <Route path="/rede_eth" component={TradingEth} />
        <Route path="/rede_bnc" component={TradingBnc} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
