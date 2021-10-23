import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Project from '~/pages/project/Project';
import Login from '~/pages/login/Login';
import Main from '~/pages/main/Main';
import { QueryClientProvider, QueryClient } from 'react-query';
import MatchDetail from './pages/match/MatchDetail';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <Route path="/project/list" exact component={Project} />
                    <Route path="/match/:id" exact component={MatchDetail} />
                    <Route path="/" exact component={Main} />
                </Switch>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
