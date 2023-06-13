import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import SubjectView from './views/SubjectView';
import ShowSubjectDiagramView from './views/ShowSubjectDiagramView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

/**
 * Root Application
 * @returns HTML for the Root Application
 */
const App = () => {

  // //// OUTPUT ///////////////////////////////////
  return (
    <BrowserRouter>
      <Switch >
        {/* **** Show Subject Diagram View ******** */}
        <Route path="/subject/:id/diagram">
          <ShowSubjectDiagramView />
        </Route>
        {/* **** Subject View ******** */}
        <Route path="/subject/:id">
          <SubjectView />
        </Route>
        {/* **** Home View ******** */}
        <Route exact path="/">
          <div className='bg'>
            <HomeView />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;