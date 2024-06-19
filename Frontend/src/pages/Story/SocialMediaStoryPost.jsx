import { useContext } from "react";
import "./story.scss";
// import {AuthContext} from "../../context/AuthContext"
const SocialMediaStoryPost = () => {
  //
  // const {currentUser}=useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Mekin Jemal",
      img: "https://c8.alamy.com/comp/2M6NAYD/group-of-several-diverse-multiracial-friends-listening-to-a-young-man-telling-a-story-2M6NAYD.jpg",
    },
    {
      id: 2,
      name: "Mekin Jemal",
      img: "https://c8.alamy.com/comp/2M6NAYD/group-of-several-diverse-multiracial-friends-listening-to-a-young-man-telling-a-story-2M6NAYD.jpg",
    },
    {
      id: 3,
      name: "Mekin Jemal",
      img: "https://c8.alamy.com/comp/2M6NAYD/group-of-several-diverse-multiracial-friends-listening-to-a-young-man-telling-a-story-2M6NAYD.jpg",
    },
    // {
    //   id: 4,
    //   name: "Mekin Jemal",
    //   img: "https://c8.alamy.com/comp/2M6NAYD/group-of-several-diverse-multiracial-friends-listening-to-a-young-man-telling-a-story-2M6NAYD.jpg",
    // },
  ];
  return (
    <div className="stories">
      <div className="currentUser">
        <img
          src="https://www.shutterstock.com/image-photo/confident-hoary-middle-aged-handsome-260nw-1733728676.jpg"
          alt=""
        />
        <span>create story</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.img} />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};
export default SocialMediaStoryPost;
