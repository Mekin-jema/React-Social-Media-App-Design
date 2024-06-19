import "./story.scss";
import { StoriesData } from "./StoriesData"; // You can replace this with your actual data source

const Story = () => {
  return (
    <div className="storyPage">
      <div className="stories">
        {StoriesData.map((story, index) => (
          <div key={index} className="story">
            <img src={story.image} alt={story.title} className="storyImage" />
            <div className="storyInfo">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <span>{story.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
