import React from "react";
import Template from "../components/template";

const Projects: React.FC = () => {
  return (
    <Template>
      <div style={{ gridColumn: 2, gridRow: 2 }}>
        <h1>Projects</h1>
        <p>
          Here you'll find a collection of my various projects that are
          completed or currently in development. Each project features a brief
          description and link to their respective GitHub repos in the header.
          For some of my more recent projects, you'll also find an accompanying
          blog post where I delve into the specifics of each project under my{" "}
          <a style={{ color: "black" }} href="/blog">
            Blog
          </a>{" "}
          page.
        </p>

        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />
        
        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/roblburris/FaceRecogBackend"
            style={{ color: "black" }}
          >
            AudioBolt - Live Subtitling
          </a>
        </h3>
        <p>
          In February 2021, a friend and I attended TreeHacks, an annual Hackathon at Stanford University, where we built a desktop app that provided live subtitling for any audio playing on your computer. We wanted to build something that helped make computer usage more accesible for everyone. I worked on the backend of AudioBolt where I deployed the state of the art machine learning model we were using and setup a simple TCP server in Python to receive audio data from clients. 
        </p>
        
        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />
        
        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/roblburris/FaceRecogBackend"
            style={{ color: "black" }}
          >
            FaceNote - Facial Recognition App
          </a>
        </h3>
        <p>
          In October 2020, a friend and I attended Dubhacks, an annual Hackathon at the University of Washington, where we built a tool for easily getting general information on people in a Zoom call. With everything going online due to the ongoing COVID-19 pandemic, we wanted to create something that would make it easier for people in their Zoom meetings to remember people so we ended building FaceNote which is an Electron.js desktop app that uses facial recognition to return details on a participant in a Zoom call. I worked on the backend of FaceNote where I designed the database schema using MongoDB and integrated it into our Go HTTP backend. 
        </p>
        
        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />

        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/roblburris/personal-website"
            style={{ color: "black" }}
          >
            Personal Website
          </a>
        </h3>
        <p>
          My website (the one you're on right now) is a revamp of my old
          website. Before, I used plain HTML/CSS for the frontend but with this
          website, I switched to a React.js frontend which reflected a drastic
          improvement in my website's mobile layout. For routing, I used the
          Next.js framework which prerenders every page and also reflects my
          switch to client side rendering. Overall, this project introduced me
          to React.js, TypeScript, and Next.js which are all things I plan to
          incorporate in future projects.
        </p>

        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />

        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/vladov3000/rasa-chatbot"
            style={{ color: "black" }}
          >
            TenBot
          </a>
        </h3>
        <p>
          In August, I had the chance to attend my first hackathon (
          <a
            href="https://hack20.dubhacks.co/"
            style={{ textDecoration: "underline", color: "black" }}
          >
            Hack'20
          </a>
          ) where two of my friends and I built TenBot. Motivated by the
          'Quarantine' track, we aimed to create a medical scheduling chatbot
          for Telegram where users could easily schedule doctor's appointments
          through Google Calendar. To do this, we made use of Rasa, an open
          source natural language processing framework, where we trained and
          deployed our chatbot in under 24 hours. Right now, we are still
          working on TenBot and aim to release a more stable version (NLP
          currently needs some work) that runs on both Telegram and Facebook
          Messenger.
        </p>

        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />

        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/roblburris/derivatives-pricing"
            style={{ color: "black" }}
          >
            Financial Derivatives Pricer
          </a>
        </h3>
        <p>
          As an introduction to quanitative finance, I decided to create a stock
          options pricer that uses Black-Scholes and Binomial Pricing models to
          compute the value of any existing options contract listed on Yahoo
          Finance. This was built entirely in Python and inspired me to continue
          studying quanitative finance (currently I'm reading{" "}
          <i>Options, Futures, and Other Derivatives</i> by John C. Hull).
        </p>

        <hr
          style={{
            borderWidth: 0,
            height: "1px",
            color: "gray",
            backgroundColor: "#e4e8eb",
          }}
        />

        <h3 style={{ textDecoration: "underline" }}>
          {" "}
          <a
            href="https://github.com/vladov3000/pydproc"
            style={{ color: "black" }}
          >
            pydproc
          </a>
        </h3>

        <p>
          pydproc is Python3 package that provides a simple to use command line
          interface for periodic data retrieval from APIs. Using inputs from a
          YAML, pydproc builds a new Docker image specific to that process. The
          user can then run, stop, and restart these processes for pydproc to
          start collecting data. When the user wants this data, they can easily
          retrieve it along with the run logs. I built pydproc with two friends
          in April 2020 and we're proud to have it up on PyPI so anyone can
          install it using the command <code> pip install pydproc</code>.
        </p>
      </div>
    </Template>
  );
}

export default Projects;
