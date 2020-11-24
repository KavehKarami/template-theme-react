import React from 'react';
import ClockIcon from '../icons/ClockIcon';
import LikeIcon from '../icons/LikeIcon';
import ViewIcon from '../icons/ViewIcon';

const BlogCard = (props) => {
  return (
    <div className="blogsCard">
      <div className="blogCard-header">
        <div className="imgBx">
          <img src={props.imgURL} alt="" />
        </div>
        <div className="arrow"></div>
      </div>

      <div className="content">
        <div className="details">
          <div className="d-flex align-items-center">
            <span className="ml-2">{123123}</span>
            <ViewIcon />
          </div>
          <div className="d-flex align-items-center">
            <span className="ml-2">99/08/26</span>
            <ClockIcon />
          </div>
          <div className="d-flex align-items-center">
            <span className="ml-2">{123123}</span>
            <LikeIcon />
          </div>
        </div>
        <h4 className="title">{props.title}</h4>
        <div className="description">{props.description}</div>
        <a href={props.href || "/#"} className="readMore">برای دیدن کلیک کنید</a>
      </div>
    </div>
  );
}

export default BlogCard;