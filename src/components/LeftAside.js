import React from "react";

export default function LeftAside() {
  return (
    <>
      <aside className="col">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/flight">
              The Flight
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/city">
              The City
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/island">
              The Island
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/food">
              The Food
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
