import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import CardCredencial from "./CardCredencial";
import Menuc from "./Header";





function Routes(){
  
   
  
    return (
            <BrowserRouter>
            <Menuc></Menuc>
                                <Switch>
                        <Route path="/credencial/:id">
                        
                            <div>
                             <CardCredencial></CardCredencial>
                               
                            </div>

                    </Route>
                    <Route path="/">

                        <div>
                                estou na home
                        </div>
                    </Route>

                </Switch>
            
            </BrowserRouter>

    )

}



export default Routes;