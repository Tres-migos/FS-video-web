import logo from './logo.svg';
import { Grid } from 'semantic-ui-react'
import HeaderBar from './components/HeaderBar'
import SideNav from './components/SideNav'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Grid padded>
        <Grid.Row columns={2}>
          <Grid.Column floated='left' width={3}>
            <SideNav />
          </Grid.Column>
          <Grid.Column width={12}>
            <Home />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
