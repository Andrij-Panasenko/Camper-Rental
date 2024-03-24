import {
  Avatar,
  Comment,
  Head,
  Item,
  Name,
  ReviewsList,
  StartsWrapper,
} from "./Reviews.styled";

import { BsFillStarFill as YellowStar } from "react-icons/bs";
import { BsFillStarFill as GreyStar } from "react-icons/bs";

export const Reviews = ({ data: { reviews } }) => {

  const YellowStarIcon = (
    <YellowStar
      style={{
        color: "#ffc531",
      }}
    />
  );

  const GreyStarIcon = (
    <GreyStar
      style={{
        color: "#f2f4f7",
      }}
    />
  );

  const Rating = ({ reviewer_rating }) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < reviewer_rating) {
        stars.push(<span key={i}>{YellowStarIcon}</span>);
      } else {
        stars.push(<span key={i}>{GreyStarIcon}</span>);
      }
    }
    return <StartsWrapper>{stars}</StartsWrapper>;
  };

  return (
    <>
      <ReviewsList>
        {reviews.map((item) => (
          <Item key={item.reviewer_name}>
            <Head>
              <Avatar>
                <p>{item.reviewer_name[0]}</p>
              </Avatar>
              <div>
                <Name>{item.reviewer_name}</Name>
                <Rating reviewer_rating={item.reviewer_rating} />
              </div>
            </Head>
            <Comment>{item.comment}</Comment>
          </Item>
        ))}
      </ReviewsList>
    </>
  );
};

