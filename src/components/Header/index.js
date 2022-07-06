import React from 'react';

export default function Header({ children }) {
  return (
    <header className="Header">
      <h1 className="Header-title">title</h1>
      <h2 className="Header-job-title">job</h2>
      {children}
      <address></address>
    </header>
  );
}
