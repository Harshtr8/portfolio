import React, { useEffect } from "react";
import "./blog.css";

const Blog = () => {
  useEffect(() => {
    // Load Twitter widget script once
    if (!document.querySelector("script[src='https://platform.twitter.com/widgets.js']")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://platform.twitter.com/widgets.js";
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }, []);

  const blogPosts = [
    {
      category: "Tutorial",
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7169332296171343873",
    },
    {
      category: "Tutorial",
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7160042740603408384",
    },
    {
      category: "Tutorial",
      iframeSrc: "https://www.linkedin.com/embed/feed/update/urn:li:share:7160027124941160448",
    },
  ];

  const twitterPosts = [
    {
      category: "Tutorial",
      tweetHtml: `
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">Current Scenario Of Oppo managing Oneplus &amp; Realme.
          <a href="https://twitter.com/hashtag/Android?src=hash&amp;ref_src=twsrc%5Etfw">#Android</a>
          <a href="https://twitter.com/hashtag/OnePlus?src=hash&amp;ref_src=twsrc%5Etfw">#OnePlus</a>
          <a href="https://twitter.com/hashtag/OPPO?src=hash&amp;ref_src=twsrc%5Etfw">#OPPO</a>
          <a href="https://t.co/poTx70T4f6">pic.twitter.com/poTx70T4f6</a></p>
          &mdash; Harsh Tripathi (@Harshtr8)
          <a href="https://twitter.com/Harshtr8/status/1488047608576679939?ref_src=twsrc%5Etfw">January 31, 2022</a>
        </blockquote>
      `,
    },
    {
      category: "Tutorial",
      tweetHtml: `
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">🌐 Introducing ChatGPT search 🌐<br><br>
          ChatGPT can now search the web in a much better way than before so you get fast, timely answers with links to relevant web sources.
          <a href="https://t.co/7yilNgqH9T">https://t.co/7yilNgqH9T</a>
          <a href="https://t.co/z8mJWS8J9c">pic.twitter.com/z8mJWS8J9c</a></p>
          &mdash; OpenAI (@OpenAI)
          <a href="https://twitter.com/OpenAI/status/1852033101855097151?ref_src=twsrc%5Etfw">October 31, 2024</a>
        </blockquote>
      `,
    },
    {
      category: "Tutorial",
      tweetHtml: `
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">This is what React Native looks like inside.
          <a href="https://twitter.com/hashtag/reactjsconf?src=hash&amp;ref_src=twsrc%5Etfw">#reactjsconf</a>
          <a href="http://t.co/o2Kp87Wfo5">pic.twitter.com/o2Kp87Wfo5</a></p>
          &mdash; React (@reactjs)
          <a href="https://twitter.com/reactjs/status/560861087914934272?ref_src=twsrc%5Etfw">January 29, 2015</a>
        </blockquote>
      `,
    },
  ];

  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        {blogPosts.map((post, index) => (
          <div className="blog__card" key={index}>
            <div className="blog__thumb">
              <a href="#">
                <span className="blog__category">{post.category}</span>
              </a>
            </div>
            <div className="blog__details">
              <iframe
                src={post.iframeSrc}
                height="350"
                width="300"
                style={{ border: "none" }}
                allow="fullscreen"
                title={`Embedded Post ${index + 1}`}
              ></iframe>
            </div>
          </div>
        ))}
        {twitterPosts.map((post, index) => (
          <div className="blog__card" key={`twitter-${index}`}>
            <div className="blog__thumb">
              <a href="#">
                <span className="blog__category">{post.category}</span>
              </a>
            </div>
            <div
              className="blog__details"
              dangerouslySetInnerHTML={{ __html: post.tweetHtml }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
