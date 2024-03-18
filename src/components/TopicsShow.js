import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./TopicsShow.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Markdown from "react-markdown";

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const content = require("../data/content.json");
const topics = require("../data/topics.json");

// Example data. Replace this with actual data fetching logic.

function TopicsShow() {
  let { id, topicId } = useParams();
  const [description, setDescription] = useState("");

  const samples = content[id][topicId] || [];

  const topic = topics[id].find((t) => t.id === Number(topicId));
  const links = topic.links || [];
  const exercises = topic.exercises || [];

  useEffect(() => {
    const getData = async () => {
      if(samples.description) {
        const resp = await fetch(samples.description);
        const data = await resp.text();
        console.log(data);
        setDescription(data);
      }
    }

    getData();
    
  }, [samples.description])

  return (
    <div>
      <h1>Topic: {topic.title}</h1>
      <Accordion allowZeroExpanded>
        { description ? (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Overview
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <Markdown>
                { description }
              </Markdown>
            </AccordionItemPanel>
          </AccordionItem>
        ) : (null) }
        
        <AccordionItem>
        <AccordionItemHeading>
            <AccordionItemButton>
              Code Samples
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {samples.codeDescriptionPairs.map((sample, index) => (
              <div key={index} className="code-description-container">
                <div className="code-container">
                  <pre>{sample.code}</pre>
                </div>
                <div className="description-container">
                  <p>{sample.description}</p>
                </div>
              </div>
            ))}
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Additional Resources
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <h1>External Links</h1>
            {links.length === 0 ? (
              <p className="no-links">No links for this topic</p>
            ) : (
              <ul>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Exercises
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="exercise-card">

              <h2 className="exercises-heading">Exercises</h2>
              {exercises.map((repo, index) => (
                <div key={index} className="exercise-item">
                  <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="exercise-link"
                  >
                    {repo}
                  </a>
                  {/* Include additional repo details if needed */}
                </div>
               ))}
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default TopicsShow;
