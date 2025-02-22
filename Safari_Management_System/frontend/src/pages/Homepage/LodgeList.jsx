import React from 'react';
import LodgeCard from './LodgeCard';

const lodges = [
  { id: 1, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4eb6eed545e14321eade99781e6d1426c7101b1cb69242e46768766a03ba605?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab", type: "Lodge Type", location: "Location", price: "$XXX" },
  { id: 2, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4eb6eed545e14321eade99781e6d1426c7101b1cb69242e46768766a03ba605?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab", type: "Lodge Type", location: "Location", price: "$XXX" },
  { id: 3, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4eb6eed545e14321eade99781e6d1426c7101b1cb69242e46768766a03ba605?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab", type: "Lodge Type", location: "Location", price: "$XXX" },
  { id: 4, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4eb6eed545e14321eade99781e6d1426c7101b1cb69242e46768766a03ba605?placeholderIfAbsent=true&apiKey=d7fdf129aacf40d1a5b25f2e0fdc66ab", type: "Lodge Type", location: "Location", price: "$XXX" },
];

const LodgeList = () => {
  return (
    <section className="lodge-list">
      <div className="lodge-grid">
        {lodges.map((lodge) => (
          <LodgeCard key={lodge.id} {...lodge} />
        ))}
      </div>
    </section>
  );
};

export default LodgeList;