
import { Switch, Route } from 'react-router-dom'
import Detail from '../views/Detail';
import GallaryImages from '../views/Gallary';
import Home from '../views/Home';
import PageNotFound from '../views/NotFound';

function Main() {
    return (
        <div className="App-Container">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/detail' component={Detail} />
                <Route exact path='/gallary' component={GallaryImages} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default Main;
