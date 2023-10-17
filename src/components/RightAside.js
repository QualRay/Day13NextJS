import React from "react";

export default function RightAside() {
  return (
    <>
      <aside className="col">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              What ?
            </a>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Where ?
            </a>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable.
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Who ?
            </a>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. 
            </p>
          </li>
        </ul>
      </aside>
    </>
  );
}
