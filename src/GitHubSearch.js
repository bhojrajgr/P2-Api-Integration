import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GitHubSearch() {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    if (debounceTimer) clearTimeout(debounceTimer);

    const timer = setTimeout(() => {
      setLoading(true);
      setError('');
      axios
        .get(`https://api.github.com/search/users?q=${query}`)
        .then((res) => setUsers(res.data.items))
        .catch((err) => setError('Failed to fetch data.'))
        .finally(() => setLoading(false));
    }, 600);

    setDebounceTimer(timer);
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      {/* <h2>GitHub User Search</h2> */}
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '15px' }}>
            <img src={user.avatar_url} alt={user.login} width={50} style={{ borderRadius: '50%' }} />
            <a href={user.html_url} target="_blank" rel="noreferrer" style={{ marginLeft: '10px' }}>
              {user.login}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubSearch;
