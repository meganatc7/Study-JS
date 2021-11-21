import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  const text = {
    first:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius dignissimos doloremque laboriosam quae, voluptatem soluta labore aspernatur. Vero, nihil a repellat accusantium cumque quod, officiis similique neque placeat alias necessitatibus!",
    second:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe amet veritatis eos eius tempora",
    third: "Lorem ipsum dolor sit amet consectetur adipisicing elit. tempora",
    forth:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum saepe amet veritatis eos eius tempora",
  };

  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is CPT-3" text={text.first} />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Possibility are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text={text.second} />
        <Feature title="Knowledgebase" text={text.third} />
        <Feature title="Education" text={text.forth} />
      </div>
    </div>
  );
};

export default WhatGPT3;
