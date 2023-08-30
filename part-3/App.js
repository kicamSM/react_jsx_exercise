const App = () => (
    <div>
    <Person name="JohnJacobs" age={21} hobbies={['Roller Derby', 'Backpacking', 'Camping']} />
    <Person name="Harry" age={17} hobbies={['Geology', 'Farming', 'Camping']} />
    <Person name="Flamingo" age={45} hobbies={['Water Sports', 'Swimming', 'Camping']} />
    </div>
    
  )
  
  
  
  ReactDOM.render(<App />, document.getElementById("root"))