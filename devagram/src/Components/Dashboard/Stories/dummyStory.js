import React from "react";

export const stories = [
  {
    userId: 1,
    isSeen: false,
    author: "Manan",
    authorProfile:
      "https://avatars2.githubusercontent.com/u/52067783?s=460&u=212f06bdac348e4ac59204857029ed7d27a2466b&v=4",
    stories: [
      {
        id: 1,
        url: "https://picsum.photos/1080/1920",
        type: "image",
        userId: 1,
        header: {
          heading: "Manan",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars2.githubusercontent.com/u/52067783?s=460&u=212f06bdac348e4ac59204857029ed7d27a2466b&v=4",
        },
      },
      {
        id: 2,
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
        userId: 1,
        header: {
          heading: "Manan",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars2.githubusercontent.com/u/52067783?s=460&u=212f06bdac348e4ac59204857029ed7d27a2466b&v=4",
        },
      },
      {
        id: 3,
        header: {
          heading: "Manan",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars2.githubusercontent.com/u/52067783?s=460&u=212f06bdac348e4ac59204857029ed7d27a2466b&v=4",
        },
        content: ({ action, isPaused }) => {
          return (
            <div style={contentStyle}>
              <h1>Hello, Manan here</h1>

              <pre>
                <code style={code}>console.log('Hello, world!')</code>
              </pre>
              <p>Or here, an image!</p>
              <br />
              <img
                style={image}
                src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt="story"
              ></img>
              <h3>Perfect. But there's more! →</h3>
            </div>
          );
        },
        userId: 1,
      },
    ],
  },
  {
    userId: 2,
    isSeen: false,
    author: "DKP",
    authorProfile:
      "https://avatars0.githubusercontent.com/u/39042169?s=100&v=4",
    stories: [
      {
        id: 1,
        url: "https://picsum.photos/1080/1920",
        type: "image",
        userId: 2,
        header: {
          heading: "DKP",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars0.githubusercontent.com/u/39042169?s=100&v=4",
        },
      },
      {
        id: 2,
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
        userId: 2,
        header: {
          heading: "DKP",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars0.githubusercontent.com/u/39042169?s=100&v=4",
        },
      },
      {
        id: 3,
        header: {
          heading: "DKP",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars0.githubusercontent.com/u/39042169?s=100&v=4",
        },
        content: ({ action, isPaused }) => {
          return (
            <div style={contentStyle}>
              <h1>Hello, DKP here</h1>
              <pre>
                <code style={code}>console.log('Hello, world!')</code>
              </pre>
              <p>Or here, an image!</p>
              <br />
              <img
                style={image}
                src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt="story"
              ></img>
              <h3>Perfect. But there's more! →</h3>
            </div>
          );
        },
        userId: 2,
      },
    ],
  },
  {
    userId: 3,
    isSeen: true,
    author: "John",
    authorProfile:
      "https://avatars1.githubusercontent.com/u/43730525?s=100&v=4",
    stories: [
      {
        id: 1,
        url: "https://picsum.photos/1080/1920",
        type: "image",
        userId: 3,
        header: {
          heading: "JOHN",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars1.githubusercontent.com/u/43730525?s=100&v=4",
        },
      },
      {
        id: 2,
        url:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        type: "video",
        userId: 3,
        header: {
          heading: "JOHN",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars1.githubusercontent.com/u/43730525?s=100&v=4",
        },
      },
      {
        id: 3,
        header: {
          heading: "JOHN",
          subheading: "Posted 30m ago",
          profileImage:
            "https://avatars1.githubusercontent.com/u/43730525?s=100&v=4",
        },
        content: ({ action, isPaused }) => {
          return (
            <div style={contentStyle}>
              <h1>Hello, John here</h1>

              <pre>
                <code style={code}>console.log('Hello, world!')</code>
              </pre>
              <p>Or here, an image!</p>
              <br />
              <img
                style={image}
                src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt="story"
              ></img>
              <h3>Perfect. But there's more! →</h3>
            </div>
          );
        },
        userId: 3,
      },
    ],
  },
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "salmon",
  width: "100%",
  padding: 20,
  color: "white",
};
