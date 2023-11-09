import React from "react";

const Resources = {
  JavaScript: [
    { name: "Eloquent JS", url: "https://eloquentjavascript.net/" },
    {
      name: "JS Allonge",
      url: "https://leanpub.com/javascriptallongesix/read",
    },
    {
      name: "YDKJS",
      url: "https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/README.md",
    },
    { name: "JS Info", url: "https://javascript.info/" },
    {
      name: "JS CheatSheet",
      url: "https://github.com/mbeaudru/modern-js-cheatsheet?utm_source=hackernewsletter&utm_medium=email&utm_term=code",
    },
  ],
  HTML: [
    { name: "HTML.com", url: "https://html.com/" },
    {
      name: "HTML MDN",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
  ],
  CSS: [{ name: "CSS Tricks", url: "https://css-tricks.com/" }],
  Others: [
    {
      name: "FrontEnd Handbook",
      url: "https://frontendmasters.com/books/front-end-handbook/2019/",
    },
    { name: "Dev Hints", url: "https://devhints.io/" },
    { name: "GraphQL", url: "https://graphql.org/" },
    { name: "Free for Dev", url: "https://free-for.dev/#/?id=docker-related" },
  ],
  DS: [{ name: "text", url: "" }],
};

const MyFavLearnResource = () => {
  return (
    <div>
      <p>JavaScript</p>
      <ul>
        {Resources.JavaScript.map((e, i) => (
          <li key={i}>
            <a rel="noreferrer" target="_blank" href={e.url}>
              {e.name}
            </a>
          </li>
        ))}
      </ul>
      <p>HTML</p>
      <ul>
        {Resources.HTML.map((e, i) => (
          <li key={i}>
            <a rel="noreferrer" target="_blank" href={e.url}>
              {e.name}
            </a>
          </li>
        ))}
      </ul>
      <p>CSS</p>
      <ul>
        {Resources.CSS.map((e, i) => (
          <li key={i}>
            <a rel="noreferrer" target="_blank" href={e.url}>
              {e.name}
            </a>
          </li>
        ))}
      </ul>
      <p>Web development - others</p>
      <ul>
        {Resources.Others.map((e, i) => (
          <li key={i}>
            <a rel="noreferrer" target="_blank" href={e.url}>
              {e.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFavLearnResource;
