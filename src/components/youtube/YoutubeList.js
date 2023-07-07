import React from 'react';
import { Youtubedata } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = (props) => {
    return (
        <div className="youtube-list">
        {props.children}
      {Youtubedata.map((item, index) => {
        let NewClass = "";
        if (index === 1) NewClass = "Test";
        return (
          <YoutubeItem
            key={item.id}
            images={item.images}
            title={item.title}
            author={item.author}
            className={NewClass}
          />
        );
      })}
   
      
    </div>
    );
};

export default YoutubeList;