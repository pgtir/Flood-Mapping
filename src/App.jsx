import "./App.scss";
import { useState } from "react";
import Globe from "./components/Globe";
import Navbar from "./components/Navbar";
import ArrowRight from "./components/ArrowRight";

function App() {
  const [section, setSection] = useState("home");
  const imageSources = [
    {
      extension: "jpg",
      link: "https://weather.com/en-IN/india/news/news/2021-10-21-death-toll-in-rain-ravaged-uttarakhand-rises-to-54",
    },
    {
      extension: "webp",
      link: "https://indianexpress.com/article/india/uttarakhand-floods-still-homeless-four-years-on-4919426/",
    },
    {
      extension: "avif",
      link: "https://www.livemint.com/news/india/uttarakhand-rain-rescue-operation-landslide-road-block-rs-11-crore-to-flood-victims-rishikesh-badrinath-nhjakhna-11692441761744.html",
    },
    {
      extension: "webp",
      link: "https://economictimes.indiatimes.com/news/india/uttarakhand-flash-floods-and-landslides-death-toll-mounts-to-54-five-missing/articleshow/87178423.cms?from=mdr",
    },
    {
      extension: "jpg",
      link: "https://indiaclimatedialogue.net/2020/09/11/flash-floods-surge-in-himalayas-due-to-extreme-rain/",
    },
    {
      extension: "webp",
      link: "https://floodlist.com/asia/india-floods-landslides-uttarakhand-october-2021",
    },
  ];

  const team = [
    "Mansi Bisht",
    "Pragati Rawat",
    "Prince Saini",
    "Sachin Kumar",
    "Adarsh Kumar",
  ];

  const aboutCards = [
    "Uttarakhand, nestled in the Himalayan valleys, faces a significant risk of flash floods due to its location. The state has a history of grappling with heavy rainfall and flooding, particularly during the monsoon. However, the events of 2013 stand out as one of India's worst natural disasters, claiming 4,000 lives and impacting nearly a million people.",
    "On February 7, 2021, a flood hit Joshimath in Chamoli district, causing severe damage to hydroelectric power projects along the Dhauliganga River. The disaster, possibly triggered by an avalanche, led to a glacier collapse in Joshimath. The falling debris from a height of 5,600 meters struck the valley floor at 3,500 meters, resulting in the loss of 71 lives, with around 100 still missing.",
    "These incidents underscore the severe vulnerability of Uttarakhand to natural disasters, particularly in its mountainous terrain. They emphasize the urgent need for enhanced disaster preparedness measures, including robust early warning systems and resilient infrastructure, to safeguard lives and mitigate the impact of future calamities in this fragile region.",
  ];

  return (
    <div className="app">
      <Navbar section={section} setSection={setSection} />
      <div id="home" className="banner">
        <img
          className="banner-image"
          src="/assets/sentinel-img.jpg"
          alt="sentinel-data-map"
        />
        <div className="banner-content">
          <div className="gbpuat-info">
            <img src="/assets/GBPUAT.svg" alt="gbpuat" />
            <span>College Of Technology, GBPUAT, Pantnagar</span>
          </div>
          <p>Uttarakhand Flood Monitoring System using Sentinel-1</p>
          <div className="action-btns">
            <div
              className="application-btn"
              onClick={() =>
                window.open(
                  "https://proj-42934.projects.earthengine.app/view/flood-mapping",
                  "_blank"
                )
              }
            >
              <span>Visit Application</span>
              <Globe />
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://code.earthengine.google.com/f9fa83b6e77793fd4556be9745506ddc",
                  "_blank"
                )
              }
              className="code-btn"
            >
              <span>See Code</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div className="about-head">
          <h2>About</h2>
          <div className="border-div" />
        </div>
        <div className="about-content-container">
          <div className="blue-line" />
          <div className="about-cards">
            {aboutCards.map((content, i) => (
              <div key={i} className="about-card">
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="images">
        <div className="images-head">
          <h2>Images</h2>
          <div className="border-div" />
        </div>
        <div className="photos">
          {imageSources.map((item, i) => (
            <img
              key={i}
              alt={`/assets/ukFlood${i + 1}`}
              onClick={() => window.open(item.link, "_blank")}
              src={`/assets/ukFlood${i + 1}.${item.extension}`}
            />
          ))}
        </div>
      </div>
      <div id="team">
        <div className="teams-head">
          <h2>Team Members</h2>
          <div className="border-div" />
        </div>
        <div className="members-list">
          {team.map((member) => (
            <span key={member}>{member}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
