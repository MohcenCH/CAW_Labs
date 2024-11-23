import React, { useState } from 'react';

function ClickMeButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(true)}>ClickMe</button>
      {clicked && <p>Clicked</p>}
    </div>
  );
}

function ToggleButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <button onClick={() => setClicked(!clicked)}>ClickMe</button>
      <p>{clicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
}

function AppWithButtons() {
  const [message, setMessage] = useState('');

  return (
    <div>
      <button onClick={() => setMessage('Button #1 was clicked')}>Button1</button>
      <button onClick={() => setMessage('Button #2 was clicked')}>Button2</button>
      <button onClick={() => setMessage('Button #3 was clicked')}>Button3</button>
      <p>{message}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

function DisplayTab({ tab }) {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function DisplayTabWithIndices({ tab }) {
  return (
    <ul>
      {tab.map((item, index) => (
        <li key={index}>Element {index + 1} is: {item}</li>
      ))}
    </ul>
  );
}

function DisplayTabWithRemove({ tab }) {
  const [items, setItems] = useState(tab);

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleRemove(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function AppWithTabs() {
  const tab1 = ['hello', 'world', 'from', 'react'];
  const tab2 = ['react', 'is', 'fun'];

  return (
    <div>
      <DisplayTabWithRemove tab={tab1} />
      <DisplayTabWithRemove tab={tab2} />
    </div>
  );
}

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function UserListWithDelete() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, username]);
    setUsername('');
  };

  const handleDelete = (indexToRemove) => {
    setUsers(users.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AddDivForm() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivs([...divs, { height, width, color }]);
    setHeight('');
    setWidth('');
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type="text"
          placeholder="Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Add Div</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: `${div.height}px`,
              width: `${div.width}px`,
              backgroundColor: div.color,
              margin: '10px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Exercise 1</h2>
      <ClickMeButton />
      <ToggleButton />
      <AppWithButtons />
      <Counter />

      <h2>Exercise 2</h2>
      <AppWithTabs />

      <h2>Exercise 3</h2>
      <AuthForm />
      <UserListWithDelete />

      <h2>Exercise 4</h2>
      <AddDivForm />
    </div>
  );
}

export default App;
