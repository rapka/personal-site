import React from 'react';
import { Link } from 'gatsby';

function NotFoundPage() {
  return (
    <main>
      <title>Not found</title>
      <h1>404!</h1>
      <p>
        Sorry, page not found :(
        <Link to="/">Back to the homepage</Link>
      </p>
    </main>
  );
}

export default NotFoundPage;
