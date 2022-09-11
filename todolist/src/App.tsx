import React from 'react';
import logo from './logo.svg';
import './App.css';
import Note, { NoteProps } from './Note/Note'
import MainAppGrid from './MainAppGrid/MainAppGrid';

function App() {

  let notes: NoteProps[] = [
    {title: "Test A", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tortor ut enim dapibus, ut volutpat est dapibus. Quisque in nibh id odio sodales tincidunt. Aliquam erat volutpat. Fusce vitae massa sit amet ipsum feugiat convallis. Nam a erat ligula. Aliquam tempus orci in metus eleifend tincidunt. Aenean suscipit fermentum elementum. Sed neque turpis, pellentesque a justo eget, sollicitudin laoreet lectus. Curabitur nec tellus ultricies, posuere neque dapibus, laoreet lectus."},
    {title: "Test B", body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus tortor ut enim dapibus, ut volutpat est dapibus. Quisque in nibh id odio sodales tincidunt. Aliquam erat volutpat. Fusce vitae massa sit amet ipsum feugiat convallis. Nam a erat ligula. Aliquam tempus orci in metus eleifend tincidunt. Aenean suscipit fermentum elementum. Sed neque turpis, pellentesque a justo eget, sollicitudin laoreet lectus. Curabitur nec tellus ultricies, posuere neque dapibus, laoreet lectus."},

  ]
  return (
    <div className="App">
      <MainAppGrid notes={notes}/>
    </div>
  );
}

export default App;
