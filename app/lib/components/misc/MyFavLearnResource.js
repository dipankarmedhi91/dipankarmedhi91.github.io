import React from "react";

const Resources = {
  JavaScript: [
    { name: "JavaScript Info", url: "https://javascript.info/" },
    { name: "Eloquent JS", url: "https://eloquentjavascript.net/" },
    {
      name: "JS CheatSheet",
      url: "https://github.com/mbeaudru/modern-js-cheatsheet?utm_source=hackernewsletter&utm_medium=email&utm_term=code",
    },
    { name: "HTML.com", url: "https://html.com/" },
    { name: "CSS Tricks", url: "https://css-tricks.com/" },
    {
      name: "CSS Selectors Guide",
      url: "https://fffuel.co/css-selectors/?utm_source=hackernewsletter&utm_medium=email&utm_term=design",
    },
  ],
  Others: [
    { name: "GraphQL", url: "https://graphql.org/" },
    { name: "Free for Dev", url: "https://free-for.dev/#/?id=docker-related" },
    { name: "True pkg-size", url: "https://pkg-size.dev/" },
    { name: "Git Book", url: "https://git-scm.com/book/en/v2" },
  ],
  DS: [{ name: "text", url: "" }],
};

const MyFavLearnResource = () => {
  return (
    <div>
      <p>Web Development</p>
      <ul>
        {Resources.JavaScript.map((e, i) => (
          <li key={i}>
            <a rel="noreferrer" target="_blank" href={e.url}>
              {e.name}
            </a>
          </li>
        ))}
      </ul>
      <p>Miscellaneous</p>
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
