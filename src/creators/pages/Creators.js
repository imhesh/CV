import React from "react";
import CreatorsList from "../components/CreatorsList";

function Creators() {
  const CREATORSL = [
    {
      id: "c1",
      name: "Ramu Kaka",
      image:
        "https://i.pinimg.com/236x/c4/20/a1/c420a1e52df98dbc6528547cc78c8192--professional-services-cleaning-services.jpg",
      concepts: "3",
      games: "2",
    },
    {
      id: "c2",
      name: "Shamu Kaka",
      image:
        "https://i.pinimg.com/236x/c4/20/a1/c420a1e52df98dbc6528547cc78c8192--professional-services-cleaning-services.jpg",
      concepts: "4",
      games: "5",
    }
  ];
  return <CreatorsList cList={CREATORSL} />;
}
export default Creators;
